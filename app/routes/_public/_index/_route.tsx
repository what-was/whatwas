import { useUser } from '@clerk/remix';
import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, Link, useLoaderData } from '@remix-run/react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HabitCarousel } from '~/components/habit-carousel';
import { Logo } from '~/components/logo';
import { Button } from '~/components/ui/button';
import { REDIRECT_ROUTES } from '~/lib/constants';
import { cn } from '~/lib/utils';

const generateMockData = (years = 4) => {
  return Array.from({ length: 365 * years }, (_, index) => ({
    date: new Date(new Date().getFullYear() - years, 0, index + 1).toISOString(),
    count: Math.floor(Math.random() * 20),
    level: Math.floor(Math.random() * 4),
  }));
}


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const mockData = generateMockData(4)
  return { mockData };
};


export default function AppIndex() {
  const { user } = useUser();
  const { mockData } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col h-[calc(10*100vh)] mx-auto">
      <div className='flex container mx-auto py-6'>
        <Logo />
      </div>

      <motion.div className={
        cn('fixed max-w-full')
      }
        animate={{ bottom: 0 }}
        // Fade in when the element enters the viewport:
        whileInView={{ bottom: '0' }}
        // Animate the component when its layout changes:
        // layout
        // Style now supports indepedent transforms:
        style={{ bottom: '-100svh' }}
      >

        <HabitCarousel data={mockData} />
      </motion.div>

      <motion.div className='container mx-auto mt-[100svh]'>
        <Button asChild>
          {!user?.id ? (
            <Link to={REDIRECT_ROUTES.GUEST} prefetch="intent">
              Login
            </Link>
          ) : (
            <Link to={`${user.username}`} prefetch="intent">
              {user.username}
            </Link>
          )}
        </Button>
      </motion.div>

      <Outlet />
    </div>
  );
}
