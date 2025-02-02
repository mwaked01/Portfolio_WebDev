import { useState, useEffect } from "react"

export function useTypingEffect(text, speed ) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, speed, text])

  return displayedText
}

