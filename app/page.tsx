import Link from "next/link"
import { 
  Brain, 
  BarChart3, 
  ShieldAlert, 
  Bell, 
  FileSearch,
  Link2,
  ArrowRight,
  Sparkles,
  Lock,
  Smartphone,
  Eye,
  FileWarning
} from "lucide-react"

const features = [
  {
    icon: Link2,
    title: "Spam URL Detection",
    description: "Detects and classifies spam/malicious URLs using sandbox analysis and ML models like Random Forest and XGBoost.",
    lead: "Gangoda G.W.A.P."
  },
  {
    icon: FileWarning,
    title: "Malware Document Detection",
    description: "Sandbox-based system to detect malware-infected documents (PDF, DOCX, PPTX, EXCEL) with runtime behavior analysis.",
    lead: "Hitihaminelage K.I.S."
  },
  {
    icon: Brain,
    title: "Emotion  Detection",
    description: "Behavior and emotion analysis using BERT/DeBERTa to detect fake/manipulative accounts with intensity-level classification.",
    lead: "Rupasinghe P.S.N.A."
  },
  {
    icon: Eye,
    title: "Sensitive Content Detection",
    description: "ML-based detection of nudity, NIC images, and credit card details before sending with on-device inference.",
    lead: "Perera N.T.K.D."
  },
]

const stats = [
  { value: "4", label: "Research Components", sublabel: "Integrated System" },
  { value: "ML", label: "Core Technology", sublabel: "Multi-Modal AI" },
  { value: "Real-time", label: "Monitoring", sublabel: "Instant Alerts" },
  { value: "Privacy", label: "First Design", sublabel: "On-Device" },
]

const techStack = [
  "Python", "Kotlin", "Flutter", "TensorFlow Lite", 
  "PyTorch Mobile", "SQLlite", "BERT", "DeBERTa",
  "MobileNetV3", "Cuckoo Sandbox", "Docker"
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Child Safety Research</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-muted-foreground">2025-2026</span>
            </div>
            
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="gradient-text">Multi-Modal Machine Learning Approach</span>  For  
              <br />
              Threat Detection in WhatsApp and Telegram
            </h1>
            
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              A unified machine learning approach for detecting threats in WhatsApp and Telegram - protecting young users without compromising privacy.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/domain"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#pillars"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card"
              >
                View Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Pillars Section */}
      <section id="pillars" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Research Pillars</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four Components,
              <span className="gradient-text"> One Platform</span>
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Each team member leads a specific threat detection domain, contributing to the 
              holistic CyraGuard protection system.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
              >
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                  <feature.icon className="h-7 w-7" />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                
                <div className="flex items-center gap-2 text-xs text-primary">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold">
                    {feature.lead.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <span>Lead: {feature.lead}</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All four pillars share a unified mobile application backbone - trained together, deployed individually
          </p>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="border-t border-border/50 bg-gradient-to-b from-card/50 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-px w-8 bg-primary" />
                Project Abstract
              </div>
              
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Literature Survey & Research Problem
              </h2>
              
              <div className="mt-8 space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Children are increasingly exposed to online threats through messaging platforms 
                  like WhatsApp and Telegram. Despite the growing concern among parents and authorities, 
                  there is no unified solution that addresses multiple threat vectors simultaneously.
                </p>
                <p className="leading-relaxed">
                  Current solutions focus on single aspects - either content moderation, malware detection, 
                  or user verification - leaving gaps that malicious actors can exploit. Our research 
                  presents a multi-modal approach that combines URL analysis, document scanning, 
                  behavioral analysis, and image content detection.
                </p>
                <p className="leading-relaxed">
                  The system operates entirely on-device to preserve privacy, with a unified parental 
                  dashboard for monitoring and real-time alerts when threats are detected.
                </p>
              </div>
              
              <blockquote className="mt-8 border-l-2 border-primary pl-6 italic text-foreground">
                &quot;A framework that is private by design, multi-modal by architecture, and explainable by default.&quot;
              </blockquote>
            </div>
            
            <div className="space-y-6">
              {/* Research Gap Card */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <ShieldAlert className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Research Gap</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Current messaging security solutions are fragmented - URL checkers, antivirus scanners, 
                  and content filters operate in isolation. No end-to-end framework addresses URL threats, 
                  malware documents, fake users, and sensitive content simultaneously with privacy preservation.
                </p>
              </div>
              
              {/* Objectives Card */}
              <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Main Objective</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Develop a lightweight, privacy-preserving mobile application that safeguards children 
                  using WhatsApp and Telegram through multi-modal threat detection, with a unified 
                  parental dashboard for monitoring and real-time alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Technology Stack</h2>
            <p className="mt-2 text-muted-foreground">Powering our Multi-modal machine learning approach for  threat detection in WhatsApp and Telegram</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border/50 bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-12 sm:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Want to Learn More?
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Explore our research methodology, view project milestones, or get in touch with our team.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/documents"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:shadow-primary/20"
                >
                  <FileSearch className="h-4 w-4" />
                  View Documents
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
