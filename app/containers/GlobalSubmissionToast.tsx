import { useTransition } from "@remix-run/react";
import { Box, Loader } from "@mantine/core";

export const GlobalSubmissionToast = () => {
  const transition = useTransition();

  if (transition.state !== "idle") {
    // absolute position the toast at the bottom of the screen
    return (
      <Box className="fixed bottom-8 left-8 z-50">
        <Loader />
      </Box>
    );
  }

  return null;
};
