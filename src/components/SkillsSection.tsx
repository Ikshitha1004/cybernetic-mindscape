import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["C/C++", "Python", "Java", "C#", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["PyTorch", "React", "Node.js", "Gymnasium", "FastAPI", "Three.js"],
  },
  {
    title: "Cloud & Tools",
    items: ["Azure Cloud", "Docker", "Git", "Linux", "Intel RAPL"],
  },
];

const SkillsSection = () => (
  <section className="py-[15vh] relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
      >
        // TECHNICAL_MATRIX
      </motion.p>
      <h2 className="font-mono text-2xl font-medium mb-12 text-foreground">Skill Stack</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border neon-border-top p-6 hover:-translate-y-1 hover:border-glow-cyan transition-all duration-300 group"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-muted text-xs font-mono text-muted-foreground border border-border group-hover:border-primary/20 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
