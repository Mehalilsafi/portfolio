import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-semibold text-slate-50">
          hi,<span className="!text-primary">safi</span> here.
        </h1>
        <h1 className="text-2xl font-semibold text-[#cccccc] ">
          i create stuff somtimes{" "}
        </h1>
        <p className="font-normal text-base text-[#cccccc]">
          {" "}
          I{'\''}m a passionate full-stack developer with expertise in Next.js and
          Supabase. I thrive on creating responsive, high-performance websites
          that provide seamless user experiences. Let{'\''}s build something amazing
          together!{" "}
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <div className="mt-6 flex justify-center items-center gap-3 border border-primary border-solid rounded-lg p-3 hover:bg-bgSecondary w-[150px] h-[60px]">
          <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
          <a href="mailto:safiou102003@gmail.com">
            {" "}
            <button className="font-bold">Say hi!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
