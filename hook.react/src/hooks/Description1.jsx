import React from "react";
import Youtube from "react-youtube";

const videoId = "KVu3gS7iJu4";
const opts = {
  height: "360",
  width: "640",
};
function Description1() {
  return (
    <div>
      <p>
        <Youtube videoId={videoId} opts={opts} /> 
        <h1>Man of steel</h1>
        Man of Steel is an exhilarating superhero film that traces the journey
        of Clark Kent, a man with extraordinary powers hiding beneath his
        everyday persona. As Earth faces a menacing threat from General Zod,
        Clark must embrace his destiny as Superman to protect his adopted home
        and the ones he loves. Action-packed and visually stunning, this film
        explores themes of identity and sacrifice while showcasing Superman as a
        symbol of hope.
      </p>
    </div>
  );
}

export default Description1;
