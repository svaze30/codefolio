const Header = () => {
  return (
    <section className="header flex  flex-auto items-center border-b border-slate-950 border-dashed h-16">
      <nav className="navbar flex grow flex-row justify-between border-slate-950">
        <div className=" flex items-center justify-center logo border-0 border-slate-950 m-5 gap-3">
          <img
            className="h-10"
            src={new URL(`/favicon.ico`, import.meta.url).href}
            alt="svaze"
          />
          <h1 className="text-xl font-black">Svaze/スヱズ</h1>
        </div>
        <div className="flex items-center justify-center links border-0 border-slate-950 ">
          <ul className="flex items-center justify-center gap-6 text-lg">
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#home">Home</a>
            </li>
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#skills">Skills</a>
            </li>
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#cp">CP</a>
            </li>
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#projects">Projects</a>
            </li>
            <li className="border-b p-2 border-slate-950 border-dashed">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
