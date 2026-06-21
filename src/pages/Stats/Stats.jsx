import { useEffect, useState } from "react";
import { getEntries } from "../../utils/storage";

function Stats() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const total = entries.length;

  const average =
    total > 0
      ? (
          entries.reduce((sum, e) => sum + Number(e.level), 0) / total
        ).toFixed(1)
      : 0;

  const max =
    total > 0 ? Math.max(...entries.map((e) => Number(e.level))) : 0;

  const min =
    total > 0 ? Math.min(...entries.map((e) => Number(e.level))) : 0;

  const getColor = (level) => {
    if (level <= 3) return "#2ecc71";
    if (level <= 6) return "#f1c40f";
    return "#e74c3c";
  };

  return (
    <div>
      <h2>Kiputilastot</h2>

      {total === 0 ? (
        <p>Ei vielä merkintöjä analysoitavaksi.</p>
      ) : (
        <>

          <div className="stats">
            <p><strong>Merkintöjä:</strong> {total}</p>
            <p><strong>Keskimääräinen kipu:</strong> {average}/10</p>
            <p><strong>Korkein kipu:</strong> {max}/10</p>
            <p><strong>Alhaisin kipu:</strong> {min}/10</p>
          </div>

          <h3>Kiputaso merkinnöittäin</h3>

          <div className="chart">
            {entries.map((e) => (
              <div key={e.id} className="bar-row">
                <span className="bar-label">
                  {e.date} ({e.area})
                </span>

                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${e.level * 10}%`,
                      background: getColor(e.level),
                    }}
                  />
                </div>

                <span className="bar-value">{e.level}/10</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Stats;