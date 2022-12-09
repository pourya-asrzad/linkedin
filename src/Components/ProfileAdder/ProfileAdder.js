import React, { useState } from "react";
const ProfileAdder = () => {
  const [selectedFile, setselectedFile] = useState(false);
  function fileSelecthandler(event) {
    setselectedFile(event.target.files[0]);
  }
  if (selectedFile) {
    localStorage.image = JSON.stringify(selectedFile.name);
  }
  // if (localStorage.image) {
  //   setselectedFile(JSON.parse(localStorage.image));
  // }
  let imageSrc = null;
  if (selectedFile) {
    imageSrc = `images/${selectedFile.name}`;
  } else if (localStorage.image) {
    imageSrc = `images/${JSON.parse(localStorage.image)}`;
  }
  return (
    <div className="Profile-picture">
      <div className="profileimg">
        <img width={127} src={imageSrc} alt={imageSrc} />
      </div>
      <label htmlFor="filechoose" className="filechooser">
        <img width={40} src="images/plus.png" alt="plus.png" />
      </label>
      <input type="file" id="filechoose" onChange={fileSelecthandler} />
    </div>
  );
};

export default ProfileAdder;
