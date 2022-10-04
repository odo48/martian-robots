import style from "./Instructions.module.scss";

const Instructions = () => {
  return (
    <div className={style["instructions"]}>
      <div>
        <div className={style["instructions__subtitle"]}>Example Input</div>
        <div className={style["instructions__example"]}>
          5 3 <br />
          1 1 E <br />
          RFRFRFRF <br />
          3 2 N <br />
          FRRFLLFFRRFLL <br />
          0 3 W <br />
          LLFFFLFLFL <br />
        </div>
      </div>
      <div>
        <div className={style["instructions__subtitle"]}>Example Output</div>
        <div className={style["instructions__example"]}>
          1 1 E <br />
          3 3 N LOST <br />2 3 S
        </div>
      </div>
    </div>
  );
};

export default Instructions;
