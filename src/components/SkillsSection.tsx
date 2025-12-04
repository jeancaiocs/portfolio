import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techSkills = [
  { name: "Java", level: 85, icon: "☕" },
  { name: "Spring Boot", level: 80, icon: "🍃" },
  { name: "APIs REST", level: 85, icon: "🔗" },
  { name: "MySQL", level: 75, icon: "🗄️" },
  { name: "JPA/Hibernate", level: 70, icon: "📦" },
  { name: "Maven", level: 75, icon: "🔧" },
  { name: "Docker", level: 60, icon: "🐳" },
];

const tools = [
  { name: "Git", icon: "📂" },
  { name: "GitHub", icon: "🐙" },
  { name: "Postman", icon: "📮" },
  { name: "Swagger", icon: "📜" },
];

const softSkills = [
  { name: "Comunicação", icon: "💬" },
  { name: "Resolução de Problemas", icon: "🧩" },
  { name: "Aprendizado Rápido", icon: "🚀" },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold mb-6 text-center text-muted-foreground"
          >
            Tecnologias
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass glass-hover p-4 rounded-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + 0.1 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">
              Ferramentas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass glass-hover px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <span>{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass glass-hover px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <span>{skill.icon}</span>
                  <span className="font-medium text-sm">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
