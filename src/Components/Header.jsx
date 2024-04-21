const Header = () => {
  return (
    <section className="header flex border flex-auto items-center border-slate-950 h-16">
      <nav className="navbar flex grow flex-row justify-between border-slate-950">
        <div className="logo border border-slate-950 m-5">
          <h1>My Portfolio</h1>
        </div>
        <div className="links border border-slate-950 m-5 ">
          <ul className="flex gap-10 ">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#cp">CP</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
