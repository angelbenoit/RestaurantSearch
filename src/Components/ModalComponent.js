import React, { Component } from 'react';
import Modal from 'react-modal';
import "./Component-CSS/ModalComponent.css";

class ModalComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //have to check if undefined, otherwise will give typescript error
        let ob = this.props.data.opening_hours;
        let week;
        if(ob && ob.weekday_text !== undefined){
            week = ob.weekday_text;
        }
        else{
            console.log("CANT FIND OPEN NOW")
        }
        let url = this.props.data.url;
        let websiteURL = this.props.data.website;
        return(
                <Modal
                    isOpen={this.props.isOpen}
                    contentLabel="Example Modal"
                >
                    <div id="modal">
                        <h1>{this.props.data.name}</h1>
                        <p>Find it on <a href={url}>Google Maps</a></p>
                        <a href={websiteURL}>Website</a>
                        <p>Hours: </p>
                        <ul>
                            {week ? week.map(day => <li>{day}</li>) : "CANT FIND HOURS"}
                        </ul>
                        <button onClick={this.props.isClosed}>close</button>
                    </div>
                </Modal>
        )
    }
}

export default ModalComponent;