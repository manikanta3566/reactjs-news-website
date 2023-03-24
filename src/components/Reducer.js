export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        data: action.payload.data,
        totalPages: action.payload.totalPages,
        query: action.payload.query,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "REMOVE_POST":
      return {
        ...state,
        data: state.data.filter((ele) => {
          return ele.objectID !== action.payload;
        }),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    case "PREV_PAGE":
      let prevPageNum = state.pageNo - 1;
      if (prevPageNum < 0) {
        prevPageNum = 0;
      }
      return {
        ...state,
        pageNo: prevPageNum,
      };

      case "NEXT_PAGE":
        let nextPageNum = state.pageNo + 1;
        if (nextPageNum >= state.totalPages) {
          nextPageNum = 0;
        }
        return {
          ...state,
          pageNo: nextPageNum,
        };
    default:
      break;
  }
};
