import { 
  FileText, 
  Download, 
  Eye, 
  ScrollText,
  ClipboardList
} from "lucide-react"

const documents = [
  {
    category: "Project Documentation",
    items: [
      {
        title: "TAF Document",
        description: "Project TAF document for formal assessment and evaluation tracking.",
        icon: FileText,
        type: "PDF",
        size: "707 KB",
        date: "N/A",
        status: "available",
        fileName: "TAF_25-26J-065.pdf",
        fileHref: "/documents/TAF_25-26J-065.pdf"
      },
    ]
  },
  {
    category: "Proposal Documents",
    items: [
      {
        person: "IT22594440 - Gangoda G.W.A.P.",
        title: "Drafted RP Proposal",
        description: "Draft research proposal for review and feedback.",
        icon: FileText,
        type: "PDF",
        size: "860 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22594440_Drafted_RP_Proposal_.pdf",
        fileHref: "/documents/IT22594440_Drafted_RP_Proposal_.pdf"
      },
      {
        person: "IT22594440 - Gangoda G.W.A.P.",
        title: "Final RP Proposal",
        description: "Finalized research proposal submission.",
        icon: FileText,
        type: "PDF",
        size: "929 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22594440_RP_Proposal_Final.pdf",
        fileHref: "/documents/IT22594440_RP_Proposal_Final.pdf"
      },
      {
        person: "IT22561220 - Hitihaminelage K.I.S.",
        title: "Drafted RP Proposal",
        description: "Draft research proposal for review and feedback.",
        icon: FileText,
        type: "PDF",
        size: "804 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22561220-Drafted_RP_Proposal.pdf",
        fileHref: "/documents/IT22561220-Drafted_RP_Proposal.pdf"
      },
      {
        person: "IT22561220 - Hitihaminelage K.I.S.",
        title: "Final RP Proposal",
        description: "Finalized research proposal submission.",
        icon: FileText,
        type: "PDF",
        size: "856 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22561220-Final_RP_Proposal.pdf",
        fileHref: "/documents/IT22561220-Final_RP_Proposal.pdf"
      },
      {
        person: "IT22560230 - P.S.N.A Rupasinghe",
        title: "Drafted RP Proposal",
        description: "Draft research proposal for review and feedback.",
        icon: FileText,
        type: "PDF",
        size: "706 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22560230-Drafted_RP_Proposal.pdf",
        fileHref: "/documents/IT22560230-Drafted_RP_Proposal.pdf"
      },
      {
        person: "IT22560230 - P.S.N.A Rupasinghe",
        title: "Final RP Proposal",
        description: "Finalized research proposal submission.",
        icon: FileText,
        type: "PDF",
        size: "796 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22560230-Final_RP_Proposal.pdf",
        fileHref: "/documents/IT22560230-Final_RP_Proposal.pdf"
      },
      {
        person: "IT22602428 - Perera N.T.K.D",
        title: "Drafted RP Proposal",
        description: "Draft research proposal for review and feedback.",
        icon: FileText,
        type: "PDF",
        size: "505 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22602428_Drafted_RP_Proposal.pdf",
        fileHref: "/documents/IT22602428_Drafted_RP_Proposal.pdf"
      },
      {
        person: "IT22602428 - Perera N.T.K.D",
        title: "Final RP Proposal",
        description: "Finalized research proposal submission.",
        icon: FileText,
        type: "PDF",
        size: "396 KB",
        date: "N/A",
        status: "available",
        fileName: "IT22602428_Final_RP_Proposal.pdf",
        fileHref: "/documents/IT22602428_Final_RP_Proposal.pdf"
      }
    ]
  },
  {
    category: "Checklists & Forms",
    items: [
      {
        title: "SRS Checklist",
        description: "Checklist for SRS submission requirements and criteria.",
        icon: ClipboardList,
        type: "PDF",
        size: "393 KB",
        date: "N/A",
        status: "available",
        fileName: "25-26J-065-SRS_Checklist-01.pdf",
        fileHref: "/documents/25-26J-065-SRS_Checklist-01.pdf"
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
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="mt-1 text-sm text-muted-foreground">Total Documents</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">4</div>
              <div className="mt-1 text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
              <div className="text-3xl font-bold text-foreground">8.4 MB</div>
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
            {documents.map((category) => {
              const isProposal = category.category === "Proposal Documents"
              const proposalGroups = isProposal
                ? Array.from(
                    category.items.reduce((map, doc) => {
                      const key = doc.person ?? ""
                      if (!map.has(key)) {
                        map.set(key, [])
                      }
                      map.get(key).push(doc)
                      return map
                    }, new Map<string, typeof category.items>())
                  )
                : []

              return (
                <div key={category.category}>
                  <div className="mb-8 flex items-center gap-4">
                    <h2 className="text-xl font-semibold text-foreground">{category.category}</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  </div>
                  {isProposal ? (
                    <div className="space-y-8">
                      {proposalGroups.map(([person, docs]) => (
                        <div key={person}>
                          <h3 className="mb-4 text-base font-semibold text-foreground">{person}</h3>
                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {docs.map((doc) => {
                              const canAccess = Boolean(doc.fileHref) && doc.status !== "pending"

                              return (
                                <div
                                  key={`${person}-${doc.title}`}
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
                                    {canAccess ? (
                                      <a
                                        href={doc.fileHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                                      >
                                        <Eye className="h-4 w-4" />
                                        View
                                      </a>
                                    ) : (
                                      <button
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                                        disabled
                                      >
                                        <Eye className="h-4 w-4" />
                                        View
                                      </button>
                                    )}
                                    {canAccess ? (
                                      <a
                                        href={doc.fileHref}
                                        download={doc.fileName}
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                                      >
                                        <Download className="h-4 w-4" />
                                        Download
                                      </a>
                                    ) : (
                                      <button
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                                        disabled
                                      >
                                        <Download className="h-4 w-4" />
                                        Download
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {category.items.map((doc) => {
                        const canAccess = Boolean(doc.fileHref) && doc.status !== "pending"

                        return (
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
                              {canAccess ? (
                                <a
                                  href={doc.fileHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted"
                                >
                                  <Eye className="h-4 w-4" />
                                  View
                                </a>
                              ) : (
                                <button
                                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                                  disabled
                                >
                                  <Eye className="h-4 w-4" />
                                  View
                                </button>
                              )}
                              {canAccess ? (
                                <a
                                  href={doc.fileHref}
                                  download={doc.fileName}
                                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
                                >
                                  <Download className="h-4 w-4" />
                                  Download
                                </a>
                              ) : (
                                <button
                                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-3 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                                  disabled
                                >
                                  <Download className="h-4 w-4" />
                                  Download
                                </button>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
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
              <a
                href="/documents/all-documents.zip"
                download="all-documents.zip"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                <Download className="h-4 w-4" />
                Download ZIP (6.0 MB)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
