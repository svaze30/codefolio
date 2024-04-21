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
    <section id="cp" className="cp flex border border-slate-950">
      <h2>Competive Programming</h2>
      <br />
      <p>{name} bruh</p>
      <br />
      <p>{rating} bruh</p>
      <br />
      <p>{maxRating} bruh</p>
      <br />
      <p>{rank} bruh</p>
      <br />
      <p>{maxRank} bruh</p>
      <br />
      <img src={image} alt="user" />
    </section>
  );
};

export default CP;
