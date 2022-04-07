export type FilterState = {
  category: string[];
  rating: string[];
  sortByPrice: string;
  range: number;
};

export const initialState: FilterState = {
  category: [],
  rating: [],
  sortByPrice: "",
  range: 0,
};

type Action =
  | { type: "SET_RATING"; payload: Record<string, any> }
  | { type: "SET_RANGE"; payload: number }
  | { type: "SET_SORTBY"; payload: string }
  | { type: "SET_CATEGORY"; payload: Record<string, any> }
  | { type: "CLEAR_ALL"; payload: null };

export const productFilterReducer = (
  state: typeof initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case "SET_CATEGORY": {
      const { name, checked } = payload.item;
      let category = [...state.category];

      if (name && checked) {
        category = [...category, name];
      } else if (name && !checked) {
        category = category.filter((item) => item !== name);
      }

      return {
        ...state,
        category: [...category],
      };
    }
    case "SET_RATING": {
      let rating = state.rating;
      const { id, checked } = payload.item;

      if (id && checked) {
        rating = [...rating, id];
      } else if (id) {
        rating = rating.filter((item) => item !== id);
      }

      return {
        ...state,
        rating: [...rating],
      };
    }

    case "SET_RANGE":
      return {
        ...state,
        range: payload,
      };

    case "SET_SORTBY":
      return {
        ...state,
        sortByPrice: payload,
      };

    case "CLEAR_ALL":
      return initialState;

    default:
      throw new Error(`Invalname action type ${type}`);
  }
};
