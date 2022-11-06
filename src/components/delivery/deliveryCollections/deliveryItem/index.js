import React from "react";
import "./deliveryItem.css";
const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="bg max-width">
        <div className="bg2 absolute-center">
          <div className="delivery-item-cover">
            <img
              src={item.cover}
              className="delivery-item-image"
              alt={item.title}
            />
          </div>
        </div>
        <div className="absolute-center">
        <p className="delivery-item-title ">{item.title}</p>
          </div>
      </div>
    </div>
  );
};

export default DeliveryItem;
