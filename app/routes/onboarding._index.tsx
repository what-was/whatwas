import { MouseEventHandler, useEffect, useState } from 'react';
import { json, redirect } from '@remix-run/node';
import { useNavigate, useLoaderData, Form } from '@remix-run/react';
import { getAuth } from '@clerk/remix/ssr.server';
import { useUser } from '@clerk/remix';
import type { LoaderFunction, ActionFunction } from '@remix-run/node';
import { Typography } from '~/components/ui/typography';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { getUser, updateClerkMeta } from '~/lib/auth';
import { calculateAge } from '~/lib/age';

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect('/sign-in');
  }

  return json({});
};

export const action: ActionFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect('/sign-in');
  }

  const localUser = await getUser(userId);
  // if (localUser) {
  //   return redirect('/habits');
  // }

  const formData = await args.request.formData();
  const firstNameInput = formData.get('firstName');
  const lastNameInput = formData.get('lastName');
  const birthDateInput = formData.get('birthDate');

  if (birthDateInput && typeof birthDateInput === 'string') {
    const birthDate = new Date(birthDateInput);
    await updateClerkMeta(userId, {
      birthDate: birthDate.toISOString(),
    });
  }

  return redirect('/habits');
};

export default function OnboardingIndex() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // // Redirect if user already has complete profile
  // useEffect(() => {
  //   if (user?.firstName && user?.lastName) {
  //     navigate('/habits');
  //   }
  // }, [user, navigate]);

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      await user?.update({
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
      });
      navigate('/habits');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <Typography as='h1' variant="h2">Complete Your Profile</Typography>
          <Typography variant='muted'>Step {step} of {totalSteps}</Typography>
        </div>

        <div className="relative">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
        <Form method="post" action="/onboarding">

          {step === 1 && (
            <div className="space-y-4">
              <Typography as='h2' variant="h3">What's your first name?</Typography>
              <Input
                type="text"
                name="firstName"
                defaultValue={user?.firstName ?? ''}
                placeholder="Enter your first name"
                required
              />
              <Button
                type='button'
                onClick={nextStep}
                size='full'
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Typography as='h2' variant="h3">And your last name?</Typography>
              <Input
                type="text"
                name="lastName"
                defaultValue={user?.lastName ?? ''}
                placeholder="Enter your last name"
                className="w-full p-3 rounded-md border bg-background text-foreground"
                required
              />
              <div className="space-y-4">
                <Button
                  type='button'
                  onClick={nextStep}
                  size='full'
                >
                  Continue
                </Button>
                <Button
                  type='button'
                  onClick={prevStep}
                  variant='secondary'
                  size='full'
                >
                  Back
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Typography as='h2' variant="h3">What's your birth date?</Typography>
              <Input
                type="date"
                name="birthDate"
                max={getMaxDate()}
                placeholder="Enter your birth date"
                required
              />
              <Button
                type='submit'
                size='full'
              >
                Complete
              </Button>
              <Button
                // onClick={handleSubmit}
                type='submit'
                variant='secondary'
                size='full'
              >
                Skip
              </Button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

/**
 * Get the maximum date for the birth date input
 * @returns {string} The maximum date for the birth date input
 */
const getMaxDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 8);
  return today.toISOString().split('T')[0];
};

/**
 * Get the minimum date for the birth date input
 * @returns {string} The minimum date for the birth date input
 */
const getMinDate = () => {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 120);
  return today.toISOString().split('T')[0];
};