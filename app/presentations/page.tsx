import { 
  Presentation, 
  Download, 
  Play, 
  Calendar,
  Clock,
  FileText,
  ExternalLink,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"

const presentations = [
  {
    id: 1,
    title: "Project Proposal",
    description: "Initial presentation covering project introduction, problem statement, objectives, literature survey, and proposed methodology.",
    date: "2024/08/15",
    duration: "20 minutes",
    slides: 42,
    status: "completed",
    type: "Group",
    fileName: "25-26J-065_Project_Proposal_Presentation.pptx",
    fileHref: "/presentations/25-26J-065_Project_Proposal_Presentation.pptx",
    topics: [
      "Project Overview",
      "Problem Statement",
      "Research Objectives",
      "Literature Review",
      "Proposed Methodology",
      "Timeline"
    ]
  },
  {
    id: 2,
    title: "Progress Presentation I",
    description: "First progress presentation demonstrating initial system design, data collection approach, and preliminary model development.",
    date: "2024/12/10",
    duration: "20 minutes",
    slides: 28,
    status: "completed",
    type: "Group",
    fileName: "25-26J-065_PP1_Presentation.pptx",
    fileHref: "/presentations/25-26J-065_PP1_Presentation.pptx",
    topics: [
      "Progress Summary",
      "System Architecture",
      "Data Collection",
      "Model Selection",
      "Initial Implementation",
      "Demo"
    ]
  },
  {
    id: 3,
    title: "Progress Presentation II",
    description: "Second progress presentation showcasing advanced implementation, model training results, system integration, and evaluation metrics.",
    date: "2025/03/09",
    duration: "20 minutes",
    slides: 20,
    status: "completed",
    type: "Group",
    fileName: "25-26J-065_PP2_Presentation.pptx",
    fileHref: "/presentations/25-26J-065_PP2_Presentation.pptx",
    topics: [
      "Development Progress",
      "Model Training",
      "System Integration",
      "Performance Metrics",
      "UI Demo",
      "Challenges"
    ]
  },
  {
    id: 4,
    title: "Final Presentation",
    description: "Comprehensive final presentation covering complete system demonstration, evaluation results, research contributions, and future work.",
    date: "Pending",
    duration: "35 minutes",
    slides: 50,
    status: "upcoming",
    type: "Group",
    topics: [
      "Project Overview",
      "Complete Demo",
      "Evaluation Results",
      "Research Contributions",
      "Publications",
      "Future Work"
    ]
  }
]

function getStatusConfig(status: string) {
  switch (status) {
    case "completed":
      return {
        label: "Completed",
        bgColor: "bg-green-500/10",
        textColor: "text-green-400",
        borderColor: "border-green-500/30"
      }
    case "in-progress":
      return {
        label: "In Progress",
        bgColor: "bg-primary/10",
        textColor: "text-primary",
        borderColor: "border-primary/30"
      }
    default:
      return {
        label: "Pending",
        bgColor: "bg-muted/50",
        textColor: "text-muted-foreground",
        borderColor: "border-border/50"
      }
  }
}

export default function PresentationsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Project Documents
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Presentations
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Explore our interactive slide decks or download the presentation archives for offline review.
            </p>
          </div>
        </div>
      </section>

      {/* Presentations Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {presentations.map((pres) => {
              const statusConfig = getStatusConfig(pres.status)
              const canDownload = Boolean(pres.fileHref)
              
              return (
                <div
                  key={pres.id}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-card/50 transition-all hover:border-primary/50"
                >
                  {/* Preview Area */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-card to-accent/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 flex justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20 transition-transform group-hover:scale-110">
                            <Presentation className="h-10 w-10 text-primary" />
                          </div>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {pres.slides} Slides
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute right-4 top-4 flex items-center gap-2">
                      <span className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium",
                        statusConfig.bgColor,
                        statusConfig.textColor,
                        statusConfig.borderColor
                      )}>
                        {statusConfig.label}
                      </span>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                        <Users className="h-3 w-3" />
                        {pres.type}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">{pres.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {pres.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        {pres.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        {pres.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-primary" />
                        {pres.slides} slides
                      </span>
                    </div>
                    
                    {/* Topics */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {pres.topics.map((topic) => (
                          <span
                            key={topic}
                            className="rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      {canDownload ? (
                        <a
                          href={pres.fileHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
                        >
                          <Play className="h-4 w-4" />
                          View Slides
                        </a>
                      ) : (
                        <button
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                          disabled
                        >
                          <Play className="h-4 w-4" />
                          View Slides
                        </button>
                      )}
                      {canDownload ? (
                        <a
                          href={pres.fileHref}
                          download={pres.fileName}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      ) : (
                        <button
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                          disabled
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold text-foreground">Additional Resources</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Presentation className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Presentation Templates</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Download our presentation templates for consistent styling.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Download Templates
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Demo Videos</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Watch recorded demonstrations of the system in action.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Watch Videos
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Speaker Notes</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Access detailed speaker notes for each presentation.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                View Notes
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
