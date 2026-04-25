import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Presentation, 
  Target,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const milestones = [
  {
    id: 1,
    title: "Project Proposal",
    date: "August 2024",
    status: "completed",
    description: "Initial project proposal submission including problem statement, objectives, literature survey, and proposed methodology.",
    deliverables: ["Proposal Document", "Project Charter", "Research Plan"]
  },
  {
    id: 2,
    title: "Progress Presentation 1",
    date: "December 2024",
    status: "completed",
    description: "First progress presentation demonstrating initial implementation, data collection, and preliminary model development.",
    deliverables: ["Progress Report", "Presentation Slides", "Demo Prototype"]
  },
  {
    id: 3,
    title: "Progress Presentation 2",
    date: "March 2025",
    status: "in-progress",
    description: "Second progress presentation showcasing advanced implementation, model training results, and system integration.",
    deliverables: ["Technical Report", "Presentation Slides", "Working System Demo"]
  },
  {
    id: 4,
    title: "Final Presentation",
    date: "May 2025",
    status: "upcoming",
    description: "Final project assessment including complete system demonstration, evaluation results, and research paper.",
    deliverables: ["Final Report", "Research Paper", "Complete System", "User Manual"]
  }
]

function getStatusConfig(status: string) {
  switch (status) {
    case "completed":
      return {
        label: "Completed",
        color: "bg-green-500",
        textColor: "text-green-400",
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/30",
        icon: CheckCircle2
      }
    case "in-progress":
      return {
        label: "In Progress",
        color: "bg-primary",
        textColor: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/30",
        icon: Clock
      }
    default:
      return {
        label: "Upcoming",
        color: "bg-muted-foreground/50",
        textColor: "text-muted-foreground",
        bgColor: "bg-muted/30",
        borderColor: "border-border/50",
        icon: Calendar
      }
  }
}

export default function MilestonesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Interactive Timeline
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Assessment
              <span className="gradient-text"> Trail</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Track the progress of CyraGuard through key milestones and deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="border-y border-border/50 bg-card/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
              <div className="text-3xl font-bold text-green-400">2</div>
              <div className="mt-1 text-sm text-green-400/80">Completed</div>
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="mt-1 text-sm text-primary/80">In Progress</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-muted/30 p-6 text-center">
              <div className="text-3xl font-bold text-muted-foreground">1</div>
              <div className="mt-1 text-sm text-muted-foreground">Upcoming</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">4</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Milestones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Horizontal Timeline Navigation */}
          <div className="mb-12 flex items-center justify-center gap-2 overflow-x-auto pb-4">
            {milestones.map((milestone, index) => {
              const statusConfig = getStatusConfig(milestone.status)
              return (
                <div key={milestone.id} className="flex items-center">
                  <div className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all",
                    statusConfig.color,
                    milestone.status === "in-progress" && "ring-4 ring-primary/20"
                  )}>
                    <span className="text-xs font-bold text-white">{milestone.id}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className={cn(
                      "h-0.5 w-8 sm:w-12",
                      index < 2 ? "bg-green-500" : "bg-border"
                    )} />
                  )}
                </div>
              )
            })}
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-green-500 via-primary to-border sm:left-8" />
            
            <div className="space-y-8">
              {milestones.map((milestone) => {
                const statusConfig = getStatusConfig(milestone.status)
                const StatusIcon = statusConfig.icon
                
                return (
                  <div key={milestone.id} className="relative flex gap-6 sm:gap-8">
                    {/* Timeline dot */}
                    <div className={cn(
                      "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 transition-all",
                      statusConfig.color,
                      milestone.status === "in-progress" && "ring-4 ring-primary/30 glow-primary"
                    )}>
                      <StatusIcon className="h-4 w-4 text-white sm:h-6 sm:w-6" />
                    </div>
                    
                    {/* Content */}
                    <div className={cn(
                      "flex-1 rounded-2xl border p-6 sm:p-8 transition-all hover:border-primary/50",
                      statusConfig.borderColor,
                      statusConfig.bgColor
                    )}>
                      <div className="mb-4">
                        <div>
                          <div className="mb-2 flex items-center gap-3">
                            <span className={cn(
                              "rounded-full px-3 py-1 text-xs font-medium",
                              statusConfig.textColor,
                              statusConfig.bgColor,
                              "border",
                              statusConfig.borderColor
                            )}>
                              {statusConfig.label}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              {milestone.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                        </div>
                      </div>
                      
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                      
                      <div>
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Deliverables</h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone.deliverables.map((deliverable) => (
                            <span
                              key={deliverable}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-3 py-1.5 text-xs text-muted-foreground"
                            >
                              <FileText className="h-3 w-3" />
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Breakdown */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Assessment Breakdown</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Documentation</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Project Charter" },
                  { name: "Final Report" },
                  { name: "Research Paper" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Presentation className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Presentations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Proposal" },
                  { name: "Progress 1" },
                  { name: "Progress 2" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Final Evaluation</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Final Assessment" },
                  { name: "Log Book" }
                ].map((item) => (
                  <div key={item.name} className="flex items-center">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-primary" />
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
