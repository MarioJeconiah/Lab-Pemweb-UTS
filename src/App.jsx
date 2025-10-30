import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Character from "./Pages/Character";
import Weapon from "./Pages/Weapon";
import TierList from "./Pages/TierList";
import "./App.css";

function App() {
const [showLogin, setShowLogin] = useState(false);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState("");
const [nickname, setNickname] = useState("");
const [editIndex, setEditIndex] = useState(null);
const [editText, setEditText] = useState("");

const handleAddComment = () => {
if (nickname.trim() && newComment.trim()) {
setComments([...comments, { nickname, text: newComment }]);
setNewComment("");
}
};

const openEditModal = (index) => {
setEditIndex(index);
setEditText(comments[index].text);
};

const handleSaveEdit = () => {
const updatedComments = [...comments];
updatedComments[editIndex].text = editText;
setComments(updatedComments);
closeEditModal();
};

const closeEditModal = () => {
setEditIndex(null);
setEditText("");
};

const handleDeleteComment = (index) => {
setComments(comments.filter((_, i) => i !== index));
};

return ( <BrowserRouter> 
<div>
     <nav className="navbar"> <ul className="nav-left"> <li> <NavLink to="/" className="nav-itemLeft">HOME </NavLink> </li> </ul>
      <ul className="nav-right">
        <li>
          <NavLink to="/character" className="nav-item">
            CHARACTER
          </NavLink>
        </li>
        <li>
          <NavLink to="/weapon" className="nav-item">
            WEAPON
          </NavLink>
        </li>
        <li>
          <NavLink to="/tierlist" className="nav-item">
            TIER LIST
          </NavLink>
        </li>
        <button className="tierlist-btn" onClick={() => setShowLogin(true)}>
          LOGIN
        </button>
      </ul>
    </nav>

    {/* LOGIN */}
    {showLogin && (
      <div className="login-overlay">
        <div className="login-container">
          <span className="close-login" onClick={() => setShowLogin(false)}>
            ×
          </span>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button className="tierlist-btn">Sign In</button>
        </div>
      </div>
    )}

    {/* EDIT COMMENT */}
    {editIndex !== null && (
      <div className="login-overlay">
        <div className="login-container">
          <span className="close-login" onClick={closeEditModal}>
            ×
          </span>
          <h2>Edit Comment</h2>
          <textarea
            className="login-input"
            rows="4"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="tierlist-btn" onClick={handleSaveEdit}>
            Save Changes
          </button>
        </div>
      </div>
    )}

    {/* ROUTES */}
    <Routes>
      <Route
        path="/"
        element={
          <main className="content-container">
            <div className="content-box" style={{ marginTop: "4rem" }}>
              <img
                src="/GenshinImpactLogo.png"
                alt="Logo"
                className="content-logo"
              />
              <h1>Genshin Impact</h1>
              <p>
                Welcome to the Genshin Impact Wiki — a comprehensive
                fan-made database dedicated to miHoYo's open-world action
                RPG. Set in the breathtaking world of Teyvat, Genshin Impact
                allows players to embark on an epic journey across seven
                nations, each ruled by a different elemental Archon.
              </p>
            </div>

            {/* FORUM SECTION */}
            <section className="content-box forum-section">
              <h2 className="forum-title">Community Discussion</h2>

              <div className="forum-input-area">
                <input
                  type="text"
                  placeholder="Enter your nickname"
                  className="forum-nickname-input"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
                <textarea
                  placeholder="Share your thoughts..."
                  className="forum-textarea"
                  rows="3"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  onClick={handleAddComment}
                  className="tierlist-btn"
                >
                  Post
                </button>
              </div>

              <div className="forum-comments">
                {comments.map((c, index) => (
                  <div key={index} className="comment">
                    <div className="comment-right">
                      <strong className="comment-nickname">
                        {c.nickname}
                      </strong>
                      <p className="comment-meta">Posted just now</p>
                      <p className="comment-text">{c.text}</p>

                      <div className="comment-actions">
                        <button onClick={() => openEditModal(index)}>
                          Edit
                        </button>
                        <button onClick={() => handleDeleteComment(index)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        }
      />

      <Route path="/character" element={<Character />} />
      <Route path="/weapon" element={<Weapon />} />
      <Route path="/tierlist" element={<TierList />} />
    </Routes>

    <footer className="solid-section">
      <p>
        Welcome to the Genshin Impact Wiki Fandom! A fan site where you can
        explore characters, stories, and guides from the Genshin Impact
        game.
      </p>
    </footer>
</div>
</BrowserRouter>


);
}

export default App;
