import React from "react";
import { useGlobalContext } from "./Context";

const Header = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1 className="heading">NEWS PORTAL</h1>
      <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e)=>searchPost(e.target.value)}
          placeholder="search here"
          id="search"
        />
      </form>
      </div>
    </>
  );
};

export default Header;
