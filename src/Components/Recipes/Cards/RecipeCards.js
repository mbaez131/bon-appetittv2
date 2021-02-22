import React from 'react';

class RecipeCards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true
        };
        this.buttonClick = this.buttonClick.bind(this)
    }
    buttonClick = (e) => {
        e.preventDefault();
        if (this.state.hidden) {
            this.setState({hidden:false})
        } else {
            this.setState({hidden:true})
        }
    }

    render(){
        return(
            <div className="Recipe-Cards">
                <h2>{this.props.title}</h2>
                <img src={this.props.image} className="recipe-image"/>
                <button onClick={this.buttonClick}>{this.state.hidden? "Show Recipe":"Hide Recipe"}</button>
                <div className={this.state.hidden? "Hidden-Recipe":"Shown-Recipe"}>
                    <h3>Instructions!</h3>
                    
                    {this.props.instructions && this.props.instructions.map((step)=>{
                    return(
                        <ol>
                            {step.steps && step.steps.map((stepss) => {
                            return (
                                <>
                                    <li>{stepss.step}</li>
                                </>
                            )
                            })}
                        </ol>
                    )
                    })}
                </div>
                 
            </div>
        )
    }
}

export default RecipeCards