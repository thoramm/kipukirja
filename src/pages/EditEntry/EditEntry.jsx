import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEntries, saveEntries } from "../../utils/storage";

function EditEntry() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const entries = getEntries();
    const found = entries.find((e) => e.id === Number(id));
    setEntry(found);
  }, [id]);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const entries = getEntries();

    const updated = entries.map((e) =>
      e.id === entry.id ? entry : e
    );

    saveEntries(updated);
    navigate("/");
  };

  if (!entry) return <p>Ladataan...</p>;

  return (
    <div>
      <h2>Muokkaa merkintää</h2>

      <input
        name="date"
        value={entry.date}
        onChange={handleChange}
      />

      <input
        name="area"
        value={entry.area}
        onChange={handleChange}
      />

      <input
        name="level"
        type="number"
        value={entry.level}
        onChange={handleChange}
      />

      <textarea
        name="description"
        value={entry.description}
        onChange={handleChange}
      />

      <button onClick={handleSave}>
        Tallenna muutokset
      </button>
    </div>
  );
}

export default EditEntry;