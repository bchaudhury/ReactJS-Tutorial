import React from "react";

function About() {
    return (
        <div>
            <section className="py-3 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>                  
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="main-heading">Our Company</h2>
                            <div className="underline" ></div>
                            <p>
                                Incrementors is an Award-Winning Digital Marketing Agency, 2021 Best SEO Agency by Design Rush and top #10 Most Reviewed SEO companies in 2021 by The Manifest, also one of the fastest-growing company, 2021 by Business Connect and Most Innovative Company, 2025 by Industry Era.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;