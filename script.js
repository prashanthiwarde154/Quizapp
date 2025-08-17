function createRoom() {
  fetch('http://localhost:5000/api/create-room', {
    method: 'POST',
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('roomCodeDisplay').innerText =
        'Room Created: ' + data.roomCode;
      // Later: redirect to game.html?roomCode=...
    })
    .catch(err => {
      console.error('Error creating room:', err);
    });
}

function joinRoom() {
  const code = document.getElementById('joinRoomInput').value.trim();
  if (code) {
    document.getElementById('roomCodeDisplay').innerText =
      'Joining Room: ' + code;
    // Later: redirect to game.html?roomCode=...
  } else {
    alert('Please enter a room code.');
  }
}
