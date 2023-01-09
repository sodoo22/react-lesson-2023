function ProductFunc({ id, productImageUrl, votes, title, description, submitterAvatarUrl }) {
   function handleUpVote(productId) {
    console.log( 'upvoted' );
    console.log( productId );
   }
   
    return (
        <div className="contaner">
            <div>
                <img src={productImageUrl} className="App-logo rounded" alt="logo" />
            </div>
            <div className="textbox">
                {/* <h2> <i className="bi bi-caret-up-fill"></i> {votes}</h2> */}
           
                <a href="#" onClick={()=>{handleUpVote(id)}}>
                <i className="bi bi-caret-up-fill"></i>
                </a>
                <p className="bluetext">{title}</p>
                <p>{description}</p>
                <div className="contaner profile">
                    <p>Submitted by: </p>
                    <img src={submitterAvatarUrl} className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
    )
}
export default ProductFunc





