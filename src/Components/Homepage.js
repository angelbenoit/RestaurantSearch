import React, { Component } from 'react';
import "./Component-CSS/Homepage.css"

class Homepage extends Component{
    render(){
        return (
            <div id="homepage">
                <h1>Restaurant Search</h1>
                <hr/>
                <form>
                    <input id="homepage-form-input"
                           value={this.props.city}
                           type="text"
                           required
                           placeholder="City"
                           onChange={this.props.getCity}/>
                    <br/><br/>
                    <input id="homepage-form-input"
                           value={this.props.state}
                           type="text"
                           required
                           placeholder="State"
                           onChange={this.props.getState}/>
                    <br/><br/>
                    {/*if the length of city and state is 0, then the button will be disabled*/}
                    <button disabled={!(this.props.city.length > 0 && this.props.state.length > 0)}
                            onClick={this.props.check}>Go</button>
                </form>
            </div>
        )
    }
}

export default Homepage;