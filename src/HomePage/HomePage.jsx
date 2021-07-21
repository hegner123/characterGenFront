import React from "react";

const HomePage = (props) => {
  let display;
  function test() {
    console.log("test");
  }

  function generateCharacter(options) {
    event.preventDefault();
    console.log(options.target.outerText);
  }
  return (
    <div css={""}>
      <div css={"width:100%;height:60px;"}></div>
      <div css={"display:flex;"}>
        <div
          css={
            "width:25%;text-align:center;display:flex; justify-content:center;"
          }
        >
          <div
            css={
              "width:90%; background:#1f1f1f;display:flex;flex-direction:column; align-items:center;"
            }
          >
            <h2 css={"color:#fff;"}>Options</h2>
            <form
              onSubmit={(e) => generateCharacter(e)}
              css={
                "display:flex;flex-direction:column;align-items:center;width:70%;"
              }
            >
              <label css={"color:#fff;"} htmlFor="">
                option1
              </label>

              <select name="option1" id="">
                <option value="volvo">Volvo</option>
              </select>
              <label css={"color:#fff;"} htmlFor="option2">
                option2
              </label>
              <select name="option2" id="">
                <option value="volvo">Volvo</option>
              </select>
              <label css={"color:#fff;"} htmlFor="option3">
                option3
              </label>
              <select name="option3" id="">
                <option value="volvo">Volvo</option>
              </select>
              <label css={"color:#fff;"} htmlFor="option4">
                option4
              </label>
              <select name="option4" id="">
                <option value="volvo">Volvo</option>
              </select>
              <label css={"color:#fff;"} htmlFor="option5">
                option5
              </label>
              <select name="option5" id="">
                <option value="volvo">Volvo</option>
              </select>
              <div>
                <input
                  type="submit"
                  css={
                    "margin-top:30px;border-radius:50%;height:100px; width:100px; border:none; background:#a9d3a4;cursor:pointer"
                  }
                  value="Generate"
                />
              </div>
            </form>
          </div>
        </div>
        <div
          css={
            "width:50%;text-align:center;display:flex;justify-content:center;"
          }
        >
          <div css={"width:90%;height:300px; background:#1f1f1f; color:#fff;"}>
            <h2>Your Character</h2>
            {display}
          </div>
        </div>
        <div
          css={
            "width:25%;text-align:center;display:flex;justify-content:center;"
          }
        >
          <div css={"width:90%;height:300px; background:#1f1f1f;color:#fff;"}>
            <h2>Links</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
