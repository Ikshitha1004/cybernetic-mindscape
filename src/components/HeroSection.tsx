import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-[1400px] mx-auto px-6 w-full">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-28 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6"
            >
              SYSTEM.INIT("SCALABLE_INTELLIGENCE")
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-mono text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.95] mb-6"
            >
              Engineering
              <br />
              <span className="text-primary">Scalable</span>
              <br />
              Intelligence<span className="text-secondary">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mb-10"
            >
              Software Engineer @ IBM | AI Researcher | Specializing in Distributed Systems & Reinforcement Learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em]"
              >
                View Projects
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground font-mono text-xs uppercase tracking-[0.15em] flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
              >
                <FileText size={14} /> Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT — SPHERE WITH NAME */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-end items-center"
          >
            <div className="relative w-[360px] h-[360px]">

              {/* GLOW */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

              {/* SPHERE */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full border border-border rounded-full flex items-center justify-center backdrop-blur-md"
              >

                {/* RINGS */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-primary/20 rounded-full"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[40px] border border-secondary/20 rounded-full"
                />

                {/* UPDATED NAME SECTION */}
              <div className="text-center px-6">
              <p className="font-mono text-base text-muted-foreground tracking-wider mb-2">
                Hi, I’m
              </p>

              <p className="font-mono text-4xl text-primary tracking-wide leading-tight">
                Ikshitha
              </p>

              <p className="font-mono text-sm text-muted-foreground tracking-[0.25em] mt-2">
                JANARTHANAN
              </p>
            </div>

              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL ICON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;