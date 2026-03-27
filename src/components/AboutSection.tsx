import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = ["Figma", "Davinci Resolve", "Adobe Premiere Pro", "Adobe Photoshop", "Canva", "Wordpress", "Capcut", "HTML", "CSS", "JavaScript", "Java"];

  return (
    <section id="about" className="relative py-20 sm:py-32 pb-8 sm:pb-12 px-4 sm:px-6">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="container relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-2">About</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Crafting digital <span className="gradient-text">experiences</span>
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-12">
            I'm a motivated and curious individual who enjoys learning new skills and taking on challenges. I'm passionate about creating meaningful work and continuously improving myself, whether working independently or with a team. I value creativity, dedication, and attention to detail, and I'm always eager to grow and explore new opportunities where I can contribute and make an impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 sm:gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              className="glass rounded-full px-3 sm:px-5 py-1.5 sm:py-2 font-body text-xs sm:text-sm text-foreground"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
