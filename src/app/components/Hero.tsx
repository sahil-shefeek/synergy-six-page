import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Synergy Six</h1>
      <p className="text-xl text-white mb-8">Power of six, driven by synergy</p>
      <Button className="bg-white text-purple-600 hover:bg-gray-100">Learn More</Button>
    </section>
  )
}

