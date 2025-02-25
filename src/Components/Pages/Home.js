import React from "react";
import Slider from "../Includes/Slider";
import { Link } from "react-router-dom";
import VMC from "./Inc/VMC";
import Products from "./Inc/Products";

function Home() {
    return (
        <div>
            <Slider />
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className="main-heading">Dummy Company</h2>
                                <div className="underline mx-auto" ></div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <Link to="/about" className="btn btn-primary">Read More</Link>
                            </div> 
                        </div>
                    </div>
                </section> 

                <VMC />
                <Products />

 
        </div>
    );
}

export default Home;


        
  
