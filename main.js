
let peerConnection;

let localStream;
let remoteStream;

let servers = {
    iceServers:[
        {
            urls:['stun:stun1.1.']
        }
    ]
}
let init = async () => {

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
        document.getElementById('user-1').srcObject = stream;
        remoteStream = new MediaStream();
    })
    .catch(function(err) {
        console.log(err);
    });

    document.getElementById('user-1').srcObject = localStream;
    document.getElementById('user-2').srcObject = remoteStream;

}

let createOffer = async () => {
    peerConnection = new RTCPeerConnection();
}

init();
