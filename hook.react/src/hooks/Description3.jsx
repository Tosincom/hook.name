import React from "react";
import Youtube from "react-youtube";

const videoId = "naQr0uTrH_s";
const opts = {
  height: "360",
  width: "640",
};
function Description3() {
  return (
    <div>
      <p>
        <Youtube videoId={videoId} opts={opts} />
        <h1> Pirates of the Caribbean</h1>
        "Pirates of the Caribbean" is a thrilling adventure film series that
        follows the misadventures of Captain Jack Sparrow and his crew as they
        sail the high seas in search of treasure and face encounters with
        supernatural beings. Full of swashbuckling action, witty humor, and
        memorable characters, this franchise takes viewers on a captivating
        journey filled with pirate lore, battles, and unexpected twists. Join
        Captain Jack Sparrow in his quest for fortune and glory as he navigates
        the treacherous waters of the Caribbean.
      </p>
    </div>
  );
}

export default Description3;
