import '../Styles/Nav.css'
import NavBar from './Navbar'
import '../Styles/Order.css'
import { useState } from 'react'

export default function Order (props) {


    const pizzas = [
        {name:"Veggie" , pic: "./images/Pizzas/veggie.png"},
        {name: "Pepperoni", pic: "./images/Pizzas/pepperoni.png"},
        {name: "Cheese", pic: "./images/Pizzas/cheese.png"},
        {name: "Italian", pic: "./images/Pizzas/italian.png"}
    ]
    
    const [currIndex, setIndex] = useState(1)
    const [prevPizza, setPrevPizza] = useState(pizzas[currIndex] - 1)
    const [currPizza, setCurrPizza] = useState(pizzas[currIndex]);
    const [nextPizza, setNextPizza] = useState(pizzas[currIndex] + 1)

    const handleUpButton = () => {
        let temp = 0;
        if (currIndex != (pizzas.length - 1)) {
            temp = currIndex + 1; 
        }
        setIndex(temp)
        setCurrPizza(pizzas[temp])
        setPrevPizza(pizzas[temp - 1])
        setNextPizza(pizzas[temp + 1])
    }

    const handleDownButton = () => {
        let temp = 0;
        if (currIndex == 0) {
            temp = pizzas.length - 1
        }
        else if (currIndex === pizzas.length - 1){
            temp = 0
        } else{
            temp = currIndex - 1
        }
        setIndex(temp)
        setCurrPizza(pizzas[temp])
        setPrevPizza(pizzas[temp - 1])
        setNextPizza(pizzas[temp + 1])
    }

    return(
        <main className='Page'>
            <NavBar></NavBar>
            <div className='Orders'>
                {
                    <div className='Scroller'>
                        {/* <h1>{currPizza.name}</h1>
                        <img src={currPizza.pic} alt=''/> */}
                        {
                    
                            <div className='pizzaWheel'> 
                            <img className='prev' alt='pizza' src={prevPizza.pic}></img>
                            <img className='curr' alt='pizza' src={currPizza.pic}></img>
                            <img className='next' alt='pizza' src={nextPizza.pic}></img>
                            </div> 
                    
                        }
                    </div>
                    
                }
                <button onClick={handleUpButton}>UP</button>
                <button onClick={handleDownButton}>DOWN</button>
            </div>
        </main>
    )
}