import React, { useState, useRef } from "react";
const ProfileAdder = () => {
  const [selectedFile, setselectedFile] = useState(false);
  function fileSelecthandler(event) {
    setselectedFile(event.target.files[0]);
  }
  return (
    <div className="Profile-picture">
      <div className="profileimg">
        <img
          width={120}
          src={selectedFile ? `images/${selectedFile.name}` : ""}
        />
      </div>
      <label htmlFor="filechoose" className="filechooser">
        <img width={40} src="images/plus.png" />
      </label>
      <input type="file" id="filechoose" onChange={fileSelecthandler} />
    </div>
  );
};

export default ProfileAdder;
