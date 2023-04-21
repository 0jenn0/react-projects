import React from "react";

export default function ChannelCard({ imgUrl, channelTitle, subscribeNum }) {
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div>
        <p>{channelTitle}</p>
        <p>{subscribeNum}</p>
      </div>
    </div>
  );
}
