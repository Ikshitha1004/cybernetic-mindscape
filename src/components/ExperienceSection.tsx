import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "IBM",
    period: "Current",
    description: "Building scalable distributed systems and cloud-native applications.",
    active: true,
  },
  {
    role: "Software Engineering Intern",
    company: "Microsoft",
    period: "Summer 2025",
    description:
      "Optimized customer SLAs from 2 weeks to <12 hours using RAG-based AI orchestration and intelligent pipeline automation.",
    active: false,
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-[20vh] relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
      >
        // EXPERIENCE_LOG
      </motion.p>
      <h2 className="font-mono text-2xl font-medium mb-12 text-foreground">Professional Timeline</h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] border-2 ${
                  exp.active
                    ? "border-primary bg-primary/20 border-glow-cyan"
                    : "border-border bg-card"
                }`}
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-mono text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-sm font-mono">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
