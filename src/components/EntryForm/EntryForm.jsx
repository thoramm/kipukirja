import { useState } from "react";
import { getEntries, saveEntries } from "../../utils/storage";

function EntryForm() {
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [level, setLevel] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      date,
      area,
      level,
      description
    };

    const existing = getEntries();
    saveEntries([...existing, newEntry]);

    setDate("");
    setArea("");
    setLevel(0);
    setDescription("");

    alert("Merkintä lisätty!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lisää kipumerkintä</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Kipualue"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        required
      />

      <input
        type="number"
        min="0"
        max="10"
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
        required
      />

      <textarea
        placeholder="Kuvaus"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Tallenna</button>
    </form>
  );
}

export default EntryForm;