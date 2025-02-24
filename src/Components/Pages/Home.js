import React from "react";
import Slider from "../Includes/Slider";
import { Link } from "react-router-dom";

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
                                <p className="text-muted">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <Link to="/about" className="btn btn-primary">Read More</Link>
                            </div> 
                        </div>
                    </div>
                </section> 

                {/* <!-- Vision, Mission and Values --> */}

                <section className="section bg-c-light border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-mb-12 mb-4 text-center">
                                <h2 className="main-heading">Vision, Mission and Values</h2>
                                <div className="underline mx-auto" ></div>
                                <div className="col-md-4" text-center>
                                    <h6>Our Vision</h6>     
                                    <p>
                                        We believe that buying glasses should be easy and fun. It should leave you happy and good-looking, with money in your pocket. We also believe that everyone has the right to see.
                                    </p>  
                                </div>
                                <div className="col-md-4" text-center>
                                    <h6>Our Mission</h6>     
                                    <p>
                                        We offer the most affordable and stylish eyewear. We are committed to providing a customer experience that is second to none. We are committed to providing a customer experience that is second to none.
                                    </p>  
                                </div>                         
                                <div className="col-md-4" text-center>
                                    <h6>Our Values</h6>     
                                    <p>
                                        We are passionate about our customers, our products, and our people. We strive to exceed expectations and be the best in everything we do.
                                    </p>  
                                </div>                                                  
                            </div> 
                        </div>
                    </div>
                </section> 


            {/* <div className='container'>
            <div class = 'card mt-4'>
                <div class = 'card-body'>
                    <h2>Home</h2>
                    <p>Welcome to Home page</p>
                </div>
            </div>
            </div> */}
        </div>
    );
}

export default Home;


        
  
