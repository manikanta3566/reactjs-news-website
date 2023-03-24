// import { createContext as context, useContext } from "react";
import React, { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const API = "https://hn.algolia.com/api/v1/search";

const initialState = {
  data: [],
  totalPages: 0,
  pageNo: 0,
  query: "java",
  isLoading: true,
};

//context creation
const AppContext = createContext();

//provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          data: data.hits,
          totalPages: data.nbPages,
          query: data.query,
        },
      });
      dispatch({
        type: "SET_LOADING",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const removePost = (postId) => {
    dispatch({
      type: "REMOVE_POST",
      payload: postId,
    });
  };

  const searchPost = (queryParam) => {
    dispatch({
      type: "SEARCH_POST",
      payload: queryParam,
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  useEffect(() => {
    fetchData(`${API}?query=${state.query}&page=${state.pageNo}`);
  }, [state.query, state.pageNo]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
//consumer replaced by useContext hook
//useContext hook

//custom useContext hook creation
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
