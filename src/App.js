import './script.js';
import './App.css';

function App() {
  return (
    <>
<div id="container">
    <section id="navbar">
    <img height="43" href="index.html" src="./img/logo.png" alt="Brand_logo"/>
        <div id='nav-desktop'>
        <ul id='elements'>
            <li> <a className="active" href="index.html">Home</a> </li>
            <li> <a href="shop.html">Shop</a> </li>
            <li> <a href="blog.html">Blog</a> </li>
            <li> <a href="about.html">About</a> </li>
            <li> <a href="contact.html">Contact</a> </li>
            <li> <a href="cart.html"><img height="30" src="./img/market.png" alt=""/></a> </li>
        </ul>
        </div>
        <div id='nav-mobile'>
            <img height="30" src="./img/market.png" alt=""/>
            <i id='bar' className='fas fa-outdent'></i>
        </div>
    </section>

    
    <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off</p>
        <button className="forbut">Shop Now</button>
    </section>
    <section id="feature-section" className="section-p1">
        <h1>Key Features</h1>
        <div id="features">
            <div id="feature-box">
                <img src="./img/features/f1.png" alt="Mobile phone"/>
                <h6>Free Shipping</h6>
            </div>
            <div id="feature-box">
                <img src="./img/features/f2.png" alt="Mobile phone"/>
                <h6>Online Order</h6>
            </div>
            <div id="feature-box">
                <img src="./img/features/f3.png" alt="Mobile phone"/>
                <h6>Save Money</h6>
            </div>
            <div id="feature-box">
                <img src="./img/features/f4.png" alt="Mobile phone"/>
                <h6>Promotions</h6>
            </div>
            <div id="feature-box">
                <img src="./img/features/f5.png" alt="Mobile phone"/>
                <h6>Happy Sell</h6>
            </div>
            <div id="feature-box">
                <img src="./img/features/f6.png" alt="Mobile phone"/>
                <h6>F24/7 Support</h6>
            </div>
        </div>
    </section>
    <section id="products-section" className="section-p1">
        <h1>Featured Products</h1>
        <p>Summer Collection New Morden Design</p>
        <div id="fe-products-row1">
            <div id="fe-box">
                <img src="./img/products/f1.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$69</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f2.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$84</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f3.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$78</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f4.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f5.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f6.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f7.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$45</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/f8.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$50</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </section>
    <section id="special-offer" className="section-p1">
        <h5>Repair Services</h5>
        <h2>Up to <span>70% Off</span>-All t-Shirts & Accessories</h2>
        <button className="forbut">Explore More</button>
    </section>
    <section id="products-section" className="section-p1">
        <h1>Featured Products</h1>
        <p>Summer Collection New Morden Design</p>
        <div id="fe-products-row1">
            <div id="fe-box">
                <img src="./img/products/n1.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$69</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n2.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$84</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n3.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$78</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n4.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n5.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n6.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$65</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n7.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$45</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
            <div id="fe-box">
                <img src="./img/products/n8.jpg" alt=""/>
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div id="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <div id="price-shop">
                    <h3>$50</h3>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </section>
    <section id="sm-banner" className="section-p1">
        <div id="banner-one">
            <span>crazy deals</span>
            <h3>buy 1 get 1 free</h3>
            <p>The best classic dress is on sale at cara</p>
            <button className="forbut">Learn More</button>
        </div>
        <div id="banner-one">
            <span>spring/summer</span>
            <h3>upcomming season</h3>
            <p>The best classic dress is on sale at cara</p>
            <button className="forbut">Learn More</button>
        </div>
    </section>
    <section id="sm-sm-banner" className="section-p1">
        <div id="bannerthree">
            <h2>SEASONAL SALE</h2>
            <h4>Winter Collection -50% OFF</h4>
        </div>
        <div id="bannerthree">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h4>Spring/Summer 2022</h4>
        </div>
        <div id="bannerthree">
            <h2>T-SHIRTS</h2>
            <h4>New Trendy Prints</h4>
        </div>
    </section>
    <section id="news-letter" className="section-p1">
        <div id="news-msg">
            <h3>Sign Up For Newsletters</h3>
            <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
        </div>
        <div id="input-box">
            <input type="email" placeholder="Your email address"/>
            <button className="forbut">Sign Up</button>
        </div>
    </section>
    <section id="footer" className="section-p1">
        <div id="footer-one">
            <img src="./img/logo.png" alt=""/>
            <h4>Contact</h4>
            <p><strong>Address:</strong>562 Wellington Road,Street 32 San Francisco</p>
            <p><strong>Phone:</strong>+01 2222 365/(+91) 01 2345 6789 </p>
            <p><strong>Hours:</strong>10:00 - 18:00 Mon - Sat</p>
            <h4>Follow Us</h4>
            <div id="social-links">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
        <div id="footer-two">
            <h4>About</h4>
            <a href="/">About Us</a>
            <a href="/">Delivery Information</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Contact Us</a>
        </div>
        <div id="footer-three">
            <h4>My Account</h4>
            <a href="/">Sign In</a>
            <a href="/">View Cart</a>
            <a href="/">My Wishlist</a>
            <a href="/">Track My Order</a>
            <a href="/">Help</a>
        </div>
        <div id="footer-four">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div id="download-but">
                <img src="img/pay/app.jpg" alt=""/>
                <img src="img/pay/play.jpg" alt=""/>
            </div>
            <div id="pay-gatew">
                <p>Secured Payement Gateways</p>
                <img src="./img/pay/pay.png" alt=""/>
            </div>
        </div>
    </section>
    <div id="copy-right">
        <p>© 2021,Aravind -HTML CSS Ecommerce Template</p>
    </div>
</div>
    </>
  );
}

export default App;
