const Skills = () => {
  return (
    <section
      id="skills"
      className="skills flex flex-col border-b border-slate-950 h-[400px] border-dashed"
    >
      <h2 className="w-full m-10 text-4xl mx-36">Skills</h2>
      <div className="show-case flex justify-around mt-10 ">
        <img className="h-32 w-32" src="src\assets\react.svg" alt="react" />
        <img className="h-32 w-32" src="src\assets\c.svg" alt="c" />
        <img className="h-32 w-32" src="src\assets\next.svg" alt="next" />
        <img className="h-32 w-32" src="src\assets\cpp.svg" alt="cpp" />
        <img className="h-32 w-32" src="src\assets\mongo.svg" alt="mongo" />
        <img className="h-32 w-32" src="src\assets\mysql.svg" alt="mysql" />
        <img className="h-32 w-32" src="src\assets\java.svg" alt="java" />
        <img className="h-32 w-32" src="src\assets\python.svg" alt="python" />
      </div>
    </section>
  );
};

export default Skills;
