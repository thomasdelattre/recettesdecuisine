import React from 'react';

class Recette extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: props.title
        };
    }
    var Ingredient = React.createClass({
        render: function(){
            return(
                <li>{this.props.ingredients}</li>
            );
        }
    });
    render(){
        
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul>
                    <Ingredient/>
                </ul>
            </div>
        );
    }
}

export default Recette;