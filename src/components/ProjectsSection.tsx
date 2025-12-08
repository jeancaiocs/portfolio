import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SmartMarket – Sistema Completo de Mercado",
    description:
      "Sistema de mercado com cadastro de usuários, produtos, carrinho e integração com banco de dados.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Lombok"],
    githubUrl: "https://github.com/jeancaiocs",
    liveUrl: null,
  },
  {
    title: "FinCas - Controle Financeiro",
    description:
      "Aplicação completa para gestão financeira pessoal, com cadastro de usuários, controle de entradas e saídas, categorias, metas e dashboard com gráficos.",
    technologies: ["Java", "Spring Boot", "JWT", "PostgreSQL", "React", "TypeScript", "Docker"],
    githubUrl: "https://github.com/jeancaiocs",
    liveUrl: null,
  },
  {
    title: "Portfólio Profissional – Jean Caio",
    description:
      "Site pessoal desenvolvido para apresentar minhas habilidades, trajetória, projetos e formas de contato. Construído com foco em performance, animações responsivas e design moderno.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    githubUrl: "https://github.com/jeancaiocs",
    liveUrl: null,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos pessoais desenvolvidos para aprimorar minhas habilidades e 
            demonstrar meu conhecimento em desenvolvimento backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass glass-hover rounded-xl overflow-hidden group"
            >
              {/* Project header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver no GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver projeto"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/jeancaiocs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              Ver mais no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
