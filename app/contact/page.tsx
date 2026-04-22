"use client"

import { useState } from "react"
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Linkedin,
  Clock,
  CheckCircle2,
  Link2,
  FileWarning,
  Brain,
  Eye
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "cyraguard@my.sliit.lk",
    link: "mailto:cyraguard@my.sliit.lk"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 11 754 4801",
    link: "tel:+94117544801"
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
  { name: "Gangoda G.W.A.P.", email: "it22594440@my.sliit.lk", role: "Spam URL Detection", icon: Link2 },
  { name: "Hitihaminelage K.I.S.", email: "it22561220@my.sliit.lk", role: "Malware Document Detection", icon: FileWarning },
  { name: "Rupasinghe P.S.N.A.", email: "it22560230@my.sliit.lk", role: "Fake User Detection", icon: Brain },
  { name: "Perera N.T.K.D.", email: "it22602428@my.sliit.lk", role: "Sensitive Content Detection", icon: Eye },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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

      {/* Contact Form & Team Contacts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-foreground">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-10 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500/20">
                      <CheckCircle2 className="h-10 w-10 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Message Sent!</h3>
                  <p className="mt-3 text-sm text-green-400/80">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 rounded-xl bg-green-500/20 px-6 py-3 text-sm font-medium text-green-400 transition-colors hover:bg-green-500/30"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Research Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-border/50 bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Team Contacts */}
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
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <member.icon className="h-5 w-5" />
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
                    href="mailto:cyraguard@my.sliit.lk"
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
