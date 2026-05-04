import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin,
  Clock,
  Link2,
  FileWarning,
  Brain,
  Eye
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "cyraguard.team@gmail.com",
    link: "mailto:cyraguard.team@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 77148 9667",
    link: "tel:+94771489667"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "SLIIT, New Kandy Road, Malabe, Sri Lanka",
    link: "https://maps.google.com/?q=SLIIT+Malabe"
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Mon - Fri: 9:00 AM - 5:00 PM",
    link: null
  }
]

const teamContacts = [
  { name: "Gangoda G.W.A.P.", email: "it22594440@my.sliit.lk", role: "Spam URL Detection", image: "/members/IT22594440.jpg", icon: Link2 },
  { name: "Hitihaminelage K.I.S.", email: "it22561220@my.sliit.lk", role: "Malware Document Detection", image: "/members/IT22561220.png", icon: FileWarning },
  { name: "Rupasinghe P.S.N.A.", email: "it22560230@my.sliit.lk", role: "Emotion Detection", image: "/members/IT22560230.png", icon: Brain },
  { name: "Perera N.T.K.D.", email: "it22602428@my.sliit.lk", role: "Sensitive Content Detection", image: "/members/IT22602428.png", icon: Eye },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Get in Touch
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Contact
              <span className="gradient-text"> Us</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground">
              Have questions about our research? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="border-y border-border/50 bg-card/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div key={info.title} className="rounded-2xl border border-border/50 bg-card/50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-foreground">Team Contacts</h2>
              <div className="space-y-4">
                {teamContacts.map((member) => (
                  <div
                    key={member.email}
                    className="group rounded-2xl border border-border/50 bg-card/50 p-5 transition-all hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={`${member.name} profile`}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <member.icon className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{member.name}</h3>
                          <p className="text-sm text-primary">{member.role}</p>
                        </div>
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-3 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 rounded-2xl border border-border/50 bg-card/50 p-6">
                <h3 className="mb-4 font-semibold text-foreground">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/cyraguard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/cyraguard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:cyraguard.team@gmail.com"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border/50 bg-card/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Our Location</h2>
          <div className="overflow-hidden rounded-2xl border border-border/50">
            <div className="aspect-[21/9] bg-card/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1088767431195!2d79.97095937475595!3d6.914682993084755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1708934892347!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLIIT Location Map"
              />
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-border/50 bg-card/50 p-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-semibold text-foreground">Sri Lanka Institute of Information Technology</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  New Kandy Road, Malabe, Sri Lanka
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=SLIIT+Malabe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
