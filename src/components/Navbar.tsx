import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="font-mono text-sm tracking-tight text-foreground hover:text-primary transition-colors">
          IKSHITHA<span className="text-primary">.</span>DEV
        </button>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        <button className="md:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(l)}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
