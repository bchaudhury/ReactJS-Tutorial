import React from "react";
import Product1 from "../../Images/Spects1.jpeg"; 
import Product2 from "../../Images/Spects2.jpeg";
import Product3 from "../../Images/Spects3.jpeg";
import { Link } from "react-router-dom";

function Products() {

    return(

        <section className="bg-light border-top">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-4 text-center">
                    <h2 className="main-heading">Our Products</h2>
                    <div className="underline mx-auto" ></div>
                </div>
                
                <div className="col-md-4 text-center">
                    <div className="card shadow">
                        <img src={Product1} alt="Services" className="w-100 border-bottom rounded" />
                        <div className="card-body">
                            <h6>Product 1</h6>
                            <div className="underline mx-auto"></div>     
                            <p>
                                We believe that buying glasses should be easy and fun. It should leave you happy and good-looking, with money in your pocket. We also believe that everyone has the right to see.
                            </p>
                            <Link to="/products" className="btn btn-primary">Read More</Link>
                        </div>      
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card shadow">
                        <img src={Product2} alt="Services" className="w-100 border-bottom rounded" />
                        <div className="card-body">
                            <h6>Product 2</h6>
                            <div className="underline mx-auto"></div>     
                            <p>
                                We believe that buying glasses should be easy and fun. It should leave you happy and good-looking, with money in your pocket. We also believe that everyone has the right to see.
                            </p>
                            <Link to="/products" className="btn btn-primary">Read More</Link>
                        </div>      
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card shadow">
                        <img src={Product3} alt="Services" className="w-100 border-bottom rounded" />
                        <div className="card-body">
                            <h6>Product 3</h6>
                            <div className="underline mx-auto"></div>     
                            <p>
                                We believe that buying glasses should be easy and fun. It should leave you happy and good-looking, with money in your pocket. We also believe that everyone has the right to see.
                            </p>
                            <Link to="/products" className="btn btn-primary">Read More</Link>
                        </div>      
                    </div>
                </div>

            </div>    
        </div>
        </section>
    );

}

export default Products;