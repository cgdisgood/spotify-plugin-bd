//META{"name":"spotify premium"}*//

class Example {
    // Constructor
    constructor() {
        this.initialized = false;
    }

    // Meta
    getName() { return "spotify premium"; }
    getShortName() { return "spotify"; }
    getDescription() { return "cool plugin"; }
    getVersion() { return "1.0.0"; }
    getAuthor() { return "cgd#0002"; }

    // Settings  Panel
    getSettingsPanel() {
        return "<p>hi</p>";
    }
    
    // Load/Unload
    load() {
        var findModule = (item) => Object.values(webpackJsonp.push([[], { ['']: (_, e, r) => { e.cache = r.c } }, [['']]]).cache).find(m => m.exports && m.exports.default && m.exports.default[item] !== void 0).exports.default;
        setInterval(() => {
            if (findModule("getActiveSocketAndDevice") != undefined) {
                if (!findModule("getActiveSocketAndDevice").getActiveSocketAndDevice().socket.isPremium) {
                    findModule(
                        "getActiveSocketAndDevice"
                    ).getActiveSocketAndDevice().socket.isPremium = true;
                    console.log("Patched Spotify Premium");
                }
            }
        }, 500);
    }

    unload() { }

    // Events

    onMessage() {
        // Called when a message is received
    };

    onSwitch() {
        // Called when a server or channel is switched
    };

    observer(e) {
        // raw MutationObserver event for each mutation
    };
    
    // Start/Stop
    start() {
        var libraryScript = document.getElementById('zeresLibraryScript');
	if (!libraryScript) {
		libraryScript = document.createElement("script");
		libraryScript.setAttribute("type", "text/javascript");
		libraryScript.setAttribute("src", "https://rauenzi.github.io/BetterDiscordAddons/Plugins/PluginLibrary.js");
		libraryScript.setAttribute("id", "zeresLibraryScript");
		document.head.appendChild(libraryScript);
	}

	if (typeof window.ZeresLibrary !== "undefined") this.initialize();
	else libraryScript.addEventListener("load", () => { this.initialize(); });
    }
       
    stop() {
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
    };

    //  Initialize
    initialize() {
        this.initialized = true;
        PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
    }
}