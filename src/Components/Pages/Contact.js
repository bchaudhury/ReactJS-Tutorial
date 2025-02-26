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
                <div className="card-shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h4>Our Contact Details</h4>
                                <div className="underline"></div>
                                <p>
                                    <strong>Address:</strong> 123, Main Road, New City, USA
                                </p>
                                <p>
                                    <strong>City:</strong> New City
                                </p>
                                <p>
                                    <strong>State:</strong> New State
                                </p>
                                <p>
                                    <strong>Zip Code:</strong> 123456
                                </p>
                                <p>
                                    <strong>Country:</strong> USA
                                </p>
                                <p>
                                    <strong>Location:</strong> <a href="https://www.google.com/maps/place/Party+City/@41.1230373,-74.0376732,13z/data=!3m1!5s0x89c2e84431371575:0xba852c33d7ee3e7a!4m10!1m2!2m1!1s123,+Main+Road,+New+City,+USA!3m6!1s0x89c2e8409819b555:0x89d39bacf683599d!8m2!3d41.0913889!4d-74.0038889!15sCh0xMjMsIE1haW4gUm9hZCwgTmV3IENpdHksIFVTQVocIhoxMjMgbWFpbiByb2FkIG5ldyBjaXR5IHVzYZIBC3BhcnR5X3N0b3Jl4AEA!16s%2Fg%2F12cp1w7p9?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" rel="noreferrer" target="_blank">View on Google Maps</a>
                                </p>
                                <p>
                                    <strong>Email: </strong>
                                    <a href="mailto:someone@example.com"> Send email</a>
                                </p>
                                <p>
                                    <strong>Phone:</strong> +123 456 7 890
                                </p>
                                <p>
                                    <strong>Website:</strong>
                                    <a href="https://www.example.com" target="_blank" rel="noreferrer"> www.example.com</a>
                                </p>
                            </div>
                            <div className="col-md-1 border-start border-4"/>
                            <div className="col-md-7 my-auto">                          
                                <form>
                                    <h4>
                                        Message Us
                                    </h4>
                                    <div className="underline"></div>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Name</label>
                                        <input type="text" id="name" className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email</label>
                                        <input type="email" id="email" className="form-control" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="message" className="form-label">Message</label>
                                        <textarea id="message" className="form-control" required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </section>
    </div>
    );
}

export default Contact;