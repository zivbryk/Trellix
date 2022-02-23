export const ListCardBadges = ({ card }) => {
  return (
    <div className="list-card-badges">
      <span>
        <div className="badge icon-only" title="You are watching this card">
          <span className="badge-icon icon-sm trl icon-subscribe"></span>
        </div>

        <div className="badge"></div>

        <div className="badge icon-only"></div>
      </span>
    </div>
  );
};
