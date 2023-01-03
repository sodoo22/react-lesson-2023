import React from "react"

class Product extends React.Component {
    render() {
        return (

            <div className="contaner">
                <div>
                    <img src="img/image-aqua.png" className="App-logo rounded" alt="logo" />
                </div>
                <div className="textbox">
                    <h2><i className="bi bi-caret-up-fill"></i> 44</h2>
                    <p className="bluetext">Yellow Pail</p>
                    <p>On-demand sand castle contruction expertice</p>
                    <div className="contaner profile">
                        <p>Submitted by:  </p>
                        <img src="img/jenny.jpg" className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product





