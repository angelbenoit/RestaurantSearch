import React, { Component } from 'react';
import "./Component-CSS/Homepage.css"

class Homepage extends Component{
    render(){
        return (
            <div id="homepage">
                <h1>Restaurant Search</h1>
                <form>
                    <input id="homepage-form-input"
                           value={this.props.city}
                           type="text"
                           required
                           placeholder="City"
                           onChange={this.props.getCity}/>

                    <input id="homepage-form-input"
                           value={this.props.state}
                           type="text"
                           required
                           placeholder="State"
                           onChange={this.props.getState}/>

                    <button onClick={this.props.check}>Go</button>
                </form>
            </div>
        )
    }
}

export default Homepage;