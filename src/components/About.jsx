import safi from "../assets/safi.svg";

function About() {
  return (
    <div>
      <h1 className="font-semibold text-3xl">/ about me</h1>
      <div className="grid grid-cols-4 gap-5 mt-9">
        <div className="flex flex-col gap-5 col-span-4  md:col-span-2 lg:col-span-3">
          <p className="text-base  font-semibold">
            I am currently a{" "}
            <span className="!text-primary font-bold !text-lg">freelancer</span>
            . At the same time, I am undertaking a part-time master of Science
            in Software Engineering at University of{" "}
            <span className="!text-primary font-bold !text-lg">
              {" "}
              Hassiba Ben Bouali{" "}
            </span>
          </p>
          <p className="text-base  font-semibold">
            Here are some technologies I have been working with:
          </p>
          <ul className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>Tailwind CSS</li>
            </div>
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>shadcn/ui</li>
            </div>
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>React.js</li>
            </div>
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>JavaScript ES6+</li>
            </div>
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>Next.js</li>
            </div>
            <div className="flex items-center gap-2">
              <li className="text-xl font-black text-primary">.</li>
              <li>Supabase</li>
            </div>
          </ul>
          <p className="text-base  font-semibold">
            outside of the work ,I'm interested in following the developments of
            science. I also go to the gym a lot . And make content .
          </p>
        </div>
        <div className=" md:col-span-2 lg:col-span-1  flex justify-center ">
          <img
            src={safi}
            alt="safi"
            className="border border-transparent border-solid h-[300px] w-[300px] rounded-xl shadow-custom bg-bgSecondary hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
