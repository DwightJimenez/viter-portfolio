import React from "react";

const Project = () => {
  const projectList = [
    {
      title: "ReadTrack",
      code: "ML_SVM // 01",
      tech: ["React", "FastAPI", "Python", "SVM"],
      description:
        "An educational assessment tool that evaluates student reading and writing materials. Engineered the data pipeline and integrated a specialized Support Vector Machine (SVM) model to process text and output qualitative proficiency classifications (Independent, Instructional, or Frustration).",
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "ALAB Web App",
      code: "BKT_STEM // 02",
      tech: ["React", "Express.js", "Sequelize"],
      description:
        "A robust web application demonstrating complex data management. Designed the RESTful API routing and implemented efficient database queries using the Sequelize ORM to ensure scalable performance and seamless front-end integration.",
      liveLink: "https://alab-tan.vercel.app",
      repoLink: "https://github.com/DwightJimenez/ALAB.git",
    },
    {
      title: "Org Automation System",
      code: "RBAC_WF // 03",
      tech: ["React", "Express.js", "Sequelize"],
      description:
        "Architected a full-stack Workflow Automation System for the ACScis Organization at Bicol University Polangui. Developed as a Software Engineering academic project, this platform streamlines administrative operations by implementing robust role-based access controls, comprehensive audit logging, and automated organizational workflows.",
      liveLink: "https://se-2-khaki.vercel.app",
      repoLink: "https://github.com/DwightJimenez/SE2.git",
    },
    {
      title: "Web Application for Organization",
      code: "SAAS_RAG // 04",
      tech: [
        "Laravel 11",
        "React",
        "Inertia.js",
        "Tailwind CSS",
        "Stancl/Tenancy",
        "RAG",
      ],
      description:
        "Engineered an AI-ready, multi-tenant SaaS platform featuring isolated SQLite/MySQL databases and secure subdomain routing per workspace. Developed a centralized dashboard for organization management and customizable tenant portals equipped with granular Role-Based Access Control (RBAC) using Spatie. Architected the backend infrastructure to support an automated Retrieval-Augmented Generation (RAG) engine for proprietary document ingestion and AI querying.",
      liveLink: "#",
      repoLink: "https://github.com/DwightJimenez/Org-2.0.git",
    },
  ];

  return (
    <section
      id='project'
      className='relative min-h-screen w-full overflow-hidden flex items-center py-24 border-t border-white/10'
    >
      {/* Signature Dot-Matrix Background (Fixed from w-screen overflow) */}
      <div className='absolute inset-0 z-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'></div>

      {/* Decorative Side Borders (Preserved from Original) */}
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-primary -right-1 top-[50%] z-0 opacity-70'></div>
      <div className='pointer-events-none absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%] z-0 opacity-70'></div>

      <div className='relative z-10 container mx-auto px-4'>
        {/* Section Header */}
        <div className='flex items-center gap-4 mb-16'>
          <h3 className='title text-3xl sm:text-4xl text-white font-mono tracking-tight'>
            <span className='text-purple-500 font-semibold'>#</span>project
          </h3>
          <div className='h-[1px] flex-1 max-w-xs bg-gradient-to-r from-purple-500/60 to-transparent'></div>
          <span className='hidden sm:inline-block font-mono text-xs text-slate-500'>
            [SEC_03 // DEPLOYED_SYSTEMS]
          </span>
        </div>

        {/* 2x2 System Matrix Grid for 4 Projects */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projectList.map((project, index) => {
            const hasLive = project.liveLink && project.liveLink !== "#";
            const hasRepo = project.repoLink && project.repoLink !== "#";

            return (
              <div
                key={index}
                className='group relative flex flex-col outline outline-1 outline-secondary bg-[#050b14]/85 backdrop-blur-md hover:-translate-y-1.5 transition-all duration-300 shadow-xl'
              >
                {/* Hover Corner Crosshairs */}
                <div className='pointer-events-none absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                <div className='pointer-events-none absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity'></div>

                {/* Top Module Telemetry Bar */}
                <div className='flex items-center justify-between px-6 py-2.5 bg-white/[0.03] border-b border-white/10 font-mono text-xs'>
                  <span className='text-purple-400 font-medium'>
                    {project.code}
                  </span>
                  <div className='flex items-center gap-2'>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        hasLive
                          ? "bg-emerald-400 animate-pulse"
                          : hasRepo
                            ? "bg-purple-400"
                            : "bg-amber-400/80"
                      }`}
                    ></span>
                    <span className='text-slate-400 text-[11px]'>
                      {hasLive
                        ? "STATUS: PRODUCTION"
                        : hasRepo
                          ? "STATUS: SOURCE_PUBLIC"
                          : "STATUS: THESIS_BUILD"}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className='flex flex-col flex-grow p-6 sm:p-7'>
                  <h4 className='text-xl sm:text-2xl font-bold text-white mb-3 font-mono group-hover:text-purple-300 transition-colors'>
                    {project.title}
                  </h4>

                  {/* Tech Stack Pills */}
                  <div className='flex flex-wrap gap-2 mb-5'>
                    {project.tech.map((techItem, techIndex) => (
                      <span
                        key={techIndex}
                        className='px-2.5 py-1 text-xs font-mono border border-purple-500/40 bg-purple-950/30 text-purple-300'
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className='text-slate-300 text-sm sm:text-base mb-8 flex-grow leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Action Footer */}
                  <div className='mt-auto pt-4 border-t border-white/10 flex flex-col gap-2.5 font-mono'>
                    <div className='flex gap-4'>
                      {hasLive && (
                        <a
                          href={project.liveLink}
                          target='_blank'
                          rel='noreferrer'
                          className='flex-1 text-center py-2.5 bg-purple-700 hover:bg-purple-600 text-white transition-all text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]'
                        >
                          &gt; Live_Demo
                        </a>
                      )}

                      {hasRepo && (
                        <a
                          href={project.repoLink}
                          target='_blank'
                          rel='noreferrer'
                          className={`${
                            hasLive ? "flex-1" : "w-full"
                          } text-center py-2.5 border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:text-white transition-all text-xs sm:text-sm font-semibold uppercase tracking-wider`}
                        >
                          &#123; Source_Code &#125;
                        </a>
                      )}

                      {!hasLive && !hasRepo && (
                        <div className='w-full text-center py-2.5 border border-white/10 bg-white/[0.02] text-slate-500 text-xs uppercase tracking-widest'>
                          [INTERNAL_RESEARCH_BUILD // NO_PUBLIC_REPO]
                        </div>
                      )}
                    </div>

                    {/* Demo Credentials Notice */}
                    {hasLive && (
                      <span className='text-[11px] text-slate-400 text-center italic mt-0.5'>
                        * Demo credentials available in GitHub README
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
