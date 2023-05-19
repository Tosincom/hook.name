import React from "react";
import Youtube from "react-youtube";

const videoId = "QwievZ1Tx-8";
const opts = {
  height: "360",
  width: "640",
};
function Description2() {
  return (
    <div>
      <p>
        <Youtube videoId={videoId} opts={opts} />
        <h1>Avengers Infinity war</h1>
        "Avengers: Infinity War" is an epic superhero film that brings together
        the Marvel Cinematic Universe's most iconic characters, including Iron
        Man, Captain America, Thor, Black Widow, and more. The movie follows the
        Avengers as they unite to face their greatest threat yet: the powerful
        and ruthless Thanos, who is on a mission to collect the Infinity Stones
        and unleash his destructive plan. Packed with action, intense battles,
        and emotional moments, "Avengers: Infinity War" takes audiences on a
        thrilling and suspenseful journey that sets the stage for the ultimate
        showdown in the Marvel universe.
      </p>
    </div>
  );
}

export default Description2;
