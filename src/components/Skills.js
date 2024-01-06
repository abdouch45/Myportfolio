import React from 'react';

const Skills = (props) => {
  const { frontEnd, backEnd, AddSkills, exp } = props;

  return (
    <div className="skills">
      <h2>1-Technical skills:</h2>

      <div>
        <h3>Front-end:</h3>
        {frontEnd.map((skill, index) => (
          <div key={index}>
            <p>{skill.title}</p>
            <p>{skill.discription}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Back-end:</h3>
        {backEnd.map((skill, index) => (
          <div key={index}>
            <p>{skill.title} {skill.discription}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Additional Skills:</h3>
        {AddSkills.map((skill, index) => (
          <div key={index}>
            <p>{skill.title}</p>
            <p>{skill.discription}</p>
          </div>
        ))}
      </div>

      <h2>2-Experience</h2>

      <div>
        {exp.map((experience, index) => (
          <div key={index}>
            <p>{experience.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
