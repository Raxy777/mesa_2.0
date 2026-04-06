import { TeamMemberCard } from "./TeamMemberCard"

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

interface TeamSectionProps {
  title: string
  subtitle: string
  members: TeamMember[]
  variant: "founders" | "developer" | "mentors"
}

export function TeamSection({ title, subtitle, members, variant }: TeamSectionProps) {
  const getGridClass = () => {
    switch (variant) {
      case "founders":
        return "grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl"
      case "developer":
        return "grid-cols-1 md:grid-cols-1 gap-10 max-w-md"
      case "mentors":
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl"
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    }
  }

  const getTitleGradient = () => {
    switch (variant) {
      case "founders":
        return "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
      case "developer":
        return "from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400"
      case "mentors":
        return "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
      default:
        return "from-orange-500 via-amber-500 to-yellow-500"
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r ${getTitleGradient()}`}
        >
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className={`grid mx-auto ${getGridClass()}`}>
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} variant={variant} />
        ))}
      </div>
    </section>
  )
}
