'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '~/hooks/use-scroll-motion'

const phrases = [
  "the Renaissance",
  "the Industrial Revolution",
  "the Digital Age",
  "the Space Race",
]

export default function ScrollAnimatedHero() {
  const currentPhrase = useScrollAnimation(phrases)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-600 to-blue-600 sticky top-0">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        What was <motion.span>{currentPhrase}</motion.span>?
      </h1>
    </div>
  )
}

