export const ColorPalette = ({
  onSetColor,
  coverColor,
  selectedLabel,
  mod,
}) => {
  console.log("selectedLabel", selectedLabel);
  const colors = [
    { code: "#7BC86C", colorName: "green" },
    { code: "#F5DD29", colorName: "yellow" },
    { code: "#FFAF3F", colorName: "orange" },
    { code: "#EF7564", colorName: "red" },
    { code: "#CD8DE5", colorName: "purple" },
    { code: "#5BA4CF", colorName: "blue" },
    { code: "#29CCE5", colorName: "sky" },
    { code: "#6DECA9", colorName: "lime" },
    { code: "#FF8ED4", colorName: "pink" },
    { code: "#172B4D", colorName: "black" },
  ];

  const getClassName = (color) => {
    let className = "btn";
    if (mod === "cover-color") {
      className += " cover-color";
      className += `${coverColor === color.code ? " focus" : ""}`;
    } else if (mod === "edit-label") {
      className += ` edit-label ${color.colorName}`;
      if (selectedLabel) {
        className += `${
          selectedLabel.color === color.colorName ? " selected" : ""
        }`;
      } else {
        //
      }
    }
    return className;
  };

  const getStyle = (color) => {
    let style = {};
    if (mod === "cover-color") {
      style = { background: color.code };
    } else if (mod === "edit-label") {
      style = {};
    }
    return style;
  };

  const onColorClicked = (color) => {
    mod === "cover-color"
      ? onSetColor(color.code)
      : onSetColor(color.colorName);
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <button
          className={getClassName(color)}
          style={getStyle(color)}
          key={color.code}
          onClick={() => onColorClicked(color)}
        >
          <span className={`trl icon-check icon-sm light`}></span>
        </button>
      ))}

      {mod === "edit-label" && (
        <div className="edit-label-no-color">
          <div>
            <span
              className={getClassName({
                code: "#C2C8D1",
                colorName: "no-color",
              })}
            ></span>
          </div>

          <div>
            <p>No color.</p>
            <p>This won't show up on the front of cards.</p>
          </div>
        </div>
      )}
    </div>
  );
};
