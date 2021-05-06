import React from "react";

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;
