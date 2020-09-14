import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>> ", basket);

  const addToBasket = () => {
    // dispatch
    // its like a gun that allows you to shoot data into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        item: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} />

      {/* When on click - send to basket. But add to basket also */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
