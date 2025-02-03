import Header from "./components/Header"
import Hero from "./components/Hero"
import Moments from "./components/Moments"
import TeamMembers from "./components/TeamMembers"
import Strengths from "./components/Strengths"
import Differences from "./components/Differences"
import Commonalities from "./components/Commonalities"
import SocialLinks from "./components/SocialLinks"
import ActivityCarousel from "./components/ActivityCarousel"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
        <Moments />
        <TeamMembers />
        <Strengths />
        <Differences />
        <Commonalities />
        <SocialLinks />
        <ActivityCarousel />
        <Footer />
      </div>
    </main>
  )
}

