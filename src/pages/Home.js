import React from "react";
import IconLink from "../components/IconLink";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

export default function HomePage() {
  return (
    <div>
      <section>
        <div class="pageTop image" style={{ textAlign: "center" }}>
          <div class="text">
            <h1 className="myName" style={{ fontSize: "50px" }}>
              Yurie Koga
            </h1>
            <p>Energetic Software Developer</p>
            <IconLink IconName="LinkedIn" />
            <IconLink IconName="GitHub" />
          </div>
        </div>
      </section>

      <section>
        <div class="contentTitle">
          <h1>About Me</h1>
        </div>

        <div class="skill-content">
          <Skills SkillName="Languages" />
          <Skills SkillName="Frameworks" />
          <Skills SkillName="Databases" />
          <Skills SkillName="Technologies" />
        </div>
      </section>

      <section>
        <div class="contentTitle">
          <h1>Contributed Projects</h1>
        </div>

        <div class="project-content">
          <div data-aos="fade-right">
            <Projects ProjectName="Project 1" />
          </div>
          <div data-aos="fade-left">
            <Projects ProjectName="Project 2" />
          </div>
          <div data-aos="fade-right">
            <Projects ProjectName="Project 3" />
          </div>
        </div>
      </section>

      <section>
        <div class="contentTitle">
          <h1>Blogs</h1>
        </div>
        <div class="blog-content">
          <Blogs />
        </div>
      </section>
    </div>
  );
}
