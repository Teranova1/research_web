import { 
  FileText, 
  Download, 
  Eye, 
  FileCheck, 
  FileBadge, 
  FileSpreadsheet,
  BookOpen,
  ScrollText,
  ClipboardList,
  ExternalLink
} from "lucide-react"

const documents = [
  {
    category: "Project Documentation",
    items: [
      {
        title: "Project Charter",
        description: "Initial project charter defining scope, objectives, and team roles.",
        icon: FileBadge,
        type: "PDF",
        size: "245 KB",
        date: "Aug 2024",
        status: "available"
      },
      {
        title: "Proposal Document",
        description: "Complete research proposal including literature review and methodology.",
        icon: FileText,
        type: "PDF",
        size: "1.2 MB",
        date: "Aug 2024",
        status: "available"
      },
      {
        title: "Final Report",
        description: "Comprehensive final project report with implementation details and results.",
        icon: BookOpen,
        type: "PDF",
        size: "4.5 MB",
        date: "May 2025",
        status: "pending"
      }
    ]
  },
  {
    category: "Status Documents",
    items: [
      {
        title: "Status Document 1",
        description: "First status report covering initial development phase progress.",
        icon: FileSpreadsheet,
        type: "PDF",
        size: "320 KB",
        date: "Oct 2024",
        status: "available"
      },
      {
        title: "Status Document 2",
        description: "Second status report covering model development and testing.",
        icon: FileSpreadsheet,
        type: "PDF",
        size: "450 KB",
        date: "Feb 2025",
        status: "available"
      }
    ]
  },
  {
    category: "Checklists & Forms",
    items: [
      {
        title: "Proposal Checklist",
        description: "Checklist for proposal submission requirements and criteria.",
        icon: ClipboardList,
        type: "PDF",
        size: "85 KB",
        date: "Aug 2024",
        status: "available"
      },
      {
        title: "Progress 1 Checklist",
        description: "Evaluation checklist for first progress presentation.",
        icon: ClipboardList,
        type: "PDF",
        size: "92 KB",
        date: "Dec 2024",
        status: "available"
      },
      {
        title: "Progress 2 Checklist",
        description: "Evaluation checklist for second progress presentation.",
        icon: ClipboardList,
        type: "PDF",
        size: "98 KB",
        date: "Mar 2025",
        status: "available"
      },
      {
        title: "Final Assessment Checklist",
        description: "Comprehensive checklist for final project assessment.",
        icon: ClipboardList,
        type: "PDF",
        size: "110 KB",
        date: "May 2025",
        status: "pending"
      }
    ]
  },
  {
    category: "Research Publications",
    items: [
      {
        title: "Research Paper",
        description: "Academic paper submitted for publication on multi-modal threat detection.",
        icon: ScrollText,
        type: "PDF",
        size: "890 KB",
        date: "May 2025",
        status: "pending"
      },
      {
        title: "Conference Paper Draft",
        description: "Draft paper prepared for international conference submission.",
        icon: ScrollText,
        type: "PDF",
        size: "720 KB",
        date: "Apr 2025",
        status: "pending"
      }
    ]
  },
  {
    category: "Technical Documents",
    items: [
      {
        title: "System Design Document",
        description: "Detailed system architecture and design specifications.",
        icon: FileCheck,
        type: "PDF",
        size: "1.8 MB",
        date: "Nov 2024",
        status: "available"
      },
      {
        title: "API Documentation",
        description: "Complete API reference for the threat detection backend.",
        icon: FileText,
        type: "PDF",
        size: "560 KB",
        date: "Mar 2025",
        status: "available"
      },
      {
        title: "User Manual",
        description: "End-user guide for the parent dashboard and mobile application.",
        icon: BookOpen,
        type: "PDF",
        size: "2.1 MB",
        date: "May 2025",
        status: "pending"
      }
    ]
  }
]

export default function DocumentsPage() {
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
              Documentation &
              <span className="gradient-text"> Resources</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Access all project documentation, reports, checklists, and research publications.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y border-border/50 bg-card/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-primary">15</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Documents</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">5</div>
              <div className="mt-1 text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">12.5 MB</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Size</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">PDF</div>
              <div className="mt-1 text-sm text-muted-foreground">Format</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {documents.map((category) => (
              <div key={category.category}>
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((doc) => (
                    <div
                      key={doc.title}
                      className="group rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/50"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                          <doc.icon className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.status === "pending" && (
                            <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-400">
                              Pending
                            </span>
                          )}
                          <span className="rounded-full border border-border/50 bg-background/50 px-2 py-1 text-xs text-muted-foreground">
                            {doc.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="mb-2 font-semibold text-foreground">{doc.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {doc.description}
                      </p>
                      
                      <div className="mb-6 flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{doc.size}</span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span>{doc.date}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button 
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                          disabled={doc.status === "pending"}
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </button>
                        <button 
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                          disabled={doc.status === "pending"}
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download All Section */}
      <section className="border-t border-border/50 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-8 sm:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            
            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Download All Documents</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Get all available project documents in a single compressed archive.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20">
                <Download className="h-4 w-4" />
                Download ZIP (8.5 MB)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
