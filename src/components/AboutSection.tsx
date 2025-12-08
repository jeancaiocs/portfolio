import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Code, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Desenvolvedor Backend em início de carreira
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sou Jean Caio Casagrande Santos, desenvolvedor backend apaixonado por criar 
              soluções robustas e escaláveis. Minha jornada na programação começou com a 
              curiosidade de entender como sistemas funcionam por trás das telas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Atualmente focado em <span className="text-primary font-medium">Java</span> e 
              <span className="text-primary font-medium"> Spring Boot</span>, desenvolvo APIs REST 
              bem estruturadas, trabalho com bancos de dados PostgreSQL e aplico boas práticas de 
              desenvolvimento com JPA/Hibernate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Estou em busca da minha primeira oportunidade profissional na área, onde 
              possa aplicar meus conhecimentos e continuar evoluindo como desenvolvedor.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            <div className="glass glass-hover p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Objetivo</h4>
                  <p className="text-muted-foreground text-sm">
                    Conquistar minha primeira oportunidade como desenvolvedor backend 
                    e contribuir com projetos desafiadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Foco</h4>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvimento de APIs REST, arquitetura de software e boas práticas 
                    de código limpo e manutenível.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-muted-foreground text-sm">
                    Umuarama – PR, Brasil. Disponível para trabalho remoto ou presencial.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
