import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import PageTransition from "@/components/layout/PageTransition";
import BubbleBackground from "@/components/effects/BubbleBackground";
import { Folder, Github, ExternalLink, ChevronDown, ChevronUp, Zap, Clock, Users, Database } from "lucide-react";

const projects = [
 {
  id: 1,
  title: "DevLinker",
  subtitle: "MERN Stack, WebSockets, JWT",
  duration: "April 2025 – May 2025",
  description: "A full-stack developer networking platform enabling real-time communication, gig collaboration, and community discussions.",
  problem: "Developers often lack a dedicated platform for networking, collaboration, gig opportunities, and technical discussions in one unified ecosystem.",
  features: [
    "Secure JWT-based authentication with protected routes",
    "RESTful APIs for user profiles and connection management",
    "Real-time one-to-one chat using WebSockets",
    "Responsive feed-based UI with profile customization and theme support",
    "Gig posting module with full CRUD operations",
    "Discussion forum with comments, upvotes, and filtering system"
  ],
  techStack: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets", "JWT", "Tailwind CSS"],
  metrics: [
    { label: "Real-time Message Latency", value: "<200ms" },
    { label: "API Response Optimization", value: "+35%" },
    { label: "User Engagement Increase", value: "+45%" }
  ],
  github: "https://github.com/ayushkatiyar31/DevLinker-Frontend",
  live: "https://dev-linker-frontend.vercel.app/",
  featured: true,
},
  {
    id: 2,
    title: "StudyNotion",
    subtitle: "React.js, Node.js, MongoDB, Redux",
    duration: "Jan 2025 – Feb 2025",
    description: "Full-featured EdTech platform with role-based dashboards, authentication, and course workflows.",
    problem: "Online learning platforms need secure access control, smooth course creation, and reliable payment/enrollment flows.",
    features: [
      "Role-based dashboards with profile management and password recovery",
      "Secure JWT authentication and access control",
      "Course creation, media uploads, and automated enrollment workflows",
      "Razorpay integration with Redux-based state management",
      "Optimized UX to reduce payment failures",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Razorpay"],
    metrics: [
      { label: "Access Control", value: "+40%" },
      { label: "Frontend Perf", value: "+30%" },
      { label: "Payment Failures", value: "-15%" },
    ],
    github: "https://github.com/ayushkatiyar31/Edtech-frontend",
    live: "https://edtech-fontend.vercel.app/",
    featured: true,
  },
  {
    id: 1,
    title: "Employee HR Platform",
    subtitle: "MERN Stack, Tailwind, JWT",
    duration: "Nov 2024 – Dec 2024",
    description: "A scalable full-stack HR management platform for efficient employee data handling.",
    problem: "Organizations struggle with managing employee data, leave tracking, and access control across different roles.",
    features: [
      "Role-Based Access Control (RBAC) with Admin, HR, and Employee roles",
      "End-to-end authentication using JWT and bcrypt",
      "Employee directory with department-wise organization",
      "Leave and attendance tracking modules",
      "Announcements and notifications system",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "bcrypt"],
    metrics: [
      { label: "Data Handling Speed", value: "+40%" },
      { label: "Dashboard Usability", value: "+25%" },
      { label: "Security Improvement", value: "100%" },
    ],
    github: "https://github.com/ayushkatiyar31/Employee-hr-platform",
    live: "https://employee-hr-platformm.netlify.app/",
    featured: true,
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
    >
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.featured && (
                <span className="px-2 py-0.5 rounded bg-primary text-primary-foreground text-xs font-mono">
                  Featured
                </span>
              )}
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.duration}
              </span>
            </div>
            <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-primary font-mono">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>

      {/* Metrics */}
      <div className="px-6 py-4 bg-secondary/30 grid grid-cols-3 gap-4">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-lg font-bold text-primary font-mono">{metric.value}</p>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 space-y-6">
          {/* Problem Statement */}
          <div>
            <h4 className="text-sm font-semibold font-display text-primary mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              PROBLEM STATEMENT
            </h4>
            <p className="text-sm text-muted-foreground">{project.problem}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold font-display text-primary mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              KEY FEATURES
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold font-display text-primary mb-2 flex items-center gap-2">
              <Database className="w-4 h-4" />
              TECH STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-secondary border border-primary/20 text-primary text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full py-3 border-t border-border/50 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            View Details <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </motion.article>
  );
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <PageTransition>
      <Helmet>
        <title>Projects | Ayush Katiyar</title>
        <meta name="description" content="View projects by Ayush Katiyar - Employee HR Platform, Task Manager, E-Commerce Catalog. Built with MERN stack." />
      </Helmet>

      <BubbleBackground />

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute left-1/2 top-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px] -translate-x-1/2" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg glass-card text-sm text-primary font-mono mb-4">
                <Folder className="w-4 h-4" />
                ./projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                FEATURED <span className="gradient-text">PROJECTS</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world applications showcasing full-stack development expertise and problem-solving skills.
              </p>
            </motion.div>

            {/* Projects List */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
              ))}
            </div>

            {/* GitHub CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href="https://github.com/ayushkatiyar31"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-foreground font-mono font-medium hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Github className="w-4 h-4" />
                View All Projects on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ProjectsPage;