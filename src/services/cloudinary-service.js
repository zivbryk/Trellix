export const cloudinaryService = {
  uploadImg,
};

function uploadImg(file, folder = "card-attachments") {
  const CLOUD_NAME = "zivcloud555";
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  let preset = "";
  switch (folder) {
    // the "aua2dblj" cloudinary preset send the file to: "/user_uploaded/card_attachments"
    case "card-attachments":
      preset = "aua2dblj";
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
