import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const commonalities = ["Shared Vision", "Commitment to Excellence", "Passion for Innovation", "Team Spirit"]

export default function Commonalities() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Commonalities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {commonalities.map((commonality, index) => (
          <Card key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white">{commonality}</CardTitle>
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

