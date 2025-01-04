import { useScroll, useTransform, MotionValue } from 'framer-motion'

export const useScrollAnimation = (phrases: string[]) => {
  const { scrollYProgress } = useScroll()

  const phraseIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, phrases.length - 1]
  )

  const currentPhrase = useTransform(phraseIndex, (latest) =>
    phrases[Math.round(latest) % phrases.length]
  )

  return currentPhrase
}

