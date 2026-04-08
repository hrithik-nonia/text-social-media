import { useState, createContext } from "react";
export const CreatePostContext = createContext();

const PostContext = ({ children }) => {
  const [postArr, setPostArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addPost = (newPost) => {
    setPostArr((prev) => [...prev, { ...newPost, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPostArr((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <CreatePostContext.Provider
      value={{ postArr, addPost, deletePost, setInputVal, inputVal }}
    >
      {children}
    </CreatePostContext.Provider>
  );
};
export default PostContext;
