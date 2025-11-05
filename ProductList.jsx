import React from "react";


const ProductList = () =>{
    const products = [
        { id : "p1", name : "Tv" , price : 125000},
        { id : "p2", name : "Fridge" , price : 90000},
        { id : "p3", name : "Camera" , price : 155000},
        { id : "p4", name : "SmartWatch" , price : 6000},
        { id : "p5", name : "Laptop" , price : 96000},
        { id : "p6", name : "Speaker" , price : 65000},
                        

    ]
    return(
        <>
        <div className="container">
            <h1>ProductList</h1>
            <ul className="list">
                {products.map((product) => {
                    return(
                    <li className="itemList" key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price  : ₹{product.price}</p>

                    </li>
                    )
                })}
               
            </ul>
        </div>
        
        </>
    );
};
export default ProductList;