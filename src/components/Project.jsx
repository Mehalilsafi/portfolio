import Slider from "./Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder, faLink } from "@fortawesome/free-solid-svg-icons";

function Project() {
  const boxObject = [
    {
      id: 1,
      name: "Hanouti",
      descreption:
        "full Stack Application that builds landing pages like Shopify does and provides full analytics helping e-commerce and business owners",
      tool: "React.js, Typescript, Tailwind CSS, shadcn, React Router,Express.js Postgresql",
      icon: [
        {
          github: faGithub,
          deploy: {
            deployIcon: faLink,
            deployLink: "https://hanouti-v2-6h48.vercel.app/",
          },
        },
      ],
      link: "https://github.com/Mehalilsafi/Hanouti-V2",
    },
    {
      id: 2,
      name: "bio Express",
      descreption:
        "Bio Express is an e-commerce website specializing in selling organic products, utilizing Next.js for both front-end and back-end development.",
      tool: "Next.js, Tailwind CSS, zustand, Supabase",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
      link: "https://github.com/Mehalilsafi/bioExpress",
    },
    {
      id: 3,
      name: "univ app",
      descreption:
        "An application for the Faculty of Computer Science at Hassiba Ben Bouali University, developed using Next.js.",
      tool: "Next.js, Tailwind CSS, Preline",
      icon: [
        {
          github: faGithub,
          deploy: faLink,
        },
      ],
      link: "https://github.com/messabih-khalil/uhbc-project",
    },
    {
      id: 4,
      name: "Smart Parking System",
      descreption:
        "A full stack application that lets users know available parking slots in real time using socket.io.",
      tool: "React.js, Express.js, MongoDb, Socket.io",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
      link: "https://github.com/Mehalilsafi/smartParkingSystem",
    },
    {
      id: 5,
      name: "Wefit",
      descreption:
        "An application that simplifies workouts by providing exercises targeting specific muscle groups and offering gym assistance.",
      tool: "Next.js, CSS",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
      link: "https://github.com/Mehalilsafi/WefitApp",
    },
    {
      id: 6,
      name: "picVibe",
      descreption:
        "An image gallery application where users can create profiles, upload images, and manage their own galleries.",
      tool: "Next.js, Tailwind CSS, shadcn/ui, Supabase",
      icon: [
        {
          github: faGithub,
          deploy: "",
        },
      ],
      link: "https://github.com/Mehalilsafi/PicVibe",
    },
  ];

  return (
    <div className="mt-24">
      <div className="flex gap-5 items-center">
        <h1 className="font-semibold text-3xl">/ pet projects</h1>
        <div className="bg-bgSecondary h-[2px] md:w-[500px]"></div>
      </div>

      <Slider />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-9">
        {boxObject.map((card, index) => (
          <div
            key={index}
            className="bg-bgSecondary p-6 rounded-xl shadow-custom transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-black/70"
          >
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faFolder} className="text-primary" />

              <div className="flex gap-3 items-center">

                {/* GitHub */}
                <a href={card.link} target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-4" />
                </a>

                {/* Deploy link (only if exists) */}
                {card.icon[0].deploy &&
                  card.icon[0].deploy.deployLink && (
                    <a
                      href={card.icon[0].deploy.deployLink}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={card.icon[0].deploy.deployIcon}
                        className="w-6 h-4"
                      />
                    </a>
                  )}
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <h1 className="font-bold text-xl">{card.name}</h1>
              <p className="font-semibold text-sm text-[#cccccc]">
                {card.descreption}
              </p>
              <p className="font-medium text-sm text-[#cccccc]">
                {card.tool}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mt-28">
        <p className="font-light text-sm text-[#cccccc]">
          Built and designed by safi mehalil.
        </p>
        <p className="font-light text-sm text-[#cccccc]">all rights reserved.</p>
      </div>
    </div>
  );
}

export default Project;
