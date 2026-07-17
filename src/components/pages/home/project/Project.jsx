import React from "react";

const Project = () => {
  const projectList = [
    {
      title: "ReadTrack",
      tech: ["React", "FastAPI", "Python", "SVM"],
      description:
        "An educational assessment tool that evaluates student reading and writing materials. Engineered the data pipeline and integrated a specialized Support Vector Machine (SVM) model to process text and output qualitative proficiency classifications (Independent, Instructional, or Frustration).",
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "ALAB Web App",
      tech: ["React", "Express.js", "Sequelize"],
      description:
        "A robust web application demonstrating complex data management. Designed the RESTful API routing and implemented efficient database queries using the Sequelize ORM to ensure scalable performance and seamless front-end integration.",
      liveLink: "https://alab-tan.vercel.app",
      repoLink: "https://github.com/DwightJimenez/ALAB.git",
    },
    {
      title: "Org Automation System",
      tech: ["React", "Express.js", "Sequelize"],
      description:
        "Developed core interaction scripts via raycasting, dialogue delivery UI, and quest-gating systems. Collaborated within a 10-person cross-functional team, managing workflows alongside 2D/3D artists, writers, and other developers.",
      liveLink: "https://se-2-khaki.vercel.app",
      repoLink: "https://github.com/DwightJimenez/SE2.git",
    },
  ];
  return (
    <>
      <div id="project" className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        <div className="absolute w-16 h-96 border-2 border-primary -right-1 top-[50%]"></div>
        <div className="absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%]"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <div className="container">
            <h3 className="title mb-16 text-white">
              <span className="text-purple-700 font-semibold">#</span>project
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col outline outline-1 outline-secondary p-6 bg-black/40 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300"
                >
                  <h4 className="text-2xl font-bold text-white mb-3 font-mono">
                    {project.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techItem, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-mono border border-purple-700 text-purple-400"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-4 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 bg-purple-700 hover:bg-purple-800 text-white transition-colors text-sm font-bold"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={`${project.liveLink ? "flex-1" : "w-full"} text-center py-2 border border-purple-700 text-purple-400 hover:bg-purple-700/20 transition-colors text-sm font-bold`}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
