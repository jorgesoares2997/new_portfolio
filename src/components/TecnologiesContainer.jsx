import {
  DiHtml5,
  DiCss3Full,
  DiJsBadge,
  DiMysql,
  DiReact,
  DiGit,
  DiDart,
  DiPhp,
  DiLaravel,
  DiPython,
  DiSass,
  DiBootstrap,
  DiScrum,
} from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import "../styles/components/tecnologiescontainer.sass";

const tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, obs:'https://github.com/jorgesoares2997/portfolio-antigo' },
  { id: "css", name: "CSS3", icon: <DiCss3Full />, obs:'https://github.com/jorgesoares2997/portfolio-antigo'},
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> ,obs:'https://github.com/jorgesoares2997/Multstep_Form'},
  { id: "typescript", name: "TypeScript", icon: <SiTypescript /> ,obs:'https://github.com/jorgesoares2997/Multstep_Form'},
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "mysql", name: "MySql", icon: <DiMysql /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss /> },
  { id: "php", name: "PHP", icon: <DiPhp /> },
  { id: "laravel", name: "Laravel", icon: <DiLaravel /> },
  { id: "dart", name: "Dart", icon: <DiDart /> },
  { id: "flutter", name: "Flutter", icon: <RiFlutterFill /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "scrum", name: "Scrum", icon: <DiScrum /> },
];

const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {tecnologies.map((tech) => (
          <div className="tecnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnologies-info">
              <h3>{tech.name}</h3>
              <p>something</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TecnologiesContainer;
