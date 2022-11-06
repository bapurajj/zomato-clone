import React from "react";
import "./exploreCard.css";

const ExploreCard = ({ restaurant, i }) => {
  /*EXTRACTING ALL THE DATA FROM THE API WHICH WE GET FROM ZOMATO whic is store in component called data */ 
  // using optional chaining which prevents from the undefined status/error.
  // ?. => if restaurant exists then look into it ... 
  // ?? => if nothing exists then give empty string 
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;

  return (
    <div className={`explore-card cur-po ${i < 3 ? "explore-card-first" : ""}`}>
      <div className="explore-card-cover">
        <img
          src={coverImg}
          className="explore-card-image"
          alt={restaurant.info.name}
        />
        <div className="delivery-time">{deliveryTime}</div>
        
        {/* every restaurant may not have some offers so we arre using and operator to match and 
        extract data according to that */}
        
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <i className="fi fi-sr-star absolute-center" />
          </div>
        )}
      </div>
      <div className="res-row">
        {/* if one cuisine is present then execute div */}
        {cuisines.length && (
          <div className="res-cuisine">
            
            {cuisines.map((item, i) => (
              <span className="res-cuisine-tag">
                {item}
                {/* if it is not the last element of cuisines array, then show comma  */}
                {i !== cuisines.length - 1 && ","}
              </span>
            ))}
          </div>
        )
        }
        {approxPrice && <div className="res-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
