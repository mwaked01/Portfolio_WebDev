import { useMemo } from 'react'
import "../styles/Skills.scss"
import skillsData from '../data/skillsData';

const Skills = () => {
  const skills = useMemo(() => skillsData, []);
  return (
    <section id="SKILLS">
      {skills.map((categoryItem, index) => {
        const CategoryIcon = categoryItem.categoryIcon;
        return (
          <div className="skill-card" key={index}>
            <h3 className='category'>
              <CategoryIcon fontSize="large" className="title_icon" color="info" />
              {categoryItem.category}
            </h3>
            <div className="skill-items">
              {categoryItem.skill.map((skillItem, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <img src={skillItem.icon} alt={`${skillItem.name} Icon`} />
                  {skillItem.name}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>

  );
};

export default Skills;
