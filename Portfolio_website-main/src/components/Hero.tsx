import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ayush_resume2.pdf";
    link.download = "Ayush_Katiyar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 cyber-grid" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute inset-0 scanline opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Terminal Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card mb-8 font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary">~/</span>
            <span className="text-muted-foreground">status:</span>
            <span className="text-green-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              available for hire
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-foreground font-display">HI, I'M</span>
            <span className="gradient-text font-display">AYUSH KATIYAR</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            B.Tech CS student crafting{" "}
            <span className="text-primary">high-performance</span> web applications
            with cutting-edge technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            {/* View Work */}
            <motion.a
              href="#projects"
              className="group px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center gap-2 neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>

            {/* Download Resume (Guaranteed Working) */}
          <motion.a
  href="/ayush_resume2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-lg border border-primary/50 text-foreground font-semibold flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FileText className="w-4 h-4" />
  View Resume
</motion.a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/ayushkatiyar31" },
              { icon: Linkedin, href: "https://linkedin.com/in/ayush-katiyar-31888b256" },
              { icon: Mail, href: "mailto:ayushkatiyar827@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;