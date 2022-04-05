import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListCardDetails } from "./list-card-details";

export const ListCardContent = ({ currBoard, currList, currCard }) => {
  const [coverMode, setCoverMode] = useState(currCard.style.coverMode);

  useEffect(() => {
    setCoverMode(currCard.style.coverMode);
  }, [currCard]);
  // REMOVE_COMMENT TODO: In order for card cover background img not to get cut, aspect ratio (r=w/h) of the image can be obtained and then height of the cover image is 256/r (width is set to the width of the card 256px). get aspect ratio func here works great but there is a problem whith useEffect - error message that there is a memory leak as the state is updated after the component is unmounted!
  //*When pplying the true aspect ratio of the img, style:background-size: contain should be used.This can result with white edges and require a way to detect the img background color and apply it as the cover div bgc!

  // const [coverStyle, setCoverStyle] = useState(1);

  //ratio = w/h
  // const getAspectRatio = () => {
  //   return new Promise((resolve, reject) => {
  //     let img = new Image();
  //     img.onload = () => resolve(img.width / img.height);
  //     img.onerror = reject;
  //     img.src =
  //       "https://res.cloudinary.com/zivcloud555/image/upload/v1634026001/Trellis%20permanent%20img/Card%20Images/launch_kucwit.jpg";
  //   });
  // };

  // useEffect(() => {
  //   let isCancelled = false;
  //   const getCoverStyle = async () => {
  //     try {
  //       const aspectRatio = await getAspectRatio();
  //       console.log("getCoverStyle => aspectRatio", aspectRatio);
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     let currCoverStyle;
  //     if (!card.style.cover) {
  //       currCoverStyle = {};
  //     } else {
  //       if (card.style.isImage) {
  //         currCoverStyle = {
  //           height: "152px",
  //           backgroundImage: `${card.style.cover}`,
  //           backgroundSize: "cover",
  //         };
  //       } else {
  //         currCoverStyle = {
  //           height: "32px",
  //           backgroundColor: `${card.style.cover}`,
  //         };
  //       }
  //     }

  //     if (!isCancelled) setCoverStyle(currCoverStyle);
  //   };

  //   getCoverStyle();

  //   //Cleanup
  //   return () => {
  //     isCancelled = true;
  //   };
  // });

  const getCardContentStyle = () => {
    if (!coverMode) return {};
    let cardContentStyle = null;

    if (coverMode === "full") {
      cardContentStyle = currCard.style.isImage
        ? {
            minHeight: "170px",
            backgroundImage: `url(${currCard.style.cover})`,
            backgroundSize: "cover",
          }
        : {
            minHeight: "56px",
            backgroundColor: `${currCard.style.cover}`,
          };
    } else if (coverMode === "half") {
      cardContentStyle = {};
    }

    return cardContentStyle;
  };

  const getCoverStyle = () => {
    if (!coverMode) return {};

    let coverStyle = null;

    if (coverMode === "half") {
      coverStyle = currCard.style.isImage
        ? {
            height: "152px",
            backgroundImage: `url(${currCard.style.cover})`,
            backgroundSize: "cover",
          }
        : {
            height: "32px",
            backgroundColor: `${currCard.style.cover}`,
          };
    } else if (coverMode === "full") {
      coverStyle = {
        display: "none",
      };
    }

    return coverStyle;
  };

  return (
    <Link to={`/board/${currBoard._id}/${currList.id}/${currCard.id}`}>
      <section
        className={`list-card-content ${
          currCard.style.cover ? "is-covered" : ""
        } ${coverMode === "full" ? "flex" : ""}`}
        style={getCardContentStyle()}
      >
        <div
          className={"list-card-cover"}
          style={getCoverStyle()}
          // style={coverStyle}
        ></div>

        <button className="btn btn-edit-card">
          <span className="trl icon-edit icon-sm"></span>
        </button>

        <ListCardDetails
          currCard={currCard}
          currList={currList}
          coverMode={coverMode}
        />
      </section>
    </Link>
  );
};
