export const WindowOverlay = ({ goBack = null, children }) => {
  return (
    <div
      id="close-window"
      className="window-overlay"
      onClick={(ev) => {
        if (goBack) goBack(ev);
      }}
    >
      {children}
    </div>
  );
};
