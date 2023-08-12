import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style.loadingWrapper}>
      <div className={style.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
