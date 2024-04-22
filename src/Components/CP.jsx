import { useState, useEffect } from "react";

const CP = () => {
  const [name, setName] = useState("svaze");
  const [rating, setRating] = useState(0);
  const [maxRating, setMaxRating] = useState(0);
  const [rank, setRank] = useState("Newbie");
  const [maxRank, setMaxRank] = useState("Newbie");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function getData() {
      let URL = `https://codeforces.com/api/user.info?handles=svaze&checkHistoricHandles=false`;
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setName(data.result[0].handle);
      setMaxRating(data.result[0].maxRating);
      setRating(data.result[0].rating);
      setMaxRank(data.result[0].maxRank);
      setRank(data.result[0].rank);
      setImage(data.result[0].titlePhoto);
    }
    getData();
  }, [name]);

  return (
    <section
      id="cp"
      className="cp flex flex-col border-b border-slate-950 border-dashed pb-20"
    >
      <h2 className="w-full m-10 text-4xl mx-36">Competive Programming</h2>
      <div className="flex flex-row justify-around items-center">
        <div className="info">
          <br />
          <p>My Handle - {name} </p>
          <br />
          <p>My Rating - {rating}</p>
          <br />
          <p>My Max Rating - {maxRating}</p>
          <br />
          <p>My Rank - {rank}</p>
          <br />
          <p>My Max Rank - {maxRank}</p>
          <br />
        </div>
        <img
          className="rounded-3xl transition ease-in-out delay-150  hover:scale-110"
          src={image}
          alt="user"
        />
      </div>
    </section>
  );
};

export default CP;
