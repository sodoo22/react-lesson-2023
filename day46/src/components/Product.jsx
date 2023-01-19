import { Rating } from "react-simple-star-rating";
import products from "../data/seed";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product(props) {
  const { id } = useParams();
  // const [liked, setLiked] = useState(false);
  let foundProduct = {};
  if (id) {
    foundProduct = products.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];
  }
  if (Object.keys(props).length > 0) {
    foundProduct = props.product;
  }

  const product = foundProduct;

  const likedCheck = props.wishlist.filter((wish) => wish.id === product.id)[0];
  console.log(likedCheck);

  return (
    <div className="item">
      <div className="image">
        <img src={product.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => product.onVote(product.id)}>
            <i className="large caret up icon" />
          </a>
          {product.votes}
          <a
            onClick={() => {
              console.log("heart is clicked");
              if (!likedCheck) {
                const likedProduct = {
                  id: product.id,
                  title: product.title,
                  liked: true,
                };
                props.setWishList([...props.wishlist, likedProduct]);
              } else {
                props.setWishList(
                  props.wishlist.filter((w) => w.id !== product.id)
                );
              }
            }}
          >
            {likedCheck ? (
              <i className="heart icon "></i>
            ) : (
              <i className="heart outline icon "></i>
            )}
          </a>
        </div>
        <div className="description">
          <a href={product.url}>{product.title}</a>
          <p>{product.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={product.submitterAvatarUrl} />
        </div>
        <Rating initialValue={5} />
      </div>
    </div>
  );
}
