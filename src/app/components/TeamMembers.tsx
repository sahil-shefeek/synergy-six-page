import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Niranjan",
    role: "Team Member",
    bio: "SPC candidate with a passion for leadership and innovation. Bringing structured problem-solving approaches to the team.",
    image: "/members/niranjan.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "niranjan@synergysix.com",
  },
  {
    name: "Noel Benny",
    role: "Team Member",
    bio: "Basketball player with a competitive spirit. Brings teamwork and strategic thinking from the court to the team.",
    image: "/members/noel.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "noel@synergysix.com",
  },
  {
    name: "Sahil Shefeek",
    role: "Team Member",
    bio: "Tech enthusiast with a deep understanding of technology. Driving technical innovation within the team.",
    image: "/members/sahil.jpg",
    github: "https://github.com/sahil-shefeek/",
    linkedin: "www.linkedin.com/in/sahil-shefeek",
    email: "sahilms345@gmail.com",
  },
  {
    name: "Sandra Maria George",
    role: "Scribe",
    bio: "Every plan starts with a note—I make sure we never miss one!",
    image: "/members/sandra.jpg",
    github: "https://github.com/SandraMariyaGeorge",
    linkedin: "https://www.linkedin.com/in/sandra-mariya-george-1a4a1624b",
    email: "sangeorge04@gmail.com",
  },
  {
    name: "Shifa Mol",
    role: "Team Member",
    bio: "NSS volunteer with a heart for community service. Contributing social responsibility and organizational skills.",
    image: "/members/shifa.jpg",
    github: "https://github.com/shifahashim",
    linkedin: "https://www.linkedin.com/in/shifa-mol-kh-870909256/",
    email: "shifahashim6@gmail.com",
  },
  {
    name: "Sooraj",
    role: "Team Member",
    bio: "Enthusiastic runner with determination and perseverance. Bringing energy and motivation to team projects.",
    image: "/members/sooraj.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sooraj@synergysix.com",
  },
  {
    name: "Susan Joy",
    role: "Team Member",
    bio: "NRI student bringing international perspective and diverse cultural insights to the team.",
    image: "/members/susan.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "susan@synergysix.com",
  },
  {
    name: "Wilson Nevin",
    role: "Team Member",
    bio: "Automobile enthusiast with a passion for mechanics and innovation. Contributing technical expertise and creative solutions.",
    image: "/members/wilson.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "wilson@synergysix.com",
  },
]

export default function TeamMembers() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden backdrop-blur-lg bg-card/50">
            <div className="aspect-square relative">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-primary">{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`mailto:${member.email}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

