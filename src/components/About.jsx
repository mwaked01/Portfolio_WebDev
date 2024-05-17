import "../styles/About.scss"

const About = (props) => {
  const { activeSection } = props;
  return (
    <section id="ABOUT" >
      <h2>ABOUT ME</h2>
      <div className="content">
        <p>
          "I need you to figure it out" has always been my favorite assignment
          at any job I've had, especially when I can write code to make it
          happen. I believe that a code editor is the ultimate canvas where
          creativity can branch into any aspect of life. Commitment to continuous
          learning and staying up-to-date with the latest industry trends is a
          must in my daily journey toward becoming a better programmer, and
          it's a crucial step of the journey which I enjoy.
        </p>
        <p>
          I am currently a CNC Programmer responsible for managing multiple
          projects within my department. Teamwork and attention to detail
          are the main keys to my success in this role. Within one year in
          the industry, I quickly became proficient with the required CAD
          and CAM software, as well as the machine's controllers.
          By doing so, I was promoted to a senior machinist position and
          became responsible for working on finished production tools.
        </p>
      </div>
    </section>

  );
};

export default About;
