import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(174 72% 56% / 0.15) 0%, transparent 70%)",
            top: "10%",
            left: "10%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 60% 60% / 0.1) 0%, transparent 70%)",
            bottom: "20%",
            right: "10%",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Avatar */}
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="relative"
>
  <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-primary p-1">
    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
      <img 
        src="eu2.jpg" 
        alt="Jean Caio" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
  <motion.div
    className="absolute -inset-4 rounded-full border border-primary/30"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />
</motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-mono text-sm mb-2"
            >
              Olá, eu sou
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-6xl font-bold mb-4"
            >
              Jean Caio{" "}
              <span className="text-gradient">Casagrande</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-6"
            >
              Desenvolvedor Backend
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Especializado em Java, Spring Boot e APIs REST. 
              Buscando minha primeira oportunidade para transformar código em soluções reais.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" asChild>
                 <a href="/cv-jean.pdf" download>
               <Download className="w-5 h-5" />
                  Download CV
                 </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://linkedin.com/in/jeancaio" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/jeancaiocs" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
