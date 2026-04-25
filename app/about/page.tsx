import { 
  Mail, 
  Linkedin, 
  Github, 
  GraduationCap,
  Users,
  Award,
  Link2,
  FileWarning,
  Brain,
  Eye
} from "lucide-react"

const teamMembers = [
  {
    name: "Gangoda G.W.A.P.",
    id: "IT22594440",
    role: "Spam URL Detection",
    component: "Detection and Classification of Spam URL-Based Messages",
    description: "Develops Android app for detecting spam/malicious URLs using sandbox analysis and ML models (Random Forest, XGBoost).",
    email: "it22594440@my.sliit.lk",
    linkedin: "#",
    github: "#",
    image: "/members/IT22594440.jpg",
    icon: Link2
  },
  {
    name: "Hitihaminelage K.I.S.",
    id: "IT22561220",
    role: "Malware Document Detection",
    component: "Detection of Malware-Infected Documents",
    description: "Builds sandbox-based system for malware detection in documents (PDF, DOCX, PPTX, EXCEL) with runtime behavior analysis.",
    email: "it22561220@my.sliit.lk",
    linkedin: "#",
    github: "#",
    image: "/members/IT22561220.png",
    icon: FileWarning
  },
  {
    name: "Rupasinghe P.S.N.A.",
    id: "IT22560230",
    role: "Fake User Detection",
    component: "Behavior and Emotion Analysis to Detect Fake Users",
    description: "Implements NLP + ML for detecting manipulative accounts through emotion analysis with intensity-level classification.",
    email: "it22560230@my.sliit.lk",
    linkedin: "#",
    github: "#",
    image: "/members/IT22560230.png",
    icon: Brain
  },
  {
    name: "Perera N.T.K.D.",
    id: "IT22602428",
    role: "Sensitive Content Detection",
    component: "ML-Based Sensitive Content Detection and Alert System",
    description: "Creates on-device ML system for detecting nudity, NIC images, and credit card details before sending.",
    email: "it22602428@my.sliit.lk",
    linkedin: "#",
    github: "#",
    image: "/members/IT22602428.png",
    icon: Eye
  }
]

const supervisors = [
  {
    name: "Mr. Deemantha Siriwardana",
    role: "Supervisor",
    department: "Department of Information Technology",
    description: "Senior Lecturer with expertise in Machine Learning and Cybersecurity. Guides the research methodology and technical implementation.",
    email: "",
    image: "/supervisors/supervisor.png"
  },
  {
    name: "Ms. Ayesha Wijesooriya",
    role: "Co-Supervisor",
    department: "Department of Information Technology",
    description: "Lecturer specializing in Mobile Application Development and Software Engineering. Provides guidance on system design and development.",
    email: "",
    image: "/supervisors/co-supervisor.png"
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Our Team
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Meet the
              <span className="gradient-text"> Researchers</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              The team behind CyraGuard - dedicated to protecting young users through 
              innovative multi-modal threat detection.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="border-y border-border/50 bg-card/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">4</div>
              <div className="text-sm text-muted-foreground">Researchers</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Supervisors</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">SLIIT</div>
              <div className="text-sm text-muted-foreground">University</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">CS</div>
              <div className="text-sm text-muted-foreground">Department</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section id="team" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Research Pillars</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Four Domains, One Platform</h2>
          </div>
          
          <p className="mb-12 max-w-3xl text-muted-foreground">
            Each team member leads a specific architectural domain, contributing to the holistic 
            CyraGuard threat detection platform.
          </p>
          
          <div className="grid gap-8 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card/50 transition-all hover:border-primary/50"
              >
                <div className="relative flex items-center justify-center overflow-hidden bg-background/60 p-3">
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className="h-48 w-auto max-w-full rounded-lg object-contain bg-background/80"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                    Lead Researcher
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.id}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{member.component}</p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                      title="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.github}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                      title="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All four pillars share a unified mobile application backbone - trained together, deployed individually
          </p>
        </div>
      </section>

      {/* Supervisors */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Supervisors</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {supervisors.map((supervisor) => (
              <div
                key={supervisor.name}
                className="rounded-2xl border border-border/50 bg-card/50 p-8"
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border/50 bg-background/60">
                    <img
                      src={supervisor.image}
                      alt={`${supervisor.name} profile`}
                      className={`h-full w-full object-cover ${supervisor.role === "Supervisor" ? "scale-135 object-[15%] translate-x-2" : "scale-110 object-center"}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground">{supervisor.name}</h3>
                <p className="text-sm font-medium text-primary">{supervisor.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{supervisor.department}</p>
                
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {supervisor.description}
                </p>
                
                {supervisor.email ? (
                  <a
                    href={`mailto:${supervisor.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {supervisor.email}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Info */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-12 sm:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Sri Lanka Institute of Information Technology
              </h2>
              <p className="mt-2 text-lg text-primary">Faculty of Computing</p>
              <p className="mt-6 text-muted-foreground">
                This research project is conducted as part of the final year project requirements 
                for the Bachelor of Science Honours in Information Technology degree program 
                at the Sri Lanka Institute of Information Technology.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <span className="rounded-lg border border-border/50 bg-background/50 px-4 py-2 text-muted-foreground">
                  Project ID: 24-25J-065
                </span>
                <span className="rounded-lg border border-border/50 bg-background/50 px-4 py-2 text-muted-foreground">
                  Academic Year: 2024/2025
                </span>
                <span className="rounded-lg border border-border/50 bg-background/50 px-4 py-2 text-muted-foreground">
                  Batch: 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
