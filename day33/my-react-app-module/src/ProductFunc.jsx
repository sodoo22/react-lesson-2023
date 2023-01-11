import { useState } from "react";
import products from "./Seed";
import { Rating } from "react-simple-star-rating";

// function ProductsFunc(props) {

// }

function ProductFunc({
  id,
  productImageUrl,
  stars,
  votes,
  title,
  description,
  submitterAvatarUrl,
  onVote,
}) {
  // const [vote, setVote] = useState(votes);
  const [star, setStars] = useState(stars);

  function handleUpVote(productId) {
    // setVote(vote + 1);
    if (star >= 5) {
      setStars(5);
    } else {
      setStars(star + 1);
    }
  }

  function handleDownVote(productId) {
    // setVote(vote - 1);
    if (star <= 0) {
      setStars(0);
    } else {
      setStars(star - 1);
    }
  }

  return (
    <div className="contaner">
      <div>
        <img src={productImageUrl} className="App-logo rounded" alt="logo" />
      </div>
      <div className="textbox">
        <a
          onClick={() => {
            onVote(id);
            // handleUpVote(id);
          }}
        >
          <i className="bi bi-caret-up-fill"></i>
        </a>
        <h2>{votes}</h2>
        <a
          onClick={() => {
            handleDownVote(id);
          }}
        >
          <i className="bi bi-caret-down-fill"></i>
        </a>
        <p className="bluetext">{title}</p>
        <p>{description}</p>
        <div className="contaner profile">
          <p>Submitted by: </p>
          <img src={submitterAvatarUrl} className="App-logo" alt="logo" />
          <Rating
            initialValue={star}

            // onClick={handleRating}
            // onPointerEnter={onPointerEnter}
            // onPointerLeave={onPointerLeave}
            // onPointerMove={onPointerMove}
            // /* Available Props */
          />
        </div>
      </div>
    </div>
  );
}
export default ProductFunc;
