import React from "react";
import { Fade } from "react-reveal";
const BestCard = ({ imageUrl, role }) => {
  return (
    <Fade bottom cascade distance="40px">
      <div className="item">
        <img src={imageUrl} alt={role} />
      </div>
    </Fade>
  );
};

export default BestCard;
