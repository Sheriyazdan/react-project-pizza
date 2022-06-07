import axios from 'axios'
import { setCartActive } from '../../redux/slices/cardSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useRef, useEffect } from 'react'

function Pizza({ imageUrl, title, types, sizes, price, activeItemArr }) {
    const dispatch = useDispatch()
    const cartValue = useSelector(state => state.cart.cartValue)
    const typesPizza = ['тонкое', 'традиционное']
    const [clickTypes, setClickTypes] = useState(0)
    const [clickSizes, setClickSizes] = useState(0)
    const [addToCart, setAddToCart] = useState('Добавить')
    let ActiveItem = false
    activeItemArr.forEach(element => {
        if (element === title) {
            ActiveItem = true
        }
    })
    const typeSelector = useRef()
    const button = useRef()

    useEffect(() => {


    }, [])


    const clickToCart = () => {
        let typePizzaCard
        let sizePizzaCard
        const type = typeSelector.current.querySelectorAll('.pizza-block__selector ul')

        type[0].querySelectorAll('li.active').forEach(element => {
            sizePizzaCard = element.innerText
        })
        type[1].querySelectorAll('li.active').forEach(element => {
            typePizzaCard = element.innerText
        })
        const objPizzaCart = {
            price: cartValue.price,
            items: cartValue.items + 1
        }

        dispatch(setCartActive(objPizzaCart))

        const objPizza = {
            name: title,
            typePizza: typePizzaCard,
            sizePizza: sizePizzaCard,
            price: price
        }
        setAddToCart('Добавлено')
        button.current.classList.add('active')
        axios.post('https://61e1476a63f8fc0017618b27.mockapi.io/cart_buy_to_pizzas', { objPizza })
    }



    const onClicktoTypes = (index) => {
        setClickTypes(index)
    }
    const onClicktoSizes = (index) => {
        setClickSizes(index)
    }
    // if (ActiveItem = true) {
    //     debugger
    //     setAddToCart('Добавлено')
    // }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector" ref={typeSelector}>
                <ul>
                    {types.map((type, index) => (
                        <li onClick={() => onClicktoTypes(index)} key={index} className={clickTypes == index ? 'active' : null}>{typesPizza[type]}</li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li onClick={() => onClicktoSizes(index)} key={index} className={clickSizes == index ? 'active' : null}>{size}</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div ref={button} data-active={ActiveItem ? 'active' : ''} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span onClick={() => clickToCart()}>{ActiveItem ? 'Добавлено' : addToCart}</span>
                </div>
            </div>
        </div >
    )
}

export default Pizza