import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            const subject = "Portfolio Contact";
            const body = `
          Name: ${form.name}
          Email: ${form.email}
          Message: ${form.message}
            `;

            window.location.href = `mailto:ikshi.thaj0477@gmail.com?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="py-[20vh] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4"
        >
          // CONTACT
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-mono text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
              Have a project?
              <br />
              Let's talk<span className="text-primary">.</span>
            </h2>

            <div className="flex gap-4 mt-8">
              {[
                { Icon: Github, href: "https://github.com/ikshitha1004/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/ikshitha-janarthanan/" },
                { Icon: Twitter, href: "https://x.com/Ikshitha121244" },
              ].map(({ Icon, href }) => (
                <a
                  key={Icon.displayName}
                  href={href}
                  className="p-3 border border-border text-muted-foreground hover:text-primary hover:border-primary hover:border-glow-cyan transition-all"
                >
                  <Icon size={18} strokeWidth={1} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                <label className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={4}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-transparent border-b border-border text-foreground text-sm py-2 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-transparent border-b border-border text-foreground text-sm py-2 focus:border-primary focus:outline-none transition-colors"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] hover:border-glow-cyan transition-shadow"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
