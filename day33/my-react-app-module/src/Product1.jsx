import React from "react"

class Product extends React.Component {
    render() {
        return (

            <div className="contaner">
                <div>
                    <img src="img/image-yellow.png" className="App-logo rounded" alt="logo" />
                </div>
                <div className="textbox">
                    <h2> <i className="bi bi-caret-up-fill"></i> 55</h2>
                    <p className="bluetext">Haught or Naught</p>
                    <p>High-minded or absent-minded? You decide</p>
                    <div className="contaner profile">
                        <p>Submitted by:  </p>
                        <img src="img/daniel.jpg" className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product





