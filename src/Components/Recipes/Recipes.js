import React, { Component } from 'react'
import RecipeCards from './Cards/RecipeCards'

class Recipes extends Component {
    state = {
        recipes: []
    }

    getRecipes = async (e) =>{
        e.preventDefault();
        let search_value = document.getElementById("search_field").value.toLowerCase();
        try{
            const myKey = "apiKey=3e8277975b66429f8265cafa0b992076"
            await fetch(`https://api.spoonacular.com/recipes/complexSearch?${myKey}&query=${search_value}&addRecipeInformation=true`)
            .then((res) => res.json())
            .then(
                data => {
                    this.setState({
                        food: data.results
                    });
                    if(data.results.length === 0){
                        window.alert("Please check your spelling or there isn't any recipes.")
                    }
                })
            } catch(err){
                console.log(err)
            }
            console.log(this.state.food)
        
    }

    randomRecipes = async () =>{
        const myKey = "apiKey=3e8277975b66429f8265cafa0b992076"

        try{
            await fetch(`https://api.spoonacular.com/recipes/random?${myKey}&number=10`)
            .then((res) => res.json())
            .then(
                data => {
                    this.setState({
                        food: data.recipes
                    })});
        } catch(err){
            console.log(err)
        }
        console.log(this.state.food)
    }

    componentDidMount() {
        this.randomRecipes();
    }

    render() {
        return(
            <main>
                <section className="hero_recipes">
                    <form onSubmit={this.getRecipes}>
                        <input type="text" placeholder="Search for a recipe.." name="search2" id="search_field"/>
                    </form>
                </section>
                <section className="recipes">
                    {this.state.food && this.state.food.map((recipe, index) => {
                        return (
                            <RecipeCards 
                            image={recipe.image}
                            title={recipe.title}
                            instructions={recipe.analyzedInstructions}
                            summary={recipe.summary}/>
                        )
                    })}
                </section>
            </main>
        )
    }
}

export default Recipes;