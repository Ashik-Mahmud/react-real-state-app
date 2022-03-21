import React from "react";

const BestCard = ({ imageUrl, role }) => {
  return (
    <div className="item">
      <img src={imageUrl} alt={role} />
    </div>
  );
};

export default BestCard;
