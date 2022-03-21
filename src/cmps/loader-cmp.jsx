import { ReactComponent as TrelloLoader } from "../assets/img/animations/trello-loader.svg";

export function LoaderCmp({ mode }) {
  return (
    <div className={`loader-cmp ${mode}`}>
      <TrelloLoader />
    </div>
  );
}
