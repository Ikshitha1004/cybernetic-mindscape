import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import powerrl from "../assets/power-rl.png";
import dfm from "../assets/dfm.png";
import sfpo from "../assets/sfpo.png";

type Project = {
  title: string;
  image: string;
  tags: string[];
  description: string;
  github?: string;
  live?: string;
  color: "primary" | "secondary";
};

const projects: Project[] = [
  {
    title: "Power RL",
    image: powerrl,
    tags: ["Python", "Intel-RAPL", "PyTorch", "Gymnasium"],
    description:
      "A web-based profiling tool using Intel-RAPL to visualize energy consumption in RL workflows. Key finding: RL consumes 10x more energy than supervised baselines.",
    github: "https://github.com/greeshma0906/powerrl",
    live: "#",
    color: "primary",
  },
  {
    title: "SFPO",
    image: sfpo,
    tags: ["RL", "CVaR", "MuJoCo", "Python"],
    description:
      "Smooth Functional Policy Optimization — a risk-sensitive RL algorithm using CVaR for robust continuous control in MuJoCo environments.",
    github: "https://github.com/Ikshitha1004/sfpo",
    live: "#",
    color: "secondary",
  },
  {
    title: "Drone Foundation Model",
    image: dfm,
    tags: ["YOLOv11", "ultralytics","Deep Learning", "PyTorch"],
    description:
      "A foundation model for drone imagery trained across tasks like object detection and segmentation.",
    github: "https://github.com/Error-404-NotFound/CS518L-Deep-Learning-Project",
    live: "#",
    color: "primary",
  },
];

const borderColors = {
  primary: "border-t-primary hover:border-glow-cyan",
  secondary: "border-t-secondary hover:border-glow-violet",
};

const ProjectsSection = () => (
  <section id="projects" className="py-[20vh] relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
      >
        // FEATURED_PROJECTS
      </motion.p>

      <h2 className="font-mono text-2xl font-medium mb-12 text-foreground">
        Research & Projects
      </h2>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`bg-card border border-border border-t-2 ${
              borderColors[p.color]
            } p-6 md:p-8 hover:-translate-y-1 transition-all duration-300 group`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              
              {/* IMAGE */}
              <div className="w-full md:w-1/3 relative overflow-hidden border border-border">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <span className="font-mono text-xs text-muted-foreground ml-2">
                    {p.title.toLowerCase().replace(/\s+/g, "_")}.py
                  </span>
                </div>

                <h3 className="font-mono text-xl font-semibold text-foreground mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github size={16} strokeWidth={1} />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <ExternalLink size={16} strokeWidth={1} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;