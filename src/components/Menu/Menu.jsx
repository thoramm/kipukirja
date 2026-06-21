import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Etusivu</Link>
        </li>
        <li>
          <Link to="/add">Lisää merkintä</Link>
        </li>
        <li>
          <Link to="/stats">Tilastot</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;