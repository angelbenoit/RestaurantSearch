import React, { Component } from 'react';
import "./Component-CSS/Homepage.css"

class Homepage extends Component{
    render(){
        return (
            <div id="homepage">
                <form>
                    <input id="homepage-form-input"
                           value={this.props.city}
                           type="text"
                           placeholder="City"
                           onChange={this.props.getCity}/>

                    <input id="homepage-form-input"
                           value={this.props.state}
                           type="text"
                           placeholder="State"
                           onChange={this.props.getState}/>

                    <button onClick={this.props.check}>Go</button>
                </form>
            </div>
        )
    }
}

export default Homepage;