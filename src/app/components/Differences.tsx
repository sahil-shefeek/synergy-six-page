import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const differences = [
  {
    name: "Niranjan",
    difference: "SPC Candidate",
    description: "Bringing leadership and structured problem-solving approaches to the team.",
  },
  {
    name: "Noel Benny",
    difference: "Basketball Player",
    description: "Contributing team spirit and strategic thinking from sports experience.",
  },
  {
    name: "Sahil Shefeek",
    difference: "Tech Guy",
    description: "Driving technical innovation and solutions within the team.",
  },
  {
    name: "Sandra Maria George",
    difference: "Rajya Puraskar Honor",
    description: "Excellence in leadership and achievement.",
  },
  {
    name: "Shifa Mol",
    difference: "NSS Volunteer",
    description: "Contributing social responsibility and community service experience.",
  },
  {
    name: "Sooraj",
    difference: "Enthusiastic Runner",
    description: "Bringing determination and endurance to team projects.",
  },
  {
    name: "Susan Joy",
    difference: "NRI Student",
    description: "Adding international perspective and cultural diversity.",
  },
  {
    name: "Wilson Nevin",
    difference: "Automobile Enthusiast",
    description: "Contributing technical expertise and innovative thinking.",
  },
]

export default function Differences() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Unique Strengths</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differences.map((difference, index) => (
          <Card key={index} className="backdrop-blur-lg bg-card/50">
            <CardHeader>
              <CardTitle className="text-primary">{difference.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-secondary mb-2">{difference.difference}</h3>
              <p className="text-muted-foreground">{difference.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

