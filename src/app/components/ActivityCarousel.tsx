"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const activities = [
  {
    title: "Resume Building Workshop",
    description: "Learn how to create a powerful resume and share your learnings in the Google classroom. Focus on comprehension, reflection, and analysis."
  },
  {
    title: "Learning Diary Submission",
    description: "Complete and submit your Day 1 Learning Diary (ELTD) from today's workshop by 9 AM tomorrow."
  },
  {
    title: "Team Presentation Preparation",
    description: "Prepare a 5-minute team presentation covering team name, tagline, logo, leadership roles, and team member characteristics."
  },
  {
    title: "Team Building Activities",
    description: "Participate in team activities including advertisement creation, GD preparation, and team anthem development."
  }
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
    <section className="py-24 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Current Tasks</h2>
      <div className="relative max-w-4xl mx-auto">
        <Card className="bg-white/20 backdrop-filter backdrop-blur-lg border-none">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">{activities[currentIndex].title}</h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              {activities[currentIndex].description}
            </p>
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

