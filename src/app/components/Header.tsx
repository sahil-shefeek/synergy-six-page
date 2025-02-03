'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Synergy Six Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-primary">Synergy Six</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  )
}

