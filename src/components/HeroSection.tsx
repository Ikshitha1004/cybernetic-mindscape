import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6"
          >
            SYSTEM.INIT("SCALABLE_INTELLIGENCE")
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-6"
          >
            Engineering
            <br />
            <span className="text-primary text-glow-cyan">Scalable</span>
            <br />
            Intelligence<span className="text-secondary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          >
            Software Engineer @ IBM | AI Researcher | Specialized in Distributed Systems & Reinforcement Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] hover:border-glow-cyan transition-shadow"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-6 py-3 border border-border text-foreground font-mono text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileText size={14} strokeWidth={1} /> Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={16} strokeWidth={1} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
