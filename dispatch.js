function dispatchMessage(msg) {
	if ( !msg ) { return; }
	if ( msg.kind === "toggleNavigation" ) {
		console.log("toggleNavigation");
		document.getElementById("sidebar").classList.toggle("sidebar-hidden");
	}
}
