import React, { Fragment } from 'react';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>
                        <span style={{ textTransform: "capitalize" }}>
                            {ingKey}: {props.ingredients[ingKey]}
                        </span>
                    </li>
        });

    return (

        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Fragment>
    )
};

export default orderSummary;