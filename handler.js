let targetWindow;
let toggleNavigationButton;

function installHandler(doc, win) {
	targetWindow = win;

	doc.addEventListener("keydown", keydownHandler);

	toggleNavigationButton = doc.getElementById("toggle-navigation-button");
	toggleNavigationButton?.addEventListener("click", clickHandler);
}

function clickHandler(e) {
	if ( toggleNavigationButton && e.target === toggleNavigationButton ) {
		let msg = { "kind": "toggleNavigation" };
		targetWindow.postMessage(msg, "*");
	}
}

function keydownHandler(e) {
	console.log("Enter keydownHandler");
	const msg = keydownToMessage(e);

	if ( msg ) {
		targetWindow.postMessage(msg, "*");
		console.log("Done postMessage");
	}
}

function keydownToMessage(e) {
	if ( e.key === "x" ) {
		return {
			"kind": "toggleNavigation"
		};
	}
}
