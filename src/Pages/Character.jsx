function Character() {
  const characters = [
    {
      name: "Furina",
      element: "Hydro",
      elementIcon: "https://sunderarmor.com/GENSHIN/Elements/Element_Hydro.png",
      weapon: "Sword",
      role: "Support",
      image: "https://sunderarmor.com/GENSHIN/Characters/1/Furina.png",
      description: `The Hydro Archon of Fontaine, also known as Focalors, who performs the role of the nation's judge. 
      Furina uses her dual Arkhe abilities to control Hydro constructs and support her allies from the backline. 
      She embodies the concept of balance between justice and compassion, her elemental skill allowing her to swap between Arkhe Ousia and Arkhe Pneuma modes, 
      making her one of the most adaptable support characters in Genshin Impact.`,
    },
    {
      name: "Kazuha",
      element: "Anemo",
      elementIcon: "https://sunderarmor.com/GENSHIN/Elements/Element_Anemo.png",
      weapon: "Sword",
      role: "Support",
      image: "https://sunderarmor.com/GENSHIN/Characters/1/Kazuha.png",
      description: `Kaedehara Kazuha is a wandering samurai from Inazuma, known for his calm nature and poetic spirit. 
      As an Anemo sword user, he can manipulate the wind to launch enemies and spread elemental reactions with ease. 
      His Elemental Skill and Burst make him one of the most flexible supports in the game, providing crowd control and elemental damage boosts.`,
    },
    {
      name: "Raiden Shogun",
      element: "Electro",
      elementIcon: "https://sunderarmor.com/GENSHIN/Elements/Element_Electro.png",
      weapon: "Polearm",
      role: "Main DPS",
      image: "https://sunderarmor.com/GENSHIN/Characters/1/Raiden.png",
      description: `The Electro Archon who governs Inazuma under the name of the Almighty Narukami Ogosho. 
      Raiden Shogun wields her polearm with unmatched precision, channeling Electro energy into devastating attacks. 
      Her Elemental Burst is among the strongest in the game, restoring Energy to her allies while dealing massive AoE Electro DMG.`,
    },
  ];

  return (
    <main className="content-container">
      <div className="content-box" style={{ marginTop: "6rem" }}>
        <h1>Genshin Impact Characters</h1>
        <p>
          Each character in <strong>Genshin Impact</strong> brings their own story,
          abilities, and elemental powers that shape your adventures in Teyvat.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            marginTop: "2rem",
          }}
        >
          {characters.map((c) => (
            <div
              key={c.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                borderRadius: "16px",
                padding: "1.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src={c.image}
                alt={c.name}
                style={{
                  width: "380px",
                  height: "auto",
                  borderRadius: "12px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />

              <div style={{ color: "white", maxWidth: "600px" }}>
                <h2 style={{ marginBottom: "0.5rem", fontSize: "1.8rem" }}>
                  {c.name}
                </h2>

                {/* Tag bar */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                    marginLeft: "1.2rem",
                  }}
                >
                  {/* Element tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#25274D",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      minWidth: "100px",
                      height: "40px",
                    }}
                  >
                    <img
                      src={c.elementIcon}
                      alt={c.element}
                      style={{
                        width: "28px",
                        height: "28px",
                        objectFit: "contain",
                        marginTop: "12px",
                      }}
                    />
                  </div>

                  {/* Weapon tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#25274D",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      textAlign: "center",
                      minWidth: "100px",
                      height: "40px",
                    }}
                  >
                    {c.weapon}
                  </div>

                  {/* Role tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#25274D",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "8px",
                      textAlign: "center",
                      minWidth: "100px",
                      height: "40px",
                    }}
                  >
                    {c.role}
                  </div>
                </div>

                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Character;
