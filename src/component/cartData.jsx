import "../customCss/cartData.css";
import { useContext } from "react";
import { CreatePostContext } from "../store/storageForCreatPost";
const Cart = () => {
  const { postArr, deletePost } = useContext(CreatePostContext);
  const deleteBtnClick = (index) => {
    deletePost(index);
  };
  return (
    <>
      {postArr.map((postDataObj, index) => (
        <div className="col-4 my-2" key={index}>
          <div className="container ">
            <div className="card cardContainer">
              <div className="card-body">
                <h5 className="card-title">{postDataObj.title}</h5>
                <p className="card-text">{postDataObj.contentTxt}</p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteBtnClick(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Cart;
