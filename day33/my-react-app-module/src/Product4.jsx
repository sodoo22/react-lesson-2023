import React from "react"

class Product extends React.Component {
    render() {
        return (

            <div className="contaner">
                <div>
                    <img src="img/image-rose.png" className="App-logo rounded" alt="logo" />
                </div>
                <div className="textbox">
                    <h2><i className="bi bi-caret-up-fill"></i> 23</h2>
                    <p className="bluetext">Supermajority: The Fantasy Congress League</p>
                    <p>Earn points when your favorite politicians pass legislation.</p>
                    <div className="contaner profile">
                        <p>Submitted by:  </p>
                        <img src="img/helen.jpg" className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product





