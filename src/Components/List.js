import React, { Component } from 'react';
import ModalComponent from './ModalComponent';
import './Component-CSS/List.css'

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false,

            specificPlace: {}
            //when a user clicks on a restaurant, the placeId will go to the api and that info will
            //go to this object to be displayed in a modal
        };

        this.displayList = this.displayList.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    displayList = () => {
        let displayArray = [];
        this.props.list.forEach((item, index) => {
            displayArray.push(
                <div className="item" key={index} onClick={() => this.renderModal(item.place_id)}>
                    <h1>{item.name}</h1>
                    <p>Rating: {item.rating}</p>
                    <p>Address: {item.vicinity}</p>
                </div>);

        });
        return displayArray;
    };

    renderModal = (id) => {
        let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${id}&key=AIzaSyBCU4IDU4yztAJarEW4YxUwpIRPsqSSxI4&language=en`;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({specificPlace: data})
            })
            .then(this.openModal);
    };


    render(){
        let list = this.displayList();
        let data;
        if(this.state.specificPlace){
            data = this.state.specificPlace.result;
        }
        return (
            <div id="listPage">
                <button onClick={this.props.toggle}>← Back</button>
                {list}
                <ModalComponent
                    isOpen={this.state.modalIsOpen}
                    isClosed={this.closeModal}
                    data={data ? data : "NO DATA"}
                />
            </div>
        )
    }
}

export default List;