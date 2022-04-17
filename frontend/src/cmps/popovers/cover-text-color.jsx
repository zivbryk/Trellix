export const CoverTextColor = ({ currCard, isColorWhite, onSetTxtColor }) => {
  const getBgStyle = (txtColor) => {
    const style =
      txtColor === "white-txt"
        ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currCard.style.cover})`,
          }
        : {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${currCard.style.cover})`,
          };
    return style;
  };

  return (
    <div className="cover-text-color">
      <div className="text-color-btns">
        <div
          className={`${isColorWhite ? "focus" : ""}`}
          style={getBgStyle("white-txt")}
          onClick={() => onSetTxtColor(true)}
        >
          <h3 className="white-text">{currCard.title}</h3>
        </div>
        <div
          className={`${isColorWhite ? "" : "focus"}`}
          style={getBgStyle("black-txt")}
          onClick={() => onSetTxtColor(false)}
        >
          <h3>{currCard.title}</h3>
        </div>
      </div>
    </div>
  );
};
