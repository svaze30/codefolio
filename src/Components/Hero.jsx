const Hero = () => {
  return (
    <section
      id="home"
      className="hero flex flex-row items-center h-[600px] justify-center border-b border-slate-950 border-dashed gap-20"
    >
      <div className="img-1 h-80 w-80 border-0 border-slate-950">
        <img
          src={new URL(`/dots.png`, import.meta.url).href}
          alt=""
          className="animate-pulse"
        />
      </div>
      <div className="name-holder border-0 border-slate-950">
        <h2 className="text-xl border-0 border-slate-950 w-full flex items-center justify-center text-center">
          Hi, I&apos;m
        </h2>
        <h1 className=" w-full text-8xl font-black flex justify-center items-center text-center transition ease-in-out delay-150  hover:scale-110">
          Swaroop
          <br />
          Vaze
        </h1>
        <h2 className=" text-xl border-0 border-slate-950 w-full flex items-center justify-center text-center">
          Engineer/Artist
        </h2>
      </div>
      <div className="img-1 h-80 w-80 border-0 border-slate-950 ">
        <img
          src={new URL(`/dots.png`, import.meta.url).href}
          alt=""
          className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default Hero;
