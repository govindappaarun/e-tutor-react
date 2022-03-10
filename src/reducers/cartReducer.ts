interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

interface State {
  cart: CartItem[];
  quantity: number;
  totalPrice: number;
}

interface Action {
  type: string;
  payload: any;
}

export const cartReducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, { ...payload.item, quantity: 1 }],
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + payload.item.price,
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + payload.item.price,
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
        quantity: state.quantity - 1,
        // totalPrice: state.totalPrice + item.price
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== payload.item.id),
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - payload.item.price,
      };
    default:
      return state;
  }
};

export default cartReducer;
