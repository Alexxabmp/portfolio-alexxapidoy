import { motion } from "framer-motion";

const education = [
  {
    school: "Mlang Pilot Elementary School",
    years: "2011 – 2017",
    level: "Elementary",
  },
  {
    school: "Mlang National High School",
    years: "2017 – 2021",
    level: "Junior High School",
  },
  {
    school: "Notre Dame of Dadiangas University",
    years: "2021 – 2023",
    level: "Senior High School",
  },
  {
    school: "Ateneo de Davao University",
    years: "2023 – Present",
    level: "Bachelor of Science in Computer Science — Undergraduate",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <div className="container relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-2">Background</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            My <span className="gradient-text">education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-3 sm:left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 sm:pl-14 md:pl-16"
              >
                <div className="absolute left-1.5 sm:left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary box-glow" />

                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <p className="font-body text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-1">{item.years}</p>
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">{item.school}</h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground">{item.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
