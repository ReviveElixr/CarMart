import React from "react";
import { useState } from "react";
// import image1 from '../../public/images/din.png';
import car2 from './car2.png';
import car3 from './car3.png';
import car4 from './car4.png';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './home.css';
const Home = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    
    const history = useHistory();

    const PostData = async(e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/getInTouch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, phone, email, msg
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.status == 422 || !data) {
            window.alert("anuthorize request!!");
            console.log("anuthorize request !");
        } else {
            window.alert("get In touch soon !");
            console.log("message received");
            history.push("/home");
        }

    }
    return (
        <>
            <body>
                <nav>
                    <div class="wrapper">
                        <div class="logo">HarshitCar</div>

                        <ul class="nav-links">
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Model">Model</a></li>
                            <li><a href="#Offers">Offers</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <header id="Home">
                    <div class="content">
                        <h1>Let's get you</h1>
                        <h1>on the road</h1>
                    </div>

                    <a href="#"><div class="btn">Request a Quote</div> </a>
                </header>

                <div class="section1" id="Model">
                    <div class="flex">
                        <div class="container-text">
                            <h1>
                                Micharlet<br />
                                Mission
                            </h1>
                        </div>
                        <div class="container">
                            <img src={car2} alt="image" />
                        </div>
                    </div>

                    <div class="flex">
                        <div class="container">
                            <img src={car3} alt="image" />
                        </div>
                        <div class="container-text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                                quibusdam magnam qui ut vitae cupiditate omnis fugiat consectetur
                                nulla mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Deserunt, enim?
                            </p>
                        </div>
                    </div>
                </div>

                <div class="section2" id="Offers">
                    <div class="info">
                        <h1>Current Offers</h1>
                        <p>
                            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, atque inventore eveniet molestias mollitia aut. Ea
                            deleniti illo labore.
                        </p>
                        <p>
                            2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, atque inventore eveniet molestias mollitia aut. Ea
                            deleniti illo labore.
                        </p>

                        <p>
                            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, atque inventore eveniet molestias mollitia aut. Ea
                            deleniti illo labore.
                        </p>

                        <p>
                            4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cupiditate, atque inventore eveniet molestias mollitia aut. Ea
                            deleniti illo labore.
                        </p>
                    </div>

                    <div class="img">
                        <img src={car4} alt="" />
                    </div>
                </div>

                <footer id="Contact">
                    <div class="contact-content">
                        <h1>Footer of my page</h1>




                        <form method="POST">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                            <label>
                                Phone Number:
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                            <label>
                                Message:
                                <input
                                    type="text"
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                />
                            </label>
                            {/* <label>
                                Password:
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label> */}
                            <button type="button" onClick={PostData}>
                                Get In Touch
                            </button>
                        </form>





                        {/* <div class="contact">
                            <div class="cover">
                                <h3>Email Address</h3>
                                <p>hello@someone.com</p>
                            </div>

                            <div class="cover">
                                <h3>Mailing Address</h3>
                                <p>123 Anywhere, Any City</p>
                            </div>

                            <div class="cover">
                                <h3>Phone Number</h3>
                                <p>(+123) 123 456 6788</p>
                            </div>
                        </div> */}
                    </div>
                </footer>
            </body>


        </>
    );
}



export default Home;