"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const activities = [
  "Team Building Workshop",
  "Innovation Hackathon",
  "Community Outreach",
  "Professional Development Seminar",
]

export default function ActivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length)
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Activities</h2>
      <div className="relative">
        <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{activities[currentIndex]}</h3>
            <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CardContent>
        </Card>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-200"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-200"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}

