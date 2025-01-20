import { useEffect, useState } from "react";
import '../styles/About.scss';
const About = () => {
  const [visibleText, setVisibleText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const text = `A web developer passionate about bridging the gap between intuitive design and functional solutions       
  I am a freelance full stack web developer currently integrating organizational
  platforms for local business. I work closely with my clients to tailor
  their webApps to their desired design and functionality. `;

  const lines = text.split("\n");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        if (charIndex < currentLine.length) {
          setVisibleText((prev) => prev + currentLine[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setVisibleText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      }
    }, 10); // Adjust typing speed (milliseconds per character)

    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex, lines]);

  return (
    <section id="ABOUT">
      <div id="greeting">
        <h1 className="logo">Hi </h1>
        <div className="emoji">👋</div>
        <h1 className="logo">I'm Mohamed Waked,</h1>
      </div>
      <div className="code-typer">
        {lines.map((_, idx) => (
          <div className="code-line" key={idx}>
            <span className="line-number">{idx + 1}</span>
            <span>
              {visibleText.split("\n")[idx] || ""}
              {idx === lineIndex && <span className="cursor">|</span>}
            </span>
          </div>
        ))}
        <span className="cursor">|</span>
      </div>
    </section>
  );
};

export default About;
