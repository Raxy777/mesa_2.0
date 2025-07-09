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
        return "from-amber-600 to-yellow-700" // Darker yellows/oranges
      case "developer":
        return "from-teal-600 to-cyan-700"    // Darker teals/cyans
      case "mentors":
        return "from-purple-600 to-indigo-700" // Darker purples/indigos
      default:
        return "from-gray-700 to-gray-900"      // Default dark gray
    }
  }

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-black bg-gradient-to-r ${getTitleGradient()}`}
        >
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
