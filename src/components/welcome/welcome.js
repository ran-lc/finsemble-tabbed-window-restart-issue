window.quitFinsemble = function quitFinsemble() {
	//console.log("Quit button successfully triggered");
	FSBL.shutdownApplication();
};

if (window.FSBL && FSBL.addEventListener) {
	FSBL.addEventListener("onReady", init);
} else {
	window.addEventListener("FSBLReady", init);
}

function init() {
	const key = FSBL.Clients.WindowClient.getCurrentWindow().name + "WindowTitle"
	FSBL.Clients.WindowClient.getComponentState({ field: "windowTitle" }, (err, resp) => {
		if (err) FSBL.Clients.Logger.error(err);
		else if (resp) {
			FSBL.Clients.WindowClient.setWindowTitle(resp)
		}
	});

	window.launchTutorial = function launchTutorial() {
		const newTitle = "WindowTitle" + Math.ceil(Math.random() * 100);
		FSBL.Clients.WindowClient.setWindowTitle(newTitle);
		FSBL.Clients.WindowClient.setComponentState({ field: "windowTitle", value: newTitle });
	};
}
