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

  // 🎨 Kiputason värifunktio
  const getPainColor = (level) => {
    if (level <= 3) return "#2ecc71"; // vihreä
    if (level <= 6) return "#f1c40f"; // keltainen
    return "#e74c3c"; // punainen
  };

  return (
    <div>
      <h2>Kipumerkinnät</h2>

      {entries.length === 0 && <p>Ei merkintöjä vielä</p>}

      {entries.map((e) => (
        <div key={e.id} className="entry-card">
          <h3>{e.date}</h3>

          <p>
            <strong>Alue:</strong> {e.area}
          </p>

          <p>
            <strong>Kipu:</strong>{" "}
            <span
              style={{
                color: getPainColor(e.level),
                fontWeight: "bold",
              }}
            >
              {e.level}/10
            </span>
          </p>

          <p>{e.description}</p>

          <div className="card-actions">
            <button onClick={() => navigate(`/edit/${e.id}`)}>
              Muokkaa
            </button>

            <button onClick={() => handleDelete(e.id)}>
              Poista
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;