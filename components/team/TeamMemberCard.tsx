import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Star, Twitter } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  title: string
  image: string
  description: string
  linkedin?: string
  twitter?: string
  github?: string
  expertise?: string[]
}

interface TeamMemberCardProps {
  member: TeamMember
  variant: "founders" | "developer" | "mentors"
}

export function TeamMemberCard({ member, variant }: TeamMemberCardProps) {
  // Updated card styles for light theme
  const getCardStyle = () => {
    switch (variant) {
      case "founders":
        return "bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-blue-200"
      case "developer":
        return "bg-gradient-to-br from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 border-green-200"
      case "mentors":
        return "bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-purple-200"
      default:
        return "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200"
    }
  }

  // Updated role badge colors for light theme
  const getRoleColor = () => {
    switch (variant) {
      case "founders":
        return "bg-blue-200 text-blue-800"
      case "developer":
        return "bg-green-200 text-green-800"
      case "mentors":
        return "bg-purple-200 text-purple-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  // Updated star color for expertise tags
  const starColor = "text-yellow-500"; // Brighter yellow for light theme

  return (
    <Card
      className={`group relative overflow-hidden rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${getCardStyle()}`}
    >
      <CardContent className="p-6 md:p-8 text-gray-800 relative z-10"> {/* Default text color to dark gray */}
        {/* Profile Image */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 md:mb-8 transform group-hover:scale-105 transition-transform duration-300">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="rounded-full object-cover border-4 border-white shadow-md" // White border for pop
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4 md:mb-6">
          {/* Name text color updated, gradient removed for simplicity on light theme, can be added back if desired */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {member.name}
          </h3>
          <Badge className={`${getRoleColor()} px-3 py-1 text-sm font-semibold shadow-sm`}>{member.title}</Badge>
        </div>

        {/* Description */}
        <p
          className="text-gray-600 text-sm leading-relaxed mb-6 md:mb-8 text-center min-h-[50px] md:min-h-[60px] opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          dangerouslySetInnerHTML={{ __html: member.description }}
        />

        {/* Expertise Tags */}
        {member.expertise && member.expertise.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 text-center">Expertise</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {member.expertise.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  // Updated border and text colors for expertise badges
                  className="text-xs border-gray-300 text-gray-700 bg-white bg-opacity-50 group-hover:bg-opacity-75 transition-colors duration-300"
                >
                  <Star className={`h-3 w-3 mr-1.5 ${starColor}`} />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        {(member.linkedin || member.twitter || member.github) && (
          <div className="flex justify-center gap-3 pt-4 border-t border-gray-200"> {/* Border color updated */}
            {member.linkedin && (
              <Button
                variant="ghost"
                size="icon" // Made icons slightly larger and icon-only
                className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
                asChild
              >
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                  <Linkedin className="h-7 w-7" />
                </a>
              </Button>
            )}

            {member.twitter && (
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-sky-500 transition-colors duration-300"
                asChild
              >
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Twitter`}>
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}

            {member.github && (
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                asChild
              >
                <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                  <Github className="h-7 w-7" />
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
      {/* Removed complex SVG background, as it was dark-theme specific. Can add light theme pattern if desired. */}
    </Card>
  )
}

