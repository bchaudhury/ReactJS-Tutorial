import React from "react";

function Footer() {

    return(
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <p className="text-warning" align="justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            {/* <li><a href="/products">Products</a></li> */}
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <p className="text-warning">
                            <strong>Address:</strong> 123, Lorem Ipsum, USA<br />
                            <strong>Phone:</strong> +123 456 7890<br />
                            <strong>Email:</strong> info@dummycompany.com
                        </p>    
                    </div>     
                </div> 
            </div>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="text-info">
                            &copy; 2025 Dummy Company. All Rights Reserved.
                        </p>
                    </div>
                </div>  
            </div>
        </footer>
    );
}

export default Footer;