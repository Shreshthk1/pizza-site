import '../Styles/Nav.css'
import '../Styles/Home.css'

export default function Home(props) {
    return(
        <div className='Home'>
            <main>
                <nav>
                    <span className="logo">
                        {/* <!-- Logo from https://www.pngegg.com/en/png-zjmhj --> */}
                        <img src="./images/logo.png" alt="Logo" width={"15%"}></img>
                        <h1>SliceRite</h1>
                    </span>
                    <span className="links">
                        <a href="/order.html">
                            Order
                        </a>
                        <a href="/find a store">
                            Find a location
                        </a>
                        <a href="/contact.html">
                            Contact Us
                        </a>
                    </span>
                </nav>
            </main>
            <main className='Content'>
                {/*  Stock photo from https://pixabay.com/videos/pizza-food-italian-kitchen-123629/*/}
                    <video src='./videos/Pizza_main.mp4' playsInline autoPlay muted loop ></video>
                    <div className='Slogan'>
                        <h1 >Where Every Bite's a Delight!</h1>
                        <button>Order Now!</button>
                    </div>
                    
                    
            </main>    
            <main>

            </main>
        </div>
    )
}