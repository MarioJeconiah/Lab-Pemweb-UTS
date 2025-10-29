import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Character from "./Pages/Character";
import Explore from "./Pages/Explore";
import Weapon from "./Pages/Weapon";
import TierList from "./Pages/TierList";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* NAVBAR */}
        <nav className="navbar">
            <ul className="nav-left">
              <li><NavLink to="/">HOME</NavLink></li>
            </ul>

            <ul className="nav-right">
              <li><NavLink to="/explore" className= "nav-item" >EXPLORE</NavLink></li>
              <li><NavLink to="/character" className= "nav-item">CHARACTER</NavLink></li>
              <li><NavLink to="/weapon" className= "nav-item">WEAPON</NavLink></li>
              <li><NavLink to="/tierlist" className= "nav-item">TIER LIST</NavLink></li>
            </ul>
          </nav>

        <Routes>
          {/* HOME PAGE CONTENT */}
          <Route path="/" element={
            <>
              <main className="content-container">
                <div className="content-box">
                  <img src="/GenshinImpactLogo.png" alt="Logo" className="content-logo" />
                  <h1>Genshin Impact</h1>
                  <p>Welcome to the Genshin Impact Wiki — a comprehensive fan-made database dedicated to miHoYo's open-world action RPG. Set in the breathtaking world of Teyvat, Genshin Impact allows players to embark on an epic journey across seven nations, each ruled by a different elemental Archon. Here you can explore in-depth information about every character, including their abilities, constellations, weapons, and artifacts. Learn about powerful elemental reactions, uncover hidden lore, and keep up with the latest game updates, events, and new regions. Our mission is to provide players and fans with accurate, organized, and easy-to-access information to enhance their Genshin Impact experience. Whether you’re a new Traveler just starting your adventure or a veteran looking for optimization tips, this wiki serves as your ultimate guide to everything in Teyvat.
                  </p>
                </div>
              </main>
            </>
          }/>
          {/* OTHER PAGES */}
          <Route path="/explore" element={<Explore />} />
          <Route path="/character" element={<Character />} />
          <Route path="/weapon" element={<Weapon />} />
          <Route path="/tierlist" element={<TierList />} />
        </Routes>

         <footer className="solid-section">
                <p>
                  Welcome to the Genshin Impact Wiki Fandom! A fan site where you can explore characters, stories, and guides from the Genshin Impact game.
                </p>
          </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
