import '../Styles/Nav.css'
import NavBar from './Navbar'
import '../Styles/Order.css'

export default function Order (props) {


    const pizzas = [
        {name:"Veggie" , pic: "./images/Pizzas/pizza_veggie.png"}
    ]


    return(
        <main className='Page'>
            <NavBar></NavBar>
            <div className='Orders'>
                {pizzas.map(pizza => {
                    return(
                    <div className='Scroller'>
                        <h1>{pizza.name}</h1>
                        <img src={pizza.pic}/>
                    </div>
                    )
                })}
            </div>
        </main>
    )
}