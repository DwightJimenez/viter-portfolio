import React from "react";

const About = () => {
  return (
    <>
      <section className="h-screen" id="about">
        <div>
          <div className="relative h-screen">
            <div className="absolute inset-0">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
            </div>
            <div className="absolute w-16 h-96 border-2 border-primary -right-1 top-[50%]"></div>
            <div className="absolute w-16 h-96 border-2 border-primary -left-1 bottom-[50%]"></div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
              <div className="container">
                <h3 className="title mb-16 text-white">
                  <span className="text-purple-700 font-semibold">#</span>about
                  Me
                </h3>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                  <div className="flex justify-center">
                    <img
                      src="/images/about me.webp"
                      alt="about me"
                      className="w-[50vh] max-w-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-5 outline outline-1 outline-secondary p-4 my-auto relative text-white">
                    <div className="w-fit relative">
                      <h4 className="font-bold tag--h4 relative">
                        Systems-Oriented Full-Stack Developer
                      </h4>
                    </div>

                    <div className="relative">
                      <p className="tag--p">
                        I am a Computer Science senior at Bicol University
                        Polangui. As a DOST Scholar, I approach software
                        engineering with a strong emphasis on analytical
                        problem-solving. My technical expertise centers on
                        architecting scalable, data-driven web applications
                        using React, Express.js, and Sequelize, focusing on
                        writing optimized, maintainable code for complex
                        systems.
                      </p>
                    </div>

                    <div className="relative">
                      <p className="tag--p">
                        My portfolio demonstrates diverse engineering experience:
                        I served as a Software Engineer for SE2, developing its
                        robust role-based access and audit logging systems.
                        My senior thesis, ReadTrack, highlights my work in
                        Machine Learning, where we implemented an SVM model to
                        perform qualitative text proficiency classification.
                        Additionally, I was commissioned to develop ALAB, a
                        research-driven platform for STEM students that
                        integrates Bayesian Knowledge Tracing (BKT) to manage
                        laboratory safety assessments and inventory.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;