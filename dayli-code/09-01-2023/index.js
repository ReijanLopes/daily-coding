function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

function addTrack(playlist, track) {
  return [...new Set(playlist).add(track)];
}

function deleteTrack(playlist, track) {
    const res = new Set(playlist);
    res.forEach((item) => {
      item === track ? res.delete(item) : null;
    })
     return [...res];
}

  function listArtists(playlist) {
    const res = playlist.map((item) => {
       return item.split(" - ")?.[1];
    })
    
    return [...new Set(res)];
  }