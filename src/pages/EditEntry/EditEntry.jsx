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
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const entries = getEntries();

    const updated = entries.map((item) =>
      item.id === entry.id ? entry : item
    );

    saveEntries(updated);
    navigate("/");
  };

  if (!entry) return <p>Ladataan...</p>;

  return (
    <div className="form-container">
      <h2>Muokkaa kipumerkintää</h2>

      <form onSubmit={handleSave}>
        <input
          type="date"
          name="date"
          value={entry.date}
          onChange={handleChange}
        />

        <input
          type="text"
          name="area"
          placeholder="Kipualue"
          value={entry.area}
          onChange={handleChange}
        />

        <input
          type="number"
          name="level"
          min="0"
          max="10"
          value={entry.level}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Kuvaus"
          value={entry.description}
          onChange={handleChange}
        />

        <button type="submit">Tallenna muutokset</button>
      </form>
    </div>
  );
}

export default EditEntry;