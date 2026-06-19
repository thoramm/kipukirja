import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEntries, saveEntries } from "../../utils/storage";

function Home() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const handleDelete = (id) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(updated);
  };

  return (
    <div>
      <h2>Kipumerkinnät</h2>

      {entries.length === 0 && <p>Ei merkintöjä vielä</p>}

      {entries.map((e) => (
        
        <div key={e.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{e.date}</h3>
          <p>Alue: {e.area}</p>
          <p>Kipu: {e.level}/10</p>
          <p>{e.description}</p>

          <button onClick={() => handleDelete(e.id)}>
            Poista
          </button>
          <button onClick={() => navigate(`/edit/${e.id}`)}>
            Muokkaa
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;