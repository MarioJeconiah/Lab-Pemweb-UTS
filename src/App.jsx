import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-left">
            <li><a href="index.html">HOME</a></li>
          </ul>
        </div>
        <div className="navbar-center">
          <form className="search-form">
            <input type="text" placeholder="..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <ul className="nav-links">
          <li><a href="Explore.html">EXPLORE</a></li>
          <li><a href="Character.html">CHARACTER</a></li>
          <li><a href="Memory.html">WEAPON</a></li>
          <li><a href="Tier_List.html">TIER LIST</a></li>
        </ul>
      </nav>

      <main className="content-container">
        <div className="content-box">
          <img src="/GenshinImpactLogo.png" alt="Logo" className="content-logo" />
          <h1>Genshin Impact</h1>
          <p>
          Welcome to the Genshin Impact Wiki — a comprehensive fan-made database dedicated to miHoYo's open-world action RPG. Set in the breathtaking world of Teyvat, Genshin Impact allows players to embark on an epic journey across seven nations, each ruled by a different elemental Archon.

Here you can explore in-depth information about every character, including their abilities, constellations, weapons, and artifacts. Learn about powerful elemental reactions, uncover hidden lore, and keep up with the latest game updates, events, and new regions.

Our mission is to provide players and fans with accurate, organized, and easy-to-access information to enhance their Genshin Impact experience. Whether you’re a new Traveler just starting your adventure or a veteran looking for optimization tips, this wiki serves as your ultimate guide to everything in Teyvat.
          </p>
        </div>
      </main>

      <section className="solid-section">
        <p>
          Welcome to the Genshin Impact Wiki Fandom! A fan site where you can explore characters, stories, and guides from the Genshin Impact game.
        </p>
      </section>
    </div>
  );
}

export default App;