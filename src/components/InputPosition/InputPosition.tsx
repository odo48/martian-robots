import { useState } from "react";

import IInputPosition from "./types";
import style from "./InputPosition.module.scss";
import MartianMoving from "assets/martian-moving.png";
import MartianStay from "assets/martian-stay.png";

const InputPosition = (props: IInputPosition) => {
  const { value, onChange, onReset } = props;

  const [usedMartian, setUsedMartian] = useState(MartianStay);
  const [buttonText, setButtonText] = useState("Test");

  const onTestHandle = () => {
    if (usedMartian === MartianMoving) {
      setUsedMartian(MartianStay);
      setButtonText("Test");
      onReset();
    } else {
      setUsedMartian(MartianMoving);
      setButtonText("Restart");
    }
  };

  return (
    <div className={style["container"]}>
      <div className={style["container__info"]}>
        <div className={style["container__info-title"]}>
          Please add instructions for little Marvin
        </div>
        <textarea
          onChange={onChange}
          value={value}
          className={style["container__info-textarea"]}
        />
        <button
          onClick={onTestHandle}
          className={style["container__info-button"]}
        >
          {buttonText}
        </button>
      </div>
      <img className={style["container__martian"]} src={usedMartian} />
    </div>
  );
};

export default InputPosition;
