export default function Header(props) {
  function handleWishList() {
    console.log("List");
  }
  return (
    <div className="ui menu">
      <div className="right menu">
        <a onClick={handleWishList} className="item active">
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <i className="heart icon ">{props.wishlist.length}</i>
              <div class="menu">
                {props.wishlist.map((w, index) => {
                  return (
                    <div
                      class="item"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {w.title}
                      <a
                        onClick={() => {
                          console.log("removed", w.id);
                          props.setWishList(
                            props.wishlist.filter((wish) => wish.id !== w.id)
                          );
                        }}
                      >
                        <i class="close icon"></i>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
