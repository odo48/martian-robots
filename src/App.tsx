import { useEffect, useState } from "react";

import style from "./App.module.scss";

import OutputPosition from "./components/OutputPosition";
import InputPosition from "./components/InputPosition";
import Instructions from "./components/Instructions";

function App() {
  const [textareaValue, setTextareaValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className={style["app"]}>
      <div className={style["app__title"]}>Martian Robots</div>
      <div className={style["app__position"]}>
        <InputPosition onChange={onChange} value={textareaValue} />
        <OutputPosition values="" />
      </div>

      <Instructions />
    </div>
  );
}

export default App;
