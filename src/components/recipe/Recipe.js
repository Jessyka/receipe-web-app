import React from'react';
import './Recipe.css'

export const Recipe = ({data}) => {
    const {label, image, calories, ingredients} = data
    return (
        <div className="recipe" data-testid='receipe-container'>
            <h1 className="recipe_title">{label}</h1>
            <div className="image_div">
                <img className="image" src={image} alt="" />
            </div>
            <p className="calories">Calories: {calories} Kcal</p>
            <h2>Ingredientes: </h2>
            <ul className="ingredients">
                {ingredients.map( (ingredient, index) =>(
                    <li className="ingredient" key={index}>
                        <i className="fas fa-caret-right" />{ingredient.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}