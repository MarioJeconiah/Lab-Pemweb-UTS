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
            <input type="text" placeholder="Cari..." className="search-input" />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <ul className="nav-links">
          <li><a href="Explore.html">EXPLORE</a></li>
          <li><a href="Character.html">CHARACTER</a></li>
          <li><a href="Memory.html">MEMORY</a></li>
          <li><a href="Tier_List.html">TIER LIST</a></li>
        </ul>
      </nav>

      <main className="content-container">
        <div className="content-box">
          <img src="/LOGO JJK.webp" alt="Logo" className="content-logo" />
          <h1>Jujutsu Kaisen: Phantom Parade</h1>
          <p>
            Jujutsu Kaisen: Phantom Parade is a mobile RPG adaptation of the popular anime and manga Jujutsu Kaisen. Developed by Sumzap and licensed by Shueisha, the game allows players to experience the original story while exploring new missions and characters exclusive to the game. It features turn-based battles enhanced with cinematic animations that recreate iconic techniques like Gojo’s Limitless and Itadori’s Black Flash. Players can build a team of jujutsu sorcerers and curses, strengthen their skills, and relive key events from the series in stunning detail. With its combination of high-quality visuals, voice acting, and emotional storytelling, Phantom Parade brings the dark, action-filled world of Jujutsu Kaisen to life in an interactive way.
          </p>
        </div>
      </main>

      <section className="solid-section">
        <p>
          Welcome to the Jujutsu Kaisen: Phantom Parade Wiki! A fan site where you can explore characters, stories, and guides from the Phantom Parade game.
        </p>
      </section>
    </div>
  );
}

export default App;