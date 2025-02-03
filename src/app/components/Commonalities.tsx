import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const commonalities = [
  {
    title: "Day Scholars Unite",
    description: "The daily commute gang - we've mastered the art of power naps during travel!"
  },
  {
    title: "Sibling Squad",
    description: "Each of us knows the ups and downs of sibling dynamics - from fights to being each other's biggest supporters."
  },
  {
    title: "Theory Class Critics",
    description: "Long theory classes? That's our cue to collectively perfect the art of creative distractions."
  },
  {
    title: "Night Owls",
    description: "Late night discussions are our specialty - from tech debates to life's mysteries, we cover it all."
  },
  {
    title: "Assignment Adventures",
    description: "We complain about assignments but always end up helping each other out - that's what friends are for!"
  },
  {
    title: "Meme Enthusiasts",
    description: "Our group chat is basically a meme repository at this point - keeping spirits high, one meme at a time."
  }
]

export default function Commonalities() {
  return (
    <section className="py-20 bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">What Binds Us Together</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {commonalities.map((item, index) => (
          <Card key={index} className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg hover:bg-opacity-25 transition-all">
            <CardHeader>
              <CardTitle className="text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

