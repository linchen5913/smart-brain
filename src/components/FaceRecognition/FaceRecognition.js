import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />

        {box.length
          ? box.map((b, i) => (
              <div
                key={b.topRow}
                className="bounding-box"
                style={{
                  top: b.topRow,
                  right: b.rightCol,
                  bottom: b.bottomRow,
                  left: b.leftCol,
                }}
              ></div>
            ))
          : null}
      </div>
    </div>
  );
};

export default FaceRecognition;
