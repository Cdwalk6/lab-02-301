import React from "react";
import card from "react-bootstrap/CardImg";







class HornedBeasts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0,
        };

        this.registerLike = this.registerLike.bind(this);
    }

    registerLike = () => {
        this.setState({ numberOfLikes: this.state.numberOfLikes + 1 });
    }

render() { 
    return (
        <>
            <card style={{ width: "18rem" }}>
                <card.Img
                variant="top"
                src={this.props.imageUrl}
                alt={this.props.title}
                width="30%"
                onClick={this.registerLike}
                />
                <card.Body>
                    <card.Title>{this.props.title}</card.Title>
                    <card.Text>{this.props.description}</card.Text>
                   <span> ❤ = {this.state.numberOfLikes}</span>
                </card.Body>
            </card>
        </>
    )
}

};

export default HornedBeasts;
