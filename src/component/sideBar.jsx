import "../customCss/sideBar.css";
import { CiHome } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import CreatePost from "./createPost";
import { useState, useContext } from "react";
import { CreatePostContext } from "../store/storageForCreatPost";
import Mdo from "./mdo";

const SideBar = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const { setInputVal } = useContext(CreatePostContext);
  const clickCreatePost = () => {
    setShowCreatePost(true);
    setInputVal("");
  };
  return (
    <>
      <div className="col-2  sideBar p-0 d-flex flex-column">
        <hr className="text-white" />
        <div className="container px-4">
          <a href="#" className="homeBtn mt-2 ">
            <CiHome size={"25px"} />
            <span>Home</span>
          </a>

          <a href="#" className="homeBtn mt-2" onClick={clickCreatePost}>
            <IoCreate size={"25px"} />

            <span>Create Post</span>
          </a>
          {showCreatePost && (
            <CreatePost onClose={() => setShowCreatePost(false)}></CreatePost>
          )}
        </div>

        <div className="flex-grow-1" />
        <div>
          <hr className="text-white " />
          <Mdo></Mdo>
        </div>
      </div>
    </>
  );
};
export default SideBar;
