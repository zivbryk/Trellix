import { ReactComponent as TrelloLoader } from "../assets/img/animations/trello-loader.svg";

export function Spinner({ mode }) {
  return (
    <div className={`spinner ${mode}`}>
      <TrelloLoader className={`${mode}`} />
    </div>
  );
}
