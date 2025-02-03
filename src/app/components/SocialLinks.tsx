import { Button } from "@/components/ui/button"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Connect With Us</h2>
      <div className="flex justify-center space-x-4">
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
          <FaFacebook className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
          <FaTwitter className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
          <FaLinkedin className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:text-gray-200">
          <FaInstagram className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

