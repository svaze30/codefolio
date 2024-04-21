const Contact = () => {
  return (
    <section
      id="contact"
      className="contact h-[500px] border border-slate-950 flex items-center justify-center"
    >
      <div className="img1 h-44 w-44 border border-slate-950"></div>
      <div className="all-contact flex flex-col items-center justify-center border border-slate-950">
        <h2 className="flex justify-center w-full border border-slate-950">
          Wanna Talk
        </h2>
        <h2 className=" flex justify-center w-full border border-slate-950">
          9765029767
        </h2>
        <p className="flex justify-center w-full border border-slate-950">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Sit nulla iusto molestiae.
        </p>
        <p className="flex justify-center w-full border border-slate-950">
          Lorem ipsum dolor sit amet consectetur,
          <br /> adipisicing elit. Sit nulla iusto molestiae.
        </p>
        <div className="flex w-full justify-around">
          <button className="border border-slate-950">Email Me</button>
          <button className="border border-slate-950">Resume</button>
        </div>
      </div>
      <div className="img2 h-44 w-44 border border-slate-950"></div>
    </section>
  );
};

export default Contact;
