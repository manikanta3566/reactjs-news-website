import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { data, isLoading, removePost } = useGlobalContext();
  return (
    <>
     <div className="card-container" >
      {isLoading ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <>
          {data.map((ele) => {
            const { title, author, num_comments, url, objectID } = ele;
            return (
              <div className="card" key={objectID}>
                <h2>{title}</h2>
                <p>
                  By <span className="author">{author}</span> |{" "}
                  <span className="comment">{num_comments} comments</span>
                </p>
                <div className="buttons">
                  <a href={url} target="_blank">
                    Read more
                  </a>
                  <a
                    href="#"
                    onClick={() => {
                      removePost(objectID);
                    }}
                  >
                    Remove
                  </a>
                </div>
              </div>
            );
          })}
        </>
      )}
      </div>
    </>
  );
};

export default Stories;
