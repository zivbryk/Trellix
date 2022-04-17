export const BoardColorPalette = ({ onSetCoverColor }) => {
  const colors = [
    { code: "#4A9ED0" },
    { code: "#D29034" },
    { code: "#519839" },
    { code: "#B04632" },
    { code: "#89609E" },
    { code: "#CD5A91" },
    { code: "#4BBF6B" },
    { code: "#00AECC" },
    { code: "#838C91" },
  ];

  return (
    <div className="board-color-palette">
      <div className="palette-container">
        {colors.map((color) => (
          <div key={color.code} className="background-tile">
            <div
              className="image"
              style={{ background: color.code }}
              onClick={() => onSetCoverColor(color.code)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
