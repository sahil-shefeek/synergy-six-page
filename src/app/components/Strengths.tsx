import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const strengths = ["Collaboration", "Innovation", "Adaptability", "Leadership", "Problem-solving", "Communication"]

export default function Strengths() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Strengths</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {strengths.map((strength, index) => (
          <Card key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">{strength}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

