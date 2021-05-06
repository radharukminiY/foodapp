import React, {Component} from 'react';
import './categories.css';
import foodStore from "../../store/store";
//import favourite from "../Favourites/favourites";


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {categories: [],
            recipes: [],
            filterRecipes: []
        };
        this.getFoodData = this.getFoodData.bind(this);
        this.addRecipe = this.addRecipe.bind(this);

    }


    componentWillMount() {
        foodStore.on('change', this.getFoodData)
    }

    getFoodData() {
      // eslint-disable-next-line
        var foodData = foodStore.getFoodData();
        // eslint-disable-next-line
        this.setState({categories: foodData .categories,
        recipes: foodData.recipes, filterRecipes:foodData.recipes}
        )
    }

    filterRecipes(category){

        let filterRecipes = this.state.recipes.filter((recipe)=> {
            return category === recipe.category
        })
        this.setState({filterRecipes})
    }


    searchRecipes(inputString){
        return this.state.recipes.filter((recipe)=> {
            let keywords = recipe.name + recipe.category+recipe.details;
                return keywords.includes(inputString)
            })

        }

        addRecipe(){
        foodStore.setCartCount();
        }


    renderCategoryList() {
        return (
            <ul className="category-list">
                {this.state.categories.map((category) =>
                    (<li className="category-card" onClick = {this.filterRecipes.bind(this,category.name)}>
                        <span><img src = {category.image} alt=""/></span>
                        <span className="upper-case">{category.name}</span>

                    </li>)
                )}
            </ul>
        )
    }


    renderRecepies = ()=>(
        <ul className="recepie-list">
            {this.state.filterRecipes && this.state.filterRecipes.map((recipe)=>{
                return (<li className="recipe-card">
                    <img src={recipe.image} alt=""/>
                    <div className="recipe-footter">
                        <div className="recipe-details">
                            <span>{recipe.name}</span>
                            <span>₹{recipe.price}</span>
                        </div>
                        <button onClick={this.addRecipe} className="upper-case theme-color cursor-pointer">Add to bag</button>
                    </div>
                </li>)
            })}
        </ul>
    )



    render() {
        return (
            <div className="category-section">
                <div className="search-bar"></div>
                <div className="upper-case sub-heading">Select Categories</div>
                    {this.renderCategoryList()}
                    {this.renderRecepies()}

            </div>
        )

    }


}

export default Categories;
