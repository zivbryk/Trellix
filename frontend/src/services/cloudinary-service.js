export const cloudinaryService = {
  uploadImg,
};

function uploadImg(file, folder = "card-attachments") {
  const CLOUD_NAME = "zivcloud555";
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  let preset = "";
  switch (folder) {
    case "card-attachments":
      preset = "aua2dblj";
      break;
    case "board-attachments":
      preset = "ofk7song";
      break;

    default:
      break;
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", preset);

  return fetch(UPLOAD_URL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
}
