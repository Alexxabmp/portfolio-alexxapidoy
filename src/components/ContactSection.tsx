import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Facebook, Instagram, X } from "lucide-react";

export default function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-2">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12">
            Have a project in mind? I'd love to hear about it. Let's build something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-16 flex justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => setShowEmail(true)}
            className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
          <a
            href="https://www.facebook.com/share/1BKT2W38uu/"
            target="_blank"
            rel="noopener"
            className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="https://www.instagram.com/0.0001x?igsh=MWF5bnZhejBwZGZ1dA=="
            target="_blank"
            rel="noopener"
            className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
        </motion.div>

        <AnimatePresence>
          {showEmail && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="mt-6 sm:mt-8 mx-auto max-w-sm glass rounded-2xl p-5 sm:p-6 relative"
            >
              <button
                onClick={() => setShowEmail(false)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="font-body text-xs sm:text-sm text-muted-foreground mb-1">Email me at</p>
              <a
                href="mailto:alexapidoy0@gmail.com"
                className="font-display text-base sm:text-lg font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                alexapidoy0@gmail.com
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="mt-14 sm:mt-20 font-body text-[10px] sm:text-xs text-muted-foreground">
          © 2026 Alexxa Bianca Pidoy. All rights reserved.
        </p>
      </div>
    </section>
  );
}
