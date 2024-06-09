import React from 'react';

const recipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true },
    ],
};

function RecipeTitle() {
    return (
        <div>
            <h2>{ recipe.title }</h2>
            <p>Rating: {recipe.feedback.rating} ({recipe.feedback.reviews} reviews)</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} style={{ textDecoration: ingredient.prepared ? 'line-through' : 'none' }}>
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeTitle;


// function RecipeTitle() {
//     const title = 'Mashed potatoes';
    
//     return (
//         <h2>{ title }</h2>
//     )
// };
// export default RecipeTitle;