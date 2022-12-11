import React, { useState } from "react";
const ProfileAdder = () => {
  const [selectedFile, setselectedFile] = useState(false);
  function fileSelecthandler(event) {
    setselectedFile(event.target.files[0]);
  }
  const userdata = JSON.parse(localStorage.userData);
  if (selectedFile) {
    const ownuser = userdata.find((element) => {
      return element.id == localStorage.id;
    });
    ownuser.profileimage = selectedFile.name;
    localStorage.userData = JSON.stringify(userdata);
  }

  let imageSrc = null;
  if (selectedFile) {
    imageSrc = `images/${selectedFile.name}`;
  } else if (localStorage.id) {
    const findeimage = userdata.find((element) => {
      return element.id == localStorage.id;
    });
    findeimage.profileimage
      ? (imageSrc = `images/${findeimage.profileimage}`)
      : (imageSrc = "images/profile.png");
  }
  return (
    <div className="Profile-picture">
      <div className="profileimg">
        <img width={120} src={imageSrc} alt={imageSrc} />
      </div>
      <label htmlFor="filechoose" className="filechooser">
        <img width={40} src="images/plus.png" alt="plus.png" />
      </label>
      <input type="file" id="filechoose" onChange={fileSelecthandler} />
    </div>
  );
};

export default ProfileAdder;
