import "../customCss/sideBar.css";
import { CiHome } from "react-icons/ci";
import { IoCreate } from "react-icons/io5";
import CreatePost from "./createPost";
import { useState } from "react";

const SideBar = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  return (
    <>
      <div className="col-2  sideBar p-0">
        <hr className="text-white" />
        <div className="container px-4">
          <a href="#" className="homeBtn my-2 ">
            <CiHome size={"25px"} />
            <span>Home</span>
          </a>

          <a
            href="#"
            className="homeBtn my-2 "
            onClick={() => setShowCreatePost(true)}
          >
            <IoCreate size={"25px"} />

            <span>Create Post</span>
          </a>
          {showCreatePost && (
            <CreatePost onClose={() => setShowCreatePost(false)}></CreatePost>
          )}
        </div>
        <hr className="text-white" />
      </div>
    </>
  );
};
export default SideBar;
