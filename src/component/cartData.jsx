import "../customCss/cartData.css";
import { useContext } from "react";
import { CreatePostContext } from "../store/storageForCreatPost";

const Cart = () => {
  const { postArr, deletePost, inputVal } = useContext(CreatePostContext);

  // ✅ inputVal ke according filter karo — original postArr safe rahega
  const filteredPosts = postArr.filter((post) => {
    if (!inputVal.trim()) return true; // search empty hai to sab dikhao
    return (
      post.title.toLowerCase().includes(inputVal.toLowerCase()) ||
      post.contentTxt.toLowerCase().includes(inputVal.toLowerCase())
    );
  });

  return (
    <>
      {filteredPosts.length === 0 && postArr.length > 0 && (
        <p className="text-center text-muted mt-4">Koi post nahi mili.</p>
      )}

      {filteredPosts.map((postDataObj, index) => (
        <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
          <div className="container">
            <div className="card cardContainer">
              <div className="card-body">
                <h5 className="card-title">{postDataObj.title}</h5>
                <p className="card-text">{postDataObj.contentTxt}</p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deletePost(postDataObj.id)}
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
