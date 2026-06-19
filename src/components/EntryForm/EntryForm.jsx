import { useState } from "react";
import { getEntries, saveEntries } from "../../utils/storage";

function EntryForm() {
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [level, setLevel] = useState(0);
  const [description, setDescription] = useState("");

  // 🧾 uusi: viestitila (toast)
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: Date.now(),
      date,
      area,
      level,
      description,
    };

    const existing = getEntries();
    saveEntries([...existing, newEntry]);

    setDate("");
    setArea("");
    setLevel(0);
    setDescription("");

    // ⚡ UX parannus: alert → toast
    setMessage("Merkintä lisätty!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Lisää kipumerkintä</h2>

      {/* 🧾 toast-ilmoitus */}
      {message && <p className="toast">{message}</p>}

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