(function() {
    // Styles für Menü und Buttons
    const style = document.createElement("style");
    style.textContent = `
        #myMenuButton {
            position: fixed;
            top: 10px;
            left: 10px;
            background: black;
            color: white;
            border: none;
            padding: 8px 12px;
            font-size: 14px;
            cursor: pointer;
            z-index: 10000;
            border-radius: 6px;
        }

        #myMenu {
            position: fixed;
            top: 50px;
            left: 10px;
            background: black;
            color: white;
            padding: 12px;
            border-radius: 8px;
            display: none;
            z-index: 10000;
            font-family: sans-serif;
        }

        #myMenu h3 {
            margin: 0 0 8px 0;
            font-size: 16px;
        }

        #myMenu button {
            background: #222;
            color: white;
            border: none;
            padding: 6px 10px;
            margin-top: 6px;
            font-size: 13px;
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Menü-Knopf oben links
    const menuButton = document.createElement("button");
    menuButton.id = "myMenuButton";
    menuButton.textContent = "⚙️ Menü";
    document.body.appendChild(menuButton);

    // Menü-Fenster mit 2 Buttons
    const menu = document.createElement("div");
    menu.id = "myMenu";
    menu.innerHTML = `
        <h3>Cookie Tools</h3>
        <button id="autoClickerToggle">AutoClicker: AUS</button>
        <button id="textureToggle">Textur: AUS</button>
    `;
    document.body.appendChild(menu);

    // Menü anzeigen/verbergen
    menuButton.onclick = () => {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    };

    // === AutoClicker-Funktion ===
    let autoClicker = null;
    let autoRunning = false;
    const autoBtn = document.getElementById("autoClickerToggle");

    autoBtn.onclick = () => {
        if (!autoRunning) {
            autoClicker = setInterval(() => Game.ClickCookie(), 10);
            autoRunning = true;
            autoBtn.textContent = "AutoClicker: EIN";
        } else {
            clearInterval(autoClicker);
            autoRunning = false;
            autoBtn.textContent = "AutoClicker: AUS";
        }
    };

    // === Textur-Toggle-Funktion ===
    let textureOn = false;
    const textureBtn = document.getElementById("textureToggle");
    const customTexture = "https://i.imgur.com/Bn4x2Ba.png"; // z.B. Pizza

    textureBtn.onclick = () => {
        textureOn = !textureOn;
        const cookie = document.getElementById("bigCookie");
        if (textureOn) {
            cookie.style.backgroundImage = `url("${customTexture}")`;
            cookie.style.backgroundSize = "cover";
            cookie.style.backgroundPosition = "center";
            textureBtn.textContent = "Textur: EIN";
        } else {
            cookie.style.backgroundImage = "";
            cookie.style.backgroundSize = "";
            cookie.style.backgroundPosition = "";
            textureBtn.textContent = "Textur: AUS";
        }
    };
})();
