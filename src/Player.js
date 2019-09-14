import React from "react";
import { Player, ControlBar } from "video-react";

export default class PlayerControl extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: props.video,
      poster: props.poster
    };
  }

  render() {
    return (
      <div>
        <Player poster={this.state.poster}>
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
      </div>
    );
  }
}
