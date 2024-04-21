const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="about-me h-[500px] border border-slate-950 flex justify-around items-center"
    >
      <div className="my-about border border-slate-950">
        <h2 className="">About Me</h2>
        <p>
          Hello Visitor! I am Swaroop Vaze a Software Developer and an Artist. I{" "}
          <br />
          am a Brutalist Web Designer, a competitve programmer and a visual
          artist.
        </p>

        <p></p>
        <p>
          I am currently pursuing my B.Tech in Computer Engineering from Sardar
          <br />
          Patel Institute of Technology, Mumbai. and my Minors from SPJIMR
        </p>
      </div>
      <div className="about-img h-44 w-44 border border-slate-950">
        <img src="../assets/crumpled-white-paperboard.jpg" alt="engineer" />
      </div>
    </section>
  );
};

export default AboutMe;
