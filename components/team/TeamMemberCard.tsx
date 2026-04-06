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
  // Updated card styles for premium theme
  const getCardStyle = () => {
    switch (variant) {
      case "founders":
        return "border-blue-500/20 hover:border-blue-500/50"
      case "developer":
        return "border-green-500/20 hover:border-green-500/50"
      case "mentors":
        return "border-purple-500/20 hover:border-purple-500/50"
      default:
        return "border-border/50"
    }
  }

  // Updated role badge colors
  const getRoleColor = () => {
    switch (variant) {
      case "founders":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      case "developer":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "mentors":
        return "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <Card
      className={`group relative overflow-hidden rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${getCardStyle()}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/5 pointer-events-none" />
      
      <CardContent className="p-6 md:p-8 relative z-10">
        {/* Profile Image */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 md:mb-8 transform group-hover:scale-105 transition-transform duration-300">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full -m-2 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className={`absolute inset-0 rounded-full border-2 ${getRoleColor()} opacity-20`} />
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="rounded-full object-cover border-4 border-background shadow-md relative z-10"
          />
        </div>

        {/* Name and Title */}
        <div className="text-center mb-4 md:mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <Badge className={`${getRoleColor()} px-3 py-1 text-sm font-semibold shadow-sm border-0`}>{member.title}</Badge>
        </div>

        {/* Description */}
        <div
          className="text-muted-foreground text-sm leading-relaxed mb-6 md:mb-8 text-center min-h-[50px] md:min-h-[60px]"
          dangerouslySetInnerHTML={{ __html: member.description }}
        />

        {/* Expertise Tags */}
        {member.expertise && member.expertise.length > 0 && (
          <div className="mb-6 md:mb-8">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 text-center">Expertise</h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {member.expertise.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-border/50 text-muted-foreground bg-background/50 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300"
                >
                  <Star className="h-3 w-3 mr-1.5 text-primary" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Social Links */}
        {(member.linkedin || member.twitter || member.github) && (
          <div className="flex justify-center gap-3 pt-4 border-t border-border/50">
            {member.linkedin && (
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                asChild
              >
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            )}

            {member.twitter && (
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
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
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                asChild
              >
                <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s GitHub`}>
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

