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

                <div className="grid grid-cols-2">
                  <div className="flex justify-center">
                    <img
                      src="/images/about me.webp"
                      alt="about me"
                      className="w-[50vh]"
                    />
                  </div>
                  <div className="flex flex-col gap-5 outline outline-1 outline-secondary p-4 relative text-white">
                    <div className="w-fit relative">
                      <h4 className="font-bold  tag--h4 relative">
                        Crafting Digital Excellence
                      </h4>
                    </div>

                    <div className="relative">
                      <p className="tag--p">
                        I am a Computer Science senior at Bicol University
                        Polangui, specializing in full-stack web development and
                        game engineering. My core technical stack revolves
                        around React, Express.js, and Sequelize, which I use to
                        architect scalable, data-driven applications. As a DOST
                        Scholar, I approach software engineering with a strong
                        emphasis on analytical problem-solving and writing
                        optimized, maintainable code.
                      </p>
                    </div>

                    <div className="relative">
                      <p className="tag--p">
                        My recent work includes developing ReadTrack, an
                        educational tool where I integrated a Support Vector
                        Machine (SVM) model to output qualitative proficiency
                        classifications. I also have experience collaborating in
                        cross-functional teams to build interaction and dialogue
                        systems in Unity. Outside of coding, I'm deeply
                        interested in system hardware optimization for
                        competitive gaming and exploring high-fidelity audio
                        gear.
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
