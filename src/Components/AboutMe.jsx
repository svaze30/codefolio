const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="about-me h-[500px] border-b border-slate-950 flex justify-around items-center border-dashed"
    >
      <div className="my-about border-0 border-slate-950">
        <h2 className="text-4xl">About Me</h2>
        <br />
        <p className="text-lg">
          Hello Visitor! I am Swaroop Vaze a Software Developer and an Artist. I{" "}
          <br />
          am a Brutalist Web Designer, a competitve programmer and a visual
          artist.
        </p>

        <br />
        <p className="text-lg">
          An avid coder with a passion for problem-solving, I find joy in the{" "}
          <br />
          challenges and rewards that programming offers. My interest in coding{" "}
          <br />
          stems from my curiosity about how things work and my desire to create.
        </p>
        <br />
        <p className="text-lg">
          I am currently pursuing my B.Tech in Computer Engineering from Sardar
          <br />
          Patel Institute of Technology, Mumbai and my Minors from SPJIMR
        </p>
        <br />
      </div>
      <div className="img-1 h-60 w-60 border-0 border-slate-950">
        <img
          src={new URL(`/dots.png`, import.meta.url).href}
          alt=""
          className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default AboutMe;
