import { motion } from "framer-motion";

const hardSkills = [
  "Video Editing", "Colorgrading", "Typography", "UI/UX", "Cinematography",
  "Sound Design", "Photo Editing", "Graphic Design", "Transitions",
];

const softSkills = [
  "Creativity", "Communication", "Time Management", "Adaptability", "Attention to Detail",
  "Problem Solving", "Collaboration", "Organization", "Patience", "Critical Thinking",
];

function SkillGrid({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8"
      >
        <span className="gradient-text">{title}</span>
      </motion.h3>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="glass rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 font-display text-sm sm:text-lg md:text-2xl font-semibold text-foreground border border-border/50 hover:border-primary/50 transition-colors cursor-default text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative pt-4 sm:pt-8 pb-20 sm:pb-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-2">Expertise</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            My <span className="gradient-text">skills</span>
          </h2>
        </motion.div>

        <SkillGrid title="Hard Skills" skills={hardSkills} />
        <SkillGrid title="Soft Skills" skills={softSkills} />
      </div>
    </section>
  );
}
