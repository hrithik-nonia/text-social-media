import { useState, createContext } from "react";
export const CreatePostContext = createContext();

const PostContext = ({ children }) => {
  const [postArr, setPostArr] = useState([]);

  const addPost = (newPost) => {
    setPostArr((prev) => [...prev, newPost]);
  };

  const deletePost = (index) => {
    setPostArr((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CreatePostContext.Provider value={{ postArr, addPost, deletePost }}>
      {children}
    </CreatePostContext.Provider>
  );
};
export default PostContext;
