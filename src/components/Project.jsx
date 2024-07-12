import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
function Project() {
  const boxObject = [
    {
      id: 1,
      name: "bio Express",
      descreption:
        "Bio Express is an e-commerce website specializing in selling organic products, utilizing Next.js for both the front-end and back-end development. ",
      tool: "Next.js,Tailwind CSS,zustand,Supabase",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
    },
    {
      id: 2,
      name: "univ app",
      descreption:
        "An application for the Faculty of Computer Science at Hassiba Ben Bouali University, developed using Next.js. ",
      tool: "Next.js,tailwind css ,preline",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
    },
    {
      id: 3,
      name: "Bookling",
      descreption:
        "An application that simplifies the process for bookworkers to rent books, add new books, and perform CRUD (Create, Read, Update, Delete) operations. ",
      tool: "Next.js,tailwind css,Supabase",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
    },
    {
      id: 4,
      name: "Wefit",
      descreption:
        "An application that simplifies workouts for users by providing exercises targeting specific muscle groups with a simple click, and offering comprehensive gym-related assistance. ",
      tool: "Next.js,css",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
    },
    {
      id: 5,
      name: "picVibe",
      descreption:
        " An image gallery application where users can create profiles, upload their images, and curate their own personal galleries. ",
      tool: "Next.js,tailwind css,shadcn/ui,Supabase",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
    },
  ];
  return (
    <div className="mt-24">
      <h1 className="font-semibold text-3xl"> / pet projectes</h1>
      <Slider />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-9">
        {boxObject.map((card, index) => (
          <div key={index} className="bg-bgSecondary p-6  rounded-xl">
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faFolder} className="text-primary" />
              <FontAwesomeIcon icon={faGithub} className="w-6 h-4 " />
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <h1 className="font-bold text-xl">{card.name}</h1>
              <p className="font-semibold text-sm text-[#cccccc]">{card.descreption}</p>
              <p className="font-medium text-sm text-[#cccccc]">{card.tool}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
