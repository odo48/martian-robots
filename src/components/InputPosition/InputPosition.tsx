import { useState } from "react";

import IInputPosition from "./types";
import style from "./InputPosition.module.scss";
import MartianMoving from "assets/martian-moving.png";
import MartianStay from "assets/martian-stay.png";

const InputPosition = (props: IInputPosition) => {
  const { value, onChange } = props;

  const [usedMartian, setUsedMartian] = useState(MartianStay);

  const onTestHandle = () => {
    setUsedMartian(MartianMoving);
    setTimeout(() => {
      setUsedMartian(MartianStay);
    }, 1000);
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
          Test
        </button>
      </div>
      <img
        className={`${style["container__martian"]} ${
          usedMartian === MartianMoving
            ? style["container__martian--moving"]
            : ""
        }`}
        src={usedMartian}
      />
    </div>
  );
};

export default InputPosition;
