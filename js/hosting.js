function createoffer() {
	peerConnection = createPeerConnection(lasticecandidate);
	dataChannel = peerConnection.createDataChannel('chat');
	dataChannel.onopen = datachannelopen;
	dataChannel.onmessage = datachannelmessage;
	createOfferPromise = peerConnection.createOffer();
	createOfferPromise.then(createOfferDone, createOfferFailed);
}

function createOfferDone(offer) {
	setLocalPromise = peerConnection.setLocalDescription(offer);
	setLocalPromise.then(setLocalDone, setLocalFailed(offer));
}

function createOfferFailed(reason) {
	console.log('createOfferFailed');
	console.log(reason);
	clickcreateoffer();
}

function setLocalDone() {
	console.log('setLocalDone');
}

function setLocalFailed(reason, offer) {
	console.log('setLocalFailed');
	console.log(reason);
	createOfferDone(offer);
}

function lasticecandidate() {
	textelement = document.getElementById('textoffer');
	offer = peerConnection.localDescription;
	textelement.value = JSON.stringify(offer);
	document.getElementById('buttonoffersent').disabled = false;
}