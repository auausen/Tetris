import React from "react";

import { createStage } from "../gameHelpers";

//components
import Stage from "./Stage";
import Display from "./Display";
import Startbutton from "./StartButton";

const Tetris = () => {
  return (
    <StylleTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <Startbutton />
        </aside>
      </StyledTetris>
    </StylleTetrisWrapper>
  );
};

export default Tetris;
