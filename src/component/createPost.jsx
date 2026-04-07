import "../customCss/createPost.css";
import { useRef, useEffect, useContext } from "react";
import { CreatePostContext } from "../store/storageForCreatPost";
const CreatePost = ({ onClose }) => {
  const title = useRef(null);
  const contentTxt = useRef(null);
  const { addPost } = useContext(CreatePostContext);
  useEffect(() => {
    title.current.focus();
  }, []);
  const createPostBtn = () => {
    if (
      title.current.value.trim() === "" ||
      contentTxt.current.value.trim() === ""
    )
      return;
    const postObj = {
      title: title.current.value,
      contentTxt: contentTxt.current.value,
    };
    addPost(postObj);
    title.current.value = "";
    contentTxt.current.value = "";
  };

  return (
    <>
      <div onClick={onClose} className="faqContentDiv">
        <div onClick={(e) => e.stopPropagation()} className="faqContant">
          <button onClick={onClose} className="faqConBtn">
            ✕
          </button>
          <h4 className="fw-bold mb-3">Create Post</h4>
          <div className="mb-3">
            <label htmlFor="contentTitle" className="form-label">
              content title
            </label>
            <input
              type="text"
              className="form-control"
              id="contentTitle"
              placeholder="Title"
              ref={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contentText" className="form-label">
              content textarea
            </label>
            <textarea
              className="form-control"
              id="contentText"
              rows="3"
              placeholder="type content here"
              ref={contentTxt}
            ></textarea>
          </div>
          <button
            className="btn btn-success"
            type="button"
            onClick={createPostBtn}
          >
            create post
          </button>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
