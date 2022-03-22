export const initialState = {
  courseType: [],
  rating: [],
  sortBy: null,
  range: null,
};

type Action =
  | { type: "SET_RATING"; payload: Record<string, any> }
  | { type: "SET_RANGE"; payload: number }
  | { type: "SET_COURSE_TYPE"; payload: number };

export const productFilterReducer = (
  state: typeof initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case "SET_COURSE_TYPE":
      return {
        ...state,
      };
    case "SET_RATING":
      return {
        ...state,
      };
    case "SET_RANGE":
      return {
        ...state,
      };
    default:
      throw new Error(`Invalid action type ${type}`);
  }
};
