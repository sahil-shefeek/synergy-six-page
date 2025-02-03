"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const moments = [
  {
    title: "Team Formation",
    description: "The day we came together as Synergy Six",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "First Project",
    description: "Working on our first collaborative project",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Team Building",
    description: "Our team building activities and adventures",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Achievements",
    description: "Celebrating our team's successes",
    image: "/placeholder.svg?height=400&width=600",
  },
  // Add more moments as needed
]

export default function Moments() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Moments</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {moments.map((moment, index) => (
            <CarouselItem key={index}>
              <Card className="backdrop-blur-lg bg-card/50">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={moment.image || "/placeholder.svg"}
                      alt={moment.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">{moment.title}</h3>
                    <p className="text-muted-foreground">{moment.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}

