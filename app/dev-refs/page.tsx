import { TeamSection } from "@/components/team/TeamSection"


const developer = [
  {
    id: 1,
    name: "Ramanath Rakshit",
    title: "Lead Full-Stack Developer",
    image: "https://res.cloudinary.com/dyahhqfzj/image/upload/v1751108922/dev_uxh3kx.png",
    description:
      "Crafting seamless digital experiences with cutting-edge technology. Passionate about building scalable and intuitive learning platforms.",
    expertise: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "DevOps"],
    github: "https://github.com/raxy777",
    linkedin: "https://linkedin.com/in/ramanath-rakshit",
  },
]



export default function TeamPage() {
  return (
    <div className="min-h-screen pt-10 bg-blue-100 text-gray-800">
      {/* Main content area with consistent padding and spacing */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-16 md:space-y-24">
          {/* Developer Section */}
          <TeamSection
            title="Development Team"
            subtitle="The architects behind this platform."
            members={developer}
            variant="developer"
          />
        </div>
      </main>
    </div>
  )
}
