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
import { RiFlutterFill, RiLink } from "react-icons/ri";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import "../styles/components/tecnologiescontainer.sass";

const tecnologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    obs: "https://github.com/jorgesoares2997/portfolio-antigo",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3Full />,
    obs: "https://github.com/jorgesoares2997/portfolio-antigo",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    obs: "https://jorgesoares2997.github.io/Multstep_Form/",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    obs: "https://jorgesoares2997.github.io/GithubFinder/",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    obs: "https://jorgesoares2997.github.io/Multstep_Form/",
  },
  {
    id: "mysql",
    name: "MySql",
    icon: <DiMysql />,
    obs: "https://github.com/jorgesoares2997/audioIbp/tree/adaptado",
  },
  {
    id: "sass",
    name: "Sass",
    icon: <DiSass />,
    obs: "https://jorgesoares2997.github.io/new_portfolio/",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <DiBootstrap />,
    obs: "https://jorgesoares2997.github.io/portfolio/",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: <SiTailwindcss />,
    obs: "https://jorgesoares2997.github.io/Newsletter/",
  },
  {
    id: "php",
    name: "PHP",
    icon: <DiPhp />,
    obs: "https://github.com/jorgesoares2997/audioIbp/tree/adaptado",
  },
  {
    id: "laravel",
    name: "Laravel",
    icon: <DiLaravel />,
    obs: "https://github.com/jorgesoares2997/audioIbp/tree/adaptado",
  },
  {
    id: "dart",
    name: "Dart",
    icon: <DiDart />,
    obs: "https://github.com/jorgesoares2997/calculadora-flutter",
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: <RiFlutterFill />,
    obs: "https://github.com/jorgesoares2997/calculadora-flutter",
  },
  {
    id: "python",
    name: "Python",
    icon: <DiPython />,
    obs: "https://github.com/jorgesoares2997",
  },
  {
    id: "git",
    name: "Git",
    icon: <DiGit />,
    obs: "https://github.com/jorgesoares2997",
  },
  {
    id: "scrum",
    name: "Scrum",
    icon: <DiScrum />,
    obs: "https://github.com/jorgesoares2997",
  },
];

const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <p>clique no link para conferir algum projeto com essa tecnologia</p>
      <div className="tecnologies-grid">
        {tecnologies.map((tech) => (
          <div className="tecnologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnologies-info">
              <h3>{tech.name}</h3>

              <a href={tech.obs} target="_blank" className="tecnologies-link">
                <RiLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TecnologiesContainer;
