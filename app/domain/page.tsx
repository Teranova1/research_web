import { 
  BookOpen, 
  Search, 
  AlertTriangle, 
  Target, 
  Workflow,
  Code2,
  Link2,
  FileWarning,
  Brain,
  Eye,
  Shield,
  Smartphone,
  Server,
  Database
} from "lucide-react"

const components = [
  {
    id: "01",
    title: "Spam URL Detection",
    student: "Gangoda G.W.A.P.",
    studentId: "IT22594440",
    objectives: [
      "Develop Android app to detect spam/malicious URLs in WhatsApp/Telegram",
      "Implement sandbox browser for safe URL analysis before opening",
      "Apply ML models (Random Forest, XGBoost) for URL classification",
      "Generate real-time alerts for phishing and malware threats"
    ],
    technologies: ["Kotlin", "SQLlite", "Android WebView", "TensorFlow Lite", "TF-IDF"],
    icon: Link2
  },
  {
    id: "02",
    title: "Malware Document Detection",
    student: "Hitihaminelage K.I.S.",
    studentId: "IT22561220",
    objectives: [
      "Develop sandbox-based system for document malware detection",
      "Analyze runtime behavior (API calls, file changes, network activity)",
      "Support multiple formats: PDF, DOCX, PPTX, EXCEL",
      "Provide secure viewing option for malicious files in sandbox"
    ],
    technologies: ["Python", "Kotlin", "Flutter", "Cuckoo Sandbox", "Docker", "TensorFlow Lite"],
    icon: FileWarning
  },
  {
    id: "03",
    title: "Emotion Detection",
    student: "Rupasinghe P.S.N.A.",
    studentId: "IT22560230",
    objectives: [
      "Detect fake/manipulative accounts through emotion analysis",
      "Implement intensity-level classification (mild, moderate, high)",
      "Analyze patterns of fear, anger, sadness, and manipulation",
      "Enable parent-in-the-loop actions (block/allow contacts)"
    ],
    technologies: ["BERT", "DeBERTa", "Python", "Flutter", "Firebase", "Hugging Face"],
    icon: Brain
  },
  {
    id: "04",
    title: "Sensitive Content Detection",
    student: "Perera N.T.K.D.",
    studentId: "IT22602428",
    objectives: [
      "Detect nudity, NIC images, and credit card details before sending",
      "Implement pre-send scanning workflow with tiered alerts",
      "Ensure on-device inference only (no cloud upload)",
      "Temporary send-button blocking for high-risk content"
    ],
    technologies: ["MobileNetV3", "EfficientNet-Lite", "TensorFlow Lite", "PyTorch Mobile", "Flutter"],
    icon: Eye
  }
]

const methodologySteps = [
  {
    step: 1,
    title: "Data Collection",
    description: "Gather datasets for each component: URL databases, malware samples, emotional chat datasets, and sensitive image datasets."
  },
  {
    step: 2,
    title: "Preprocessing",
    description: "Clean and preprocess data including URL feature extraction, document behavior analysis, text tokenization, and image normalization."
  },
  {
    step: 3,
    title: "Model Training",
    description: "Train specialized ML models for each component using appropriate algorithms (Random Forest, BERT, CNNs, etc.)."
  },
  {
    step: 4,
    title: "Model Optimization",
    description: "Convert models to mobile-friendly formats (TFLite, ONNX) for on-device inference with minimal latency."
  },
  {
    step: 5,
    title: "Integration",
    description: "Integrate all four components into a unified Flutter mobile application with shared parent dashboard."
  },
  {
    step: 6,
    title: "Testing & Evaluation",
    description: "Evaluate system performance with real-world scenarios, measure accuracy, precision, recall, and response time."
  }
]

const technologies = [
  { name: "Flutter", category: "Mobile", icon: Smartphone, description: "Cross-platform mobile app development" },
  { name: "Python", category: "ML/AI", icon: Code2, description: "Machine learning model training and inference" },
  { name: "Kotlin", category: "Android", icon: Server, description: "Native Android development and accessibility" },
  { name: "TensorFlow Lite", category: "ML", icon: Brain, description: "On-device ML inference framework" },
  { name: "BERT/DeBERTa", category: "NLP", icon: Brain, description: "Transformer models for text analysis" },
  { name: "SQLlite", category: "Backend", icon: Database, description: "Lightweight local database" },
]

export default function DomainPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Domain Background
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Literature Survey &
              <span className="gradient-text"> Objectives</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Mapping the research frontier - from critical gaps to targeted solutions in 
              multi-modal threat detection for messaging platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Research Gap */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">
                <Search className="h-3 w-3" />
                Research Gap
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                The Problem Space
              </h2>
              <p className="mt-4 text-muted-foreground">
                Current messaging security solutions are fragmented and leave critical gaps that 
                malicious actors exploit to target young users.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  "URL scanners only check against known blacklists, missing zero-day phishing",
                  "Document scanners lack behavioral analysis for sophisticated malware",
                  "No unified solution addresses fake user accounts with emotional manipulation",
                  "Existing content filters react after send, not before",
                  "Privacy-invasive solutions discourage adoption by families"
                ].map((gap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <AlertTriangle className="h-3 w-3" />
                    </div>
                    <p className="text-sm text-muted-foreground">{gap}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Research Problem</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                <strong>How can a unified, privacy-preserving mobile framework be developed that 
                simultaneously detects malicious URLs, malware documents, fake users, and sensitive 
                content in WhatsApp and Telegram while providing real-time alerts to parents?</strong>
              </p>
              <blockquote className="mt-6 border-l-2 border-primary pl-4 italic text-muted-foreground">
                &quot;A framework that is private by design, multi-modal by architecture, and explainable by default.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Literature Survey */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-primary">01 - Background</div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Literature Survey</h2>
            </div>
          </div>
          
          <p className="mb-8 max-w-3xl text-muted-foreground">
            The intersection of mobile security, machine learning, and child safety forms the critical 
            frontier of our research. Traditional security solutions are being rapidly supplanted by 
            AI-powered frameworks that can detect sophisticated threats in real-time.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "2.8B+", label: "WhatsApp Users", desc: "Global active users" },
              { stat: "800M+", label: "Telegram Users", desc: "Monthly active" },
              { stat: "37%", label: "Cyber Threats", desc: "Target children" },
              { stat: "0", label: "E2E Frameworks", desc: "Exist for all threats" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/50 bg-card/50 p-6 text-center">
                <div className="text-3xl font-bold text-primary">{item.stat}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { title: "URL-Based Threats", desc: "ML-based URL classifiers achieve up to 99.5% accuracy on known threats, making real-time link scanning a critical first line of defence in messaging platform protection." },
              { title: "Document-Based Malware", desc: "Office documents and PDFs remain primary vectors for malware delivery. Sandbox-based behavioural analysis combined with static feature extraction achieves up to 98% detection accuracy, significantly outperforming traditional signature-based methods." },
              { title: "Emotion Detection", desc: "The emotion-based risk monitor developed in this research achieves 72% classification accuracy across eight emotion categories, enabling real-time identification of manipulative conversational behaviour in WhatsApp and Telegram messages." },
              { title: "Sensitive Content", desc: "On-device image classification using MobileNet variants enables real-time content filtering without cloud dependency, preserving user privacy while achieving 94%+ detection accuracy across harmful visual content categories." }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border/50 bg-card/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Objectives - Component Breakdown */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Research Objectives</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-primary">04 - Targeted Solutions</div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Component Objectives</h2>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {components.map((component) => (
              <div key={component.id} className="group rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/50">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                      <component.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-primary">{component.id}</div>
                      <h3 className="text-xl font-semibold text-foreground">{component.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6 flex items-center gap-2 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {component.student.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{component.student}</div>
                    <div className="text-xs text-muted-foreground">{component.studentId}</div>
                  </div>
                </div>
                
                <div className="mb-6 space-y-3">
                  {component.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">{obj}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {component.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-border/50 bg-background/50 px-2 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Methodology</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodologySteps.map((item) => (
              <div key={item.step} className="rounded-xl border border-border/50 bg-card/50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {String(item.step).padStart(2, '0')}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Technology Stack</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <div key={tech.name} className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/50">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary transition-transform group-hover:scale-110">
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{tech.name}</h3>
                    <span className="text-xs text-primary">{tech.category}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">System Architecture</h2>
          </div>
          
          <div className="rounded-2xl border border-border/50 bg-card/50 p-8">
            <p className="mb-8 text-center text-sm text-muted-foreground">
              Secure, privacy-preserving on-device processing with unified parental dashboard
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Mobile Layer */}
              <div className="rounded-xl border border-border/50 bg-background/50 p-6">
                <h3 className="mb-4 text-center text-sm font-semibold text-primary">Mobile Layer</h3>
                <div className="space-y-2">
                  {["Flutter App", "URL Scanner", "Document Analyzer", "Content Filter", "Parent Dashboard"].map((item) => (
                    <div key={item} className="rounded-lg bg-card/50 p-3 text-center text-xs text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ML Layer */}
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="mb-4 text-center text-sm font-semibold text-primary">ML Layer (On-Device)</h3>
                <div className="space-y-2">
                  {["TensorFlow Lite", "Random Forest", "XGBoost", "BERT/DeBERTa", "MobileNetV3"].map((item) => (
                    <div key={item} className="rounded-lg bg-card/50 p-3 text-center text-xs text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Backend Layer */}
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
                <h3 className="mb-4 text-center text-sm font-semibold text-accent">Backend Layer</h3>
                <div className="space-y-2">
                  {["SQLlite", "Real-time Alerts", "User Auth", "Parent Sync", "Analytics"].map((item) => (
                    <div key={item} className="rounded-lg bg-card/50 p-3 text-center text-xs text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-xl bg-muted/30 p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Privacy First:</span> All ML inference runs on-device. 
                Only anonymized alerts and parent dashboard data are synced to the cloud.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
