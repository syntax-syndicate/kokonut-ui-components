"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

type LetterState = {
  char: string
  isMatrix: boolean
  isSpace: boolean
}

export default function MatrixText() {
  const originalText = "The hacker bmellon"
  const [letters, setLetters] = useState<LetterState[]>(
    originalText.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === "",
    })),
  )
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomChar = useCallback(() => (Math.random() > 0.5 ? "1" : "0"), [])

  const animateLetter = useCallback(
    (index: number) => {
      setLetters((prev) =>
        prev.map((letter, i) =>
          i === index && !letter.isSpace ? { ...letter, char: getRandomChar(), isMatrix: true } : letter,
        ),
      )

      // Revert back to original after a brief delay
      setTimeout(() => {
        setLetters((prev) =>
          prev.map((letter, i) => (i === index ? { ...letter, char: originalText[i], isMatrix: false } : letter)),
        )
      }, 500) // Adjust this value to control how long each letter stays in matrix mode
    },
    [getRandomChar, originalText],
  )

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
    let currentIndex = 0

    const interval = setInterval(() => {
      if (currentIndex >= originalText.length) {
        clearInterval(interval)
        setIsAnimating(false)
        return
      }

      animateLetter(currentIndex)
      currentIndex++
    }, 100) // Adjust this value to control the speed of the animation

    return () => clearInterval(interval)
  }, [animateLetter, originalText])

  useEffect(() => {
    const timer = setTimeout(startAnimation, 1000)
    return () => clearTimeout(timer)
  }, [startAnimation])

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-wrap">
        <AnimatePresence>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className={`text-4xl md:text-6xl font-mono ${letter.isMatrix ? "text-green-500" : "text-white"}`}
              initial={{ opacity: 1 }}
              animate={{
                opacity: letter.isMatrix ? [1, 0.7, 1] : 1,
                scale: letter.isMatrix ? [1, 1.1, 1] : 1,
                textShadow: letter.isMatrix ? "0 5px #00ff00" : "none",
              }}
              transition={{
                duration: 0.2,
                repeat: letter.isMatrix ? 1 : 0,
              }}
            >
              {letter.isSpace ? "\u00A0" : letter.char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

