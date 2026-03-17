import { motion } from "framer-motion";
import profileImg from "@/assets/profile2.jpeg";
import { GraduationCap, Award, Code } from "lucide-react";

const achievements = [
  { icon: GraduationCap, text: "B.Tech CSE, IIT Tirupati — Class of 2026" },
  { icon: Award, text: "Amazon ML Summer School 2025 Scholar" },
  { icon: Code, text: "1000+ problems on LeetCode & Codeforces" },
];

const AboutSection = () => (
  <section id="about" className="py-[24vh] relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
      >
        // ABOUT
      </motion.p>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-[380px_1fr] gap-20 items-center">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-[3px] bg-gradient-to-b from-primary to-secondary opacity-70 blur-sm" />
            <img
              src={profileImg}
              alt="Ikshitha Janarthanan"
              className="relative w-full aspect-square object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-mono text-2xl font-medium mb-6 text-foreground">
            About Me
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8 text-base max-w-2xl">
            I am a passionate software engineer interested in distributed systems scalability and optimization. 
            Beyond engineering, I dive deep into LLMs, Reinforcement Learning, and Multi-modal research.
          </p>

          {/* ACHIEVEMENTS */}
          <div className="space-y-4">
            {achievements.map((a) => (
              <div key={a.text} className="flex items-start gap-3">
                <a.icon
                  size={16}
                  strokeWidth={1}
                  className="text-primary mt-0.5 shrink-0"
                />
                <p className="text-sm text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;