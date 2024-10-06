import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  const skillCategories = [
    { data: SKILL_DATA, label: "All Skills" },
    { data: FRONTEND_SKILL, label: "Frontend Skills" },
    { data: BACKEND_SKILL, label: "Backend Skills" },
    { data: FULLSTACK_SKILL, label: "Fullstack Skills" },
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="relative flex flex-col items-center justify-center gap-3 py-20 overflow-hidden h-full"
    >
      {/* Hero Section */}
      <SkillText />

      {/* Skill Grids */}
      {skillCategories.map((category, categoryIndex) => (
        <div
          key={category.label}
          className="flex flex-row justify-around flex-wrap gap-5 mt-4 items-center"
        >
          {category.data.map((skill, i) => (
            <SkillDataProvider
              key={`${skill.skill_name}-${categoryIndex}`}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      ))}

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <div className="flex items-center justify-center w-full h-full bg-cover opacity-30">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
