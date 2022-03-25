interface CartItem {
  _id: string;
  name: string;
  price: string;
  quantity: number;
}

interface State {
  cart: CartItem[];
  wishList: CartItem[];
  quantity: number;
  totalPrice: number;
}

interface Action {
  type: string;
  payload: any;
}

export const cartReducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...payload.item, quantity: 1 }],
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + payload.item.price,
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, { ...payload.item }],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item._id !== payload.item._id
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart._id !== payload.item._id),
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - payload.item.price,
      };

    default:
      return state;
  }
};

export default cartReducer;
