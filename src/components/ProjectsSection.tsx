import { motion } from "framer-motion";
import testimonialImg from "@/assets/testimonials.jpg";
import shortfilmImg from "@/assets/shortfilm.jpg";
import reelsImg from "@/assets/reels.jpg";
import websiteImg from "@/assets/website.png";
import postersImg from "@/assets/posters.jpg";

const projects = [
  {
    title: "Testimonials",
    description: "Crafts authentic testimonial videos that showcase genuine stories and build credibility.",
    tags: ["Davinci Resolve", "Premiere Pro", "Capcut"],
    image: testimonialImg,
  },
  {
    title: "Short Film",
    description: "Creates impactful short films that deliver strong narratives in a concise format.",
    tags: ["Davinci Resolve", "Premiere Pro", "Capcut"],
    image: shortfilmImg,
  },
  {
    title: "Reels",
    description: "Designs dynamic reels that grab attention and keep viewers engaged.",
    tags: ["Davinci Resolve", "Premiere Pro", "Capcut"],
    image: reelsImg,
  },
  {
    title: "Website",
    description: "Designed and developed a responsive website that delivers a seamless user experience and visually engaging interface.",
    tags: ["HTML", "CSS", "JavaScript", "Wordpress"],
    image: websiteImg,
  },
  {
    title: "Posters",
    description: "Design visually striking posters that communicate messages clearly and capture attention through strong composition and creative layout.",
    tags: ["Canva", "Adobe Photoshop"],
    image: postersImg,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-4 sm:pt-8 pb-20 sm:pb-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary mb-2">Work</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Created <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group cursor-default"
            >
              <div className="h-36 sm:h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <span className="font-display text-4xl font-bold gradient-text">✦</span>
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 sm:px-3 py-0.5 sm:py-1 font-body text-[10px] sm:text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
