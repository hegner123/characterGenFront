import React, { useEffect, useState } from "react";
import { characterActions } from "../_actions";
import { connect } from "react-redux";

import { Label, InnerColumn } from "./style";

const HomePage = (props) => {
  const [character, setCharacter] = useState(null);
  const [isLoading, setLoading] = useState(false);
  let display;
  function handleSubmit(e) {
    props.generateCharacter();
  }

  return (
    <div>
      <div css={"width:100%;height:60px;"}></div>
      <div css={"display:flex;"}>
        <div
          css={
            "width:25%;text-align:center;display:flex; justify-content:center;"
          }
        >
          <InnerColumn css={""}>
            <h2>Options</h2>
            <form
              css={
                "display:flex;flex-direction:column;align-items:center;width:70%;"
              }
            >
              <Label htmlFor="">Mode</Label>

              <select name="option1" id="">
                <option value="default">default</option>
              </select>

              <div></div>
            </form>
            <a
              onClick={() => handleSubmit()}
              css={
                "margin-top:30px;border-radius:50%;height:100px; width:100px; border:none; background:#a9d3a4;cursor:pointer"
              }
            >
              Generate
            </a>
          </InnerColumn>
        </div>
        <div
          css={
            "width:50%;text-align:center;display:flex;justify-content:center;"
          }
        >
          <InnerColumn>
            <h2>Your Character</h2>
            {display}
          </InnerColumn>
        </div>
        <div
          css={
            "width:25%;text-align:center;display:flex;justify-content:center;"
          }
        >
          <InnerColumn>
            <h2>Links</h2>
          </InnerColumn>
        </div>
      </div>
    </div>
  );
};

const actions = {
  generateCharacter: characterActions.generateCharacter,
};

function mapState(state) {
  const { character } = state;
  return { character };
}

const connectedHomePage = connect(mapState, actions)(HomePage);
export { connectedHomePage as HomePage };
