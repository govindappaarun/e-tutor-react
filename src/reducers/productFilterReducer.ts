export type FilterState = {
  courseType: string[];
  rating: string[];
  sortBy: string;
  range: number;
};

export const initialState: FilterState = {
  courseType: [],
  rating: [],
  sortBy: "",
  range: 0,
};

type Action =
  | { type: "SET_RATING"; payload: Record<string, any> }
  | { type: "SET_RANGE"; payload: number }
  | { type: "SET_COURSE_TYPE"; payload: Record<string, any> }
  | { type: "CLEAR_ALL"; payload: null };

export const productFilterReducer = (
  state: typeof initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case "SET_COURSE_TYPE": {
      const { id, checked } = payload.item;
      let courseType = [...state.courseType];

      if (id && checked) {
        courseType = [...courseType, id];
      } else if (id) {
        courseType = courseType.filter((item) => item !== id);
      }

      return {
        ...state,
        courseType: [...courseType],
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

    case "CLEAR_ALL":
      return initialState;

    default:
      throw new Error(`Invalid action type ${type}`);
  }
};
