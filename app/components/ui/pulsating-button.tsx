import React from "react";
import { Button, ButtonProps } from '~/components/ui/button';

import { cn } from "~/lib/utils";

interface PulsatingButtonProps
  extends ButtonProps {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <Button
      variant='unstyled'
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-center text-white dark:bg-blue-500 dark:text-black",
        className,
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      type='button'
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
    </Button>
  );
}
