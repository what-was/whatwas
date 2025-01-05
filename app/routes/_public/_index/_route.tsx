import { useUser } from '@clerk/remix';
import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet, Link, useLoaderData } from '@remix-run/react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { HabitCarousel } from '~/components/habit-carousel';
import { Logo } from '~/components/logo';
import { Button } from '~/components/ui/button';
import Marquee from '~/components/ui/marquee';
import PulsatingButton from '~/components/ui/pulsating-button';
import TextReveal from '~/components/ui/text-reveal';
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
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const scale = useTransform(springY, [0, 1], [1, 5]);

  return (
    <div className="flex flex-1 flex-col h-[calc(10*100vh)] mx-auto">
      {/* <div className='flex container mx-auto py-6'>
        <Logo />
      </div> */}

      <>
        <motion.div className={
          cn('fixed bottom-0 max-w-full bg-sidebar/50 backdrop-blur-sm')
        }

          // // Fade in when the element enters the viewport:
          // whileInView={{ bottom: '0' }}
          // Animate the component when its layout changes:
          // layout
          // Style now supports indepedent transforms:
          style={{ scale }}
        // style={{ position: "relative", bottom: '-10svh' }}
        >
          <Marquee className='[--duration:180s]' pauseOnHover>
            <HabitCarousel data={mockData} />
          </Marquee>
          <div className='pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-sidebar' />
          <div className='pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-sidebar' />
        </motion.div>
      </>

      <div className="rounded-lg border bg-background text-foreground">
        <div className='flex min-h-64 items-center justify-center '>
          <TextReveal text="What was the name of that movie I wanted to watch?" />
        </div>
        <div className='flex min-h-64 items-center justify-center z-30'>
          <TextReveal text="What was the name of the person I met at that event?" />
        </div>
      </div>



      <div className='container mx-auto my-[100svh]'>
        {!user?.id ? (
          <Button asChild>
            <Link to={REDIRECT_ROUTES.GUEST} prefetch="intent">
              Login
            </Link>
          </Button>
        ) : (
          <PulsatingButton>
            <Link to={`${user.username}`} prefetch="intent">
              {user.username}
            </Link>

          </PulsatingButton>
        )}
      </div>

      <Outlet />
    </div>
  );
}
