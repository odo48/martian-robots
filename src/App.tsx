import { useState } from "react";
import style from "./App.module.scss";

import OutputPosition from "./components/OutputPosition";
import InputPosition from "./components/InputPosition";
import Instructions from "./components/Instructions";
import Robot from "./helpers/robot";
import Mars from "./helpers/mars";

function App() {
  const [textareaValue, setTextareaValue] = useState("");
  const [output, setOutput] = useState<string | undefined>();

  const onHandleTest = () => {
    try {
      const regexInstructions = /^(\d+) (\d+)\n((\d+ \d+ [NESW]\n[RLF]+\n?)+)$/;

      const matches = regexInstructions.exec(textareaValue);

      if (matches == null) throw new Error("Invalid instructions");

      const [, gridMaxX, gridMaxY, unparsedRobotInstructions] = matches;
      const mars = new Mars(Number(gridMaxX), Number(gridMaxY));

      const regexBotInstructions = /(\d+) (\d+) ([NESW])\n([RLF]+)/gm;

      const robotInstructions =
        unparsedRobotInstructions.match(regexBotInstructions);

      const results = robotInstructions?.map((robotInstruction) => {
        regexBotInstructions.lastIndex = 0;

        const result = regexBotInstructions.exec(robotInstruction);

        if (result === null) throw new Error("Invalid instructions");

        const [, x, y, orientation, moves] = result;

        const robot = new Robot(Number(x), Number(y), orientation, mars);
        for (let i = 0; i < moves.length; i++) {
          robot.move(moves.charAt(i));
        }
        return robot.toString();
      });
      setOutput(results?.join("\n"));
      return true;
    } catch (err) {
      alert(err);
      return false;
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className={style["app"]}>
      <div className={style["app__title"]}>Martian Robots</div>
      <div className={style["app__position"]}>
        <InputPosition
          onHandleTest={onHandleTest}
          onChange={onChange}
          value={textareaValue}
        />
        <OutputPosition values={output} />
      </div>
      <Instructions />
    </div>
  );
}

export default App;
