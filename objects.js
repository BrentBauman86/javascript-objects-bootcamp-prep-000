var playlist = { 'Jim Croce': 'I got a name', 'TEB': 'wounded', 'DC Talk': 'supernova'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return updatePlaylist
};

