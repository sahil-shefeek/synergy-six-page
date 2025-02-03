import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const strengths = [
  {
    title: "Collaboration",
    description: "We excel in working together, combining our diverse skills and perspectives to achieve common goals effectively."
  },
  {
    title: "Innovation",
    description: "We constantly push boundaries and think outside the box to develop creative solutions to complex challenges."
  },
  {
    title: "Adaptability",
    description: "We embrace change and quickly adjust our approaches to meet evolving project requirements and technologies."
  },
  {
    title: "Leadership",
    description: "We take initiative and guide our projects with clear vision, while fostering growth and success in our team."
  },
  {
    title: "Problem-solving",
    description: "We approach challenges methodically, breaking down complex issues into manageable solutions."
  },
  {
    title: "Communication",
    description: "We maintain clear, effective dialogue ensuring alignment and understanding across all team members and stakeholders."
  }
]

export default function Strengths() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Strengths</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {strengths.map((strength, index) => (
          <Card key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">{strength.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">{strength.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

