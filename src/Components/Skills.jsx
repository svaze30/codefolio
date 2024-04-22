const Skills = () => {
  return (
    <section
      id="skills"
      className="skills flex flex-col border-b border-slate-950 h-[400px] border-dashed"
    >
      <h2 className="w-full m-10 text-4xl mx-36">Skills</h2>
      <div className="show-case flex justify-around mt-10 ">
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/react.svg`, import.meta.url).href}
          alt="react"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/c.svg`, import.meta.url).href}
          alt="c"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/next.svg`, import.meta.url).href}
          alt="next"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/cpp.svg`, import.meta.url).href}
          alt="cpp"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/mongo.svg`, import.meta.url).href}
          alt="mongo"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/mysql.svg`, import.meta.url).href}
          alt="mysql"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/java.svg`, import.meta.url).href}
          alt="java"
        />
        <img
          className="h-32 w-32 transition ease-in-out delay-150  hover:scale-110 animate-bounce"
          src={new URL(`/python.svg`, import.meta.url).href}
          alt="python"
        />
      </div>
    </section>
  );
};

export default Skills;
