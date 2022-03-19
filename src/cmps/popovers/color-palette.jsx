export const ColorPalette = ({ onSetCoverColor, coverColor }) => {
  const colors = [
    "#7BC86C",
    "#F5DD29",
    "#FFAF3F",
    "#EF7564",
    "#CD8DE5",
    "#5BA4CF",
    "#29CCE5",
    "#6DECA9",
    "#FF8ED4",
    "#172B4D",
  ];

  return (
    <div className="color-palette">
      {colors.map((colorCode) => (
        <button
          className={`btn ${coverColor === colorCode ? "focus" : ""}`}
          style={{ background: colorCode }}
          key={colorCode}
          onClick={() => onSetCoverColor(colorCode)}
        ></button>
      ))}
    </div>
  );
};
