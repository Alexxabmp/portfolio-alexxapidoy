import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 sm:px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
        {/* Profile image - shown first on mobile, second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex-shrink-0 order-first md:order-last md:mr-8 lg:mr-16 mt-8 md:mt-0"
        >
          <div
            className="w-36 h-48 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-[50%] overflow-hidden"
            style={{
              boxShadow: "0 0 40px hsl(270 80% 65% / 0.35), 0 0 80px hsl(270 80% 65% / 0.15)",
            }}
          >
            <img
              src={profileImg}
              alt="Alexxa Bianca Pidoy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="text-center md:text-left md:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-3 font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            Designer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-glow"
          >
            <span className="gradient-text">Alexxa Bianca</span>{" "}
            <span className="text-foreground">Pidoy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mx-auto md:mx-0 mt-4 sm:mt-6 max-w-lg font-body text-sm sm:text-base md:text-lg text-muted-foreground"
          >
            Building immersive digital experiences at the intersection of design and technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-6 sm:mt-10 flex justify-center md:justify-start gap-3 sm:gap-4"
          >
            <a
              href="/projects"
              className="rounded-lg bg-primary px-5 sm:px-8 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:scale-105 box-glow"
            >
              View Work
            </a>
            <a
              href="/skills"
              className="rounded-lg border border-border px-5 sm:px-8 py-2.5 sm:py-3 font-display text-xs sm:text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              See Skills
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
