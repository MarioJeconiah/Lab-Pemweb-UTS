import React from "react";

function TierList() {
  const tierData = {
    S: [
      "https://sunderarmor.com/GENSHIN/Characters/1/Furina.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Kazuha.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Neuvillette.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Mavuika.png",
    ],
    A: [
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",
      "https://sunderarmor.com/GENSHIN/Characters/1/Arlecchino.png",

    ],
    B: [],
    C: [],
    D: [],
  };

  const tiers = Object.keys(tierData);

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // layar penuh
      }}>
      <h1>Tier List</h1>
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

export default TierList;
