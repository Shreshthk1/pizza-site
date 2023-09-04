import '../Styles/Nav.css'
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import NavBar from './Navbar'

export default function Home(props) {
    return(
        <div className='Home'>
<NavBar></NavBar>
            <main className='Content'>
                {/*  Stock photo from https://pixabay.com/videos/pizza-food-italian-kitchen-123629/*/}
                    <video src='./videos/Pizza_main.mp4' playsInline autoPlay muted loop ></video>
                    <div className='Slogan'>
                        <h1 >Where Every Bite's a Delight!</h1>
                        <Link to="/order" className='OrderButton'>Order Now!</Link>
                    </div>                    
            </main>    
            <main>

            </main>
        </div>
    )
}