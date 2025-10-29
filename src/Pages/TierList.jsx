import React, { useState } from "react";

const ALL_CHARACTERS = [
  { name: "Furina", url: "https://sunderarmor.com/GENSHIN/Characters/1/Furina.png" },
  { name: "Kazuha", url: "https://sunderarmor.com/GENSHIN/Characters/1/Kazuha.png" },
  { name: "Neuvillette", url: "https://sunderarmor.com/GENSHIN/Characters/1/Neuvillette.png" },
  { name: "Arlecchino", url: "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png" },
  { name: "RaidenShogun", url: "https://sunderarmor.com/GENSHIN/Characters/1/Raiden.png" },
  { name: "Yelan", url: "https://sunderarmor.com/GENSHIN/Characters/1/Yelan.png" },
  { name: "Zhongli", url: "https://sunderarmor.com/GENSHIN/Characters/1/Zhongli.png" },
  { name: "HuTao", url: "https://sunderarmor.com/GENSHIN/Characters/1/Hu%20Tao.png" },
  { name: "Ganyu", url: "https://sunderarmor.com/GENSHIN/Characters/1/Ganyu.png" },
  { name: "Alhaitham", url: "https://sunderarmor.com/GENSHIN/Characters/1/Alhaitham.png" },
  { name: "Wanderer", url: "https://sunderarmor.com/GENSHIN/Characters/1/Wanderer.png" },
  { name: "Chiori", url: "https://sunderarmor.com/GENSHIN/Characters/1/Chiori.png" },
  { name: "Xianyun", url: "https://sunderarmor.com/GENSHIN/Characters/1/Xianyun.png" },
  { name: "Mona", url: "https://sunderarmor.com/GENSHIN/Characters/1/Mona.png" },
  { name: "Diluc", url: "https://sunderarmor.com/GENSHIN/Characters/1/Diluc.png" },
  { name: "Jean", url: "https://sunderarmor.com/GENSHIN/Characters/1/Jean.png" },
  { name: "Venti", url: "https://sunderarmor.com/GENSHIN/Characters/1/Venti.png" },
];


// --- 2ND TIERLIST: INTERACTIVE TIERLIST (KEPT AS IS) ---
function InteractiveTierList() {
  const [tierData, setTierData] = useState({
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
  });

  const [showGallery, setShowGallery] = useState(false);
  const [targetTier, setTargetTier] = useState(null); 

  const tiers = Object.keys(tierData);

  const handleAddClick = (tier) => {
    setTargetTier(tier);
    setShowGallery(true);
  };

  const addCharacterToTier = (characterUrl) => {
    if (targetTier) {
      setTierData((prevData) => ({
        ...prevData,
        [targetTier]: [...prevData[targetTier], characterUrl],
      }));
      setShowGallery(false);
      setTargetTier(null);
    }
  };

  const removeCharacterFromTier = (tier, urlToRemove, indexToRemove) => {
    setTierData((prevData) => ({
      ...prevData,
      [tier]: prevData[tier].filter((url, index) => 
        // We use both the URL and index to ensure only one instance is deleted 
        // if the same character image was added multiple times.
        !(url === urlToRemove && index === indexToRemove)
      ),
    }));
  };

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "auto", 
        padding: "50px 0",
      }}>
      
      <h2>Interactive Tier List (Click "Add" to build)</h2>
      
      {/* Scrollable Gallery Modal/Panel */}
      {showGallery && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}>
          <div style={{
            color: 'white',
            marginBottom: '20px',
            fontSize: '1.5rem'
          }}>
            Add Character to {targetTier} Tier 
            <button 
                onClick={() => setShowGallery(false)} 
                style={{ marginLeft: '20px', padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                X
            </button>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '10px',
            maxWidth: '900px',
            maxHeight: '80%',
            overflowY: 'auto', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          }}>
            {ALL_CHARACTERS.map((char) => (
              <div
                key={char.name}
                onClick={() => addCharacterToTier(char.url)}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '3px solid transparent',
                  transition: 'transform 0.2s',
                }}
              >
                <img
                  src={char.url}
                  alt={char.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Tier List Structure */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier}
              style={{
                display: "flex",
                alignItems: "stretch",
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              {/* Tier Label and Add Button */}
              <div
                style={{
                  width: "120px", 
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  padding: '5px',
                }}
              >
                {tier}
                <button 
                  onClick={() => handleAddClick(tier)}
                  style={{ 
                    marginTop: '5px', 
                    padding: '3px 8px', 
                    fontSize: '0.8rem',
                    backgroundColor: '#1E90FF', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    cursor: 'pointer' 
                  }}
                >
                  Add
                </button>
              </div>

              {/* Tier Images */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "10px",
                  alignItems: "flex-start",
                  minHeight: "100px", 
                }}
              >
                {tierData[tier].length > 0 ? (
                    tierData[tier].map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${tier} tier`}
                        onClick={() => removeCharacterFromTier(tier, img, index)}
                        style={{
                          width: "80px",
                          height: "auto",
                          borderRadius: "10px",
                          objectFit: "cover",
                          backgroundColor: "rgba(255,255,255,0.2)",
                        }}
                      />
                    ))
                ) : (
                    <span style={{ color: 'rgba(255,255,255,0.5)', margin: 'auto' }}>
                        Click "Add" to populate this tier.
                    </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// --- 1ST TIERLIST: STATIC TIERLIST (MODIFIED to accept props) ---
function MetaTierList({ showInteractive, setShowInteractive }) {
  const tierData = {
    S: [
      ALL_CHARACTERS.find(c => c.name === "Furina").url,
      ALL_CHARACTERS.find(c => c.name === "Kazuha").url,
    ],
    A: [
      ALL_CHARACTERS.find(c => c.name === "Arlecchino").url,
    ],
    B: [
      ALL_CHARACTERS.find(c => c.name === "Chiori").url,
    ],
    C: [
      ALL_CHARACTERS.find(c => c.name === "Xianyun").url,
    ],
    D: [
      ALL_CHARACTERS.find(c => c.name === "Diluc").url,
    ],
  };

  const tiers = Object.keys(tierData);

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "auto", 
      }}>
      <h1>Tier List</h1>

      {/* --- BUTTON INSERTED HERE (Using props to control parent state) --- */}
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
        <button 
          onClick={() => setShowInteractive(!showInteractive)}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            backgroundColor: showInteractive ? '#FF6347' : '#32CD32',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}
        >
          {showInteractive ? 'Hide My Tier List' : 'Make Your Own Tier List'}
        </button>
      </div>
      {/* ------------------------------------------------------------- */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier}
              style={{
                display: "flex",
                alignItems: "stretch", // makes children match height
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              {/* Tier Label (auto-stretchs) */}
              <div
                style={{
                  width: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {tier}
              </div>

              {/* Tier Images (expands vertically as needed) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  padding: "10px",
                  alignItems: "flex-start", // let images stack naturally
                }}
              >
                {tierData[tier].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${tier} tier`}
                    style={{
                      width: "80px",
                      height: "auto",
                      borderRadius: "10px",
                      objectFit: "cover",
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// --- MAIN APP COMPONENT (MANAGES STATE AND RENDERING) ---
function TierListApp() {
  const [showInteractive, setShowInteractive] = useState(false);

  return (
    <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
        minHeight: '100vh', 
        padding: '20px', 
        fontFamily: 'sans-serif'
    }}>
      {/* 1. Static TierList Component: Passes state control down */}
      <MetaTierList 
        showInteractive={showInteractive} 
        setShowInteractive={setShowInteractive} 
      />

      <hr style={{ width: '80%', margin: '50px auto', borderColor: '#1a1a2e' }} />

      {/* 2. Conditional Rendering of the Interactive TierList */}
      {showInteractive && <InteractiveTierList />}
    </div>
  );
}

export default TierListApp;