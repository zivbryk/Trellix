import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import analyze from "rgbaster";

import { WindowOverlay } from "../cmps/window-overlay";
import { CardDetailsCover } from "../cmps/card/card-details-cover";

export const CardDetails = () => {
  const board = useSelector((state) => state.boardReducer.board);
  const navigate = useNavigate();
  const params = useParams();

  const [currCard, setCurrCard] = useState(null);
  const [currList, setCurrList] = useState(null);
  const [dominantColor, setDominantColor] = useState(null);
  const [isLightMode, setIsLightMode] = useState(null);

  function isColorLight(color, method) {
    let red, green, blue;
    if (method === "rgb") {
      const [rgbRed, rgbGreen, rgbBlue] = color
        .substr(3)
        .replace("(", "")
        .replace(")", "")
        .split(",");
      red = rgbRed;
      green = rgbGreen;
      blue = rgbBlue;
    } else if (method === "hex") {
      const hex = color.replace("#", "");
      red = parseInt(hex.substr(0, 2), 16);
      green = parseInt(hex.substr(2, 2), 16);
      blue = parseInt(hex.substr(4, 2), 16);
    }

    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    console.log("isColorLight => brightness", brightness);
    return brightness > 140;
  }

  const getCardAndList = useCallback(() => {
    const { cardId, listId } = params;
    const { lists } = board;
    const list = lists.find((currList) => currList.id === listId);
    const { cards } = list;
    const card = cards.find((currCard) => currCard.id === cardId);
    return { card, list };
  }, [board, params]);

  useEffect(() => {
    const { card, list } = getCardAndList();
    // console.log(card);
    setCurrCard(card);
    setCurrList(list);
  }, [getCardAndList]);

  useEffect(() => {
    (async () => {
      if (!currCard) return;
      if (currCard?.style.isImage) {
        const result = await analyze(currCard?.style.cover);
        setDominantColor(result[1].color);
        setIsLightMode(isColorLight(result[1].color, "rgb"));
      } else {
        console.log("currCard?.style.cover:", currCard?.style.cover);
        setIsLightMode(isColorLight(currCard?.style.cover, "hex"));
      }
    })();
  }, [currCard, dominantColor]);

  const goBackToBoard = (ev) => {
    ev.stopPropagation();
    //close popvoers with dispatch
    if (ev.target.id === "close-window") navigate(`/board/${board._id}`);
  };

  return (
    <section className="card-details">
      <WindowOverlay goBack={goBackToBoard}>
        <div className="window">
          <div className="window-wrapper">
            <button
              id="close-window"
              className={`btn dialog-close-btn ${
                isLightMode ? "dialog-close-btn-dark" : "dialog-close-btn-light"
              } `}
              onClick={(ev) => {
                goBackToBoard(ev);
              }}
            >
              <span id="close-window" className="icon-md trl icon-close"></span>
            </button>

            <div className="card-details-window">
              <CardDetailsCover
                currCard={currCard}
                currList={currList}
                dominantColor={dominantColor}
                isLightMode={isLightMode}
              />

              <div className="window-header"></div>

              <div className="window-main-col"></div>

              <div className="window-sidbar"></div>
            </div>
          </div>
        </div>
      </WindowOverlay>
    </section>
  );
};
