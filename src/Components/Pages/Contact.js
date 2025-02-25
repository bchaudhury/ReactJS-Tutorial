import React from "react";

function Contact() {
    return (
        <div>
        <section className="py-3 bg-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 my-auto">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="col-md-8 my-auto">
                        <h6 className="float-end">
                            Home / Contact Us
                        </h6>
                    </div>                  
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="main-heading">How can we help you?</h2>
                        <div className="underline" ></div>
                        <p>
                            Thank you for your interest in our products. Please provide the following information and expect a response within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Contact;