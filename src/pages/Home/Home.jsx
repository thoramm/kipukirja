import { useEffect, useState } from "react";
import { getEntries } from "../../utils/storage";

function Home() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  return (
    <div>
      <h2>Kipumerkinnät</h2>

      {entries.length === 0 && <p>Ei merkintöjä vielä</p>}

      {entries.map((e) => (
        <div key={e.id}>
          <h3>{e.date}</h3>
          <p>Alue: {e.area}</p>
          <p>Kipu: {e.level}/10</p>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;