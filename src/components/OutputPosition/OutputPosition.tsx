import IOutputPosition from "./types";
import style from "./OutputPosition.module.scss";

const OutputPosition = (props: IOutputPosition) => {
  const { values = "" } = props;

  return (
    <div className={style["output"]}>
      <div className={style["output__title"]}>
        Final Positions for little Marvin
      </div>
      <div className={style["output__values"]}>{values}</div>
    </div>
  );
};

export default OutputPosition;
