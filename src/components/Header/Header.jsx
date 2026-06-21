import { FaHeartbeat } from "react-icons/fa";

function Header() {
  return (
    <header className="app-header">
      <FaHeartbeat size={26} color="white" />
      <h1>Kipupäiväkirja</h1>
    </header>
  );
}

export default Header;