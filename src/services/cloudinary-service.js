export const cloudinaryService = {
  uploadImg,
};

function uploadImg(ev) {
  const CLOUD_NAME = "zivcloud555";
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const formData = new FormData();
  formData.append("file", ev.target.files[0]);
  // the "aua2dblj" cloudinary preset send the file to: "/user_uploaded/card_attachments"
  formData.append("upload_preset", "aua2dblj");

  return fetch(UPLOAD_URL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error(err));
}
