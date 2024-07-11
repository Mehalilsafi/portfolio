
function Hero() {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-semibold text-slate-50">
          hi,<span className="!text-primary">safi</span> here.
        </h1>
        <h1 className="text-2xl font-semibold text-slate-50 ">
          i create stuff somtimes{" "}
        </h1>
        <p className="font-normal text-xs">
          {" "}
          I'm a passionate full-stack developer with expertise in Next.js and
          Supabase. I thrive on creating responsive, high-performance websites
          that provide seamless user experiences. Let's build something amazing
          together!{" "}
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="font-bold border border-primary border-solid rounded-lg p-3 hover:bg-bgSecondary">CONTACT ME</button>
      </div>
    </div>
  );
}

export default Hero;
