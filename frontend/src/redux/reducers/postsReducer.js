const initialState = {
  listPosts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_POST':
      return {
        ...state,
        listPosts: [...state.listPosts, action.payload],
      };
    case 'ALL_POSTS':
      return {
        ...state,
        listPosts: action.payload,
      };
    case 'DELETE_POST':
      return {
        ...state,
        listPosts: state.listPosts.filter(
          (item, index) => index !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export default postsReducer;
