import Apod from "../assets/apod.png";
import Stamphub from "../assets/stamphub.png";
import Archpoint from "../assets/archpoint.png";
import Wildoasis from "../assets/wildoasis.png";

const projects = [
  {
    id: 1,
    name: "www.stamphub.ge",
    technologies: "MERN Stack",
    image: Stamphub,
    link: { website: "https://stamphub.ge", name: "WebSite" },
  },
  {
    id: 2,
    name: "www.archpoint.ge",
    technologies: "MERN Stack",
    image: Archpoint,
    link: { website: "https://archpoint.ge", name: "WebSite" },
  },
  {
    id: 3,
    name: "Wild Oasis Website",
    technologies: "MERN Stack",
    image: Wildoasis,
    link: {
      website: "https://github.com/Davyjones713/wild-oasis-website",
      name: "GitHub",
    },
  },
  {
    id: 4,
    name: "Apod",
    technologies: "MERN Stack",
    image: Apod,
    link: { website: "https://github.com/Davyjones713/Apod", name: "GitHub" },
  },
];

console.log(projects.map((project) => project.image));

export default function Projects() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-3 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-1xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.link.website}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blan"
                rel="noopener noreferrer"
              >
                {project.link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
