import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
function FoodItem({ id,name, price, description, image }) {

const{cartItem,addCart,removeFormCart}=useContext(StoreContext)
return (
  <div className="food-item">
    <div className="food-item-img-container">
      <img className="food-item-image" src={image} alt="" />
      {!cartItem[id] ? (
        <img
          className="add"
          onClick={() => addCart(id)}
          src={assets.add_icon_green}
        />
      ) : (
        <div className="food-item-counter">
          <img
            onClick={() => removeFormCart(id)}
            src={assets.remove_icon_red}
          />
          <p>{cartItem[id]}</p>
          <img onClick={() => addCart(id)} src={assets.add_icon_green} />
        </div>
      )}
    </div>
    <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  </div>
);
}

export default FoodItem;
