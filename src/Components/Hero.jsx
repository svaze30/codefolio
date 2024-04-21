const Hero = () => {
  return (
    <section
      id="home"
      className="hero flex flex-row items-center h-[700px] justify-center border border-slate-950"
    >
      <div className="img-1 h-44 w-44 border border-slate-950">
        <img src="../assets/crumpled-white-paperboard.jpg" alt="engineer" />
      </div>
      <div className="name-holder border border-slate-950">
        <h2>Hi, I&apos;m</h2>
        <h1>Swaroop Vaze</h1>
        <h2>Engineer/Artist</h2>
      </div>
      <div className="img-1 h-44 w-44 border border-slate-950 "></div>
    </section>
  );
};

export default Hero;
