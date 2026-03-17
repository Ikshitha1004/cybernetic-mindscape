import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import { GraduationCap, Award, Code } from "lucide-react";

const stats = [
  { value: "9.13", label: "CGPA", suffix: "" },
  { value: "1000", label: "Problems Solved", suffix: "+" },
  { value: "Top 1", label: "NPTEL LLMs", suffix: "%" },
];

const achievements = [
  { icon: GraduationCap, text: "B.Tech CSE, IIT Tirupati — Class of 2026" },
  { icon: Award, text: "Amazon ML Summer School 2025 Scholar" },
  { icon: Code, text: "1000+ problems on LeetCode & Codeforces" },
];

const AboutSection = () => (
  <section id="about" className="py-[20vh] relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
      >
        // ABOUT
      </motion.p>

      <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="absolute -inset-[2px] bg-gradient-to-b from-primary to-secondary opacity-60" />
            <img
              src={profileImg}
              alt="Ikshitha Janarthanan"
              className="relative w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-mono text-2xl font-medium mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            I am a passionate software engineer interested in distributed systems scalability and optimization. Beyond engineering, I dive deep into LLMs, Reinforcement Learning, and Multi-modal research.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="border-t-2 border-primary pt-4">
                <p className="font-mono text-2xl font-bold text-foreground tabular-nums">
                  {s.value}<span className="text-primary">{s.suffix}</span>
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {achievements.map((a) => (
              <div key={a.text} className="flex items-start gap-3">
                <a.icon size={16} strokeWidth={1} className="text-primary mt-0.5 shrink-0" />
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
