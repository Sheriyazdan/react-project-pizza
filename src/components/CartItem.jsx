import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartPrice } from '../redux/slices/priceSlice'
function CartItem({ id, objPizza, setRenderCard, renderCard }) {
    const dispatch = useDispatch()
    const [AmountItems, setAmountItems] = useState(1)
    const myCard = useRef()
    const minusRef = useRef()
    const removeToCard = () => {
        myCard.current.remove()
        axios.delete(`https://61e1476a63f8fc0017618b27.mockapi.io/cart_buy_to_pizzas/${id}`)
        setRenderCard()
    }
    const [priceCard, setPriceCard] = useState(objPizza.price)
    let count = AmountItems
    let Myprice = objPizza.price
    const AmoundIncrement = () => {
        count++
        setAmountItems(count)
        Myprice = Myprice * count
        setPriceCard(Myprice)
        if (count == 0) {
            count = 1
        }
        else if (count == 1) {
            minusRef.current.setAttribute("disabled", "true");
        }
        else {
            minusRef.current.removeAttribute("disabled")
        }
        dispatch(cartPrice(Myprice))
    }

    const AmoundDecrement = () => {
        count--
        if (count == 0) {
            count = 1
        }
        else if (count == 1) {
            minusRef.current.setAttribute("disabled", "true");
        }
        else {
            minusRef.current.removeAttribute("disabled")
        }
        setAmountItems(count)
        Myprice = priceCard - objPizza.price
        setPriceCard(Myprice)
        dispatch(cartPrice(Myprice, 'minus'))
    }
    useEffect(() => {
        if (AmountItems == 1) {
            minusRef.current.setAttribute("disabled", "true");
        }
        dispatch(cartPrice(Myprice))

    }, [])

    return (
        <div className="cart__item" ref={myCard}>
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{objPizza.name}</h3>
                <p>{objPizza.sizePizza}, {objPizza.typePizza} см.</p>
            </div>
            <div className="cart__item-count">
                <div ref={minusRef} className="button button--outline button--circle cart__item-count-minus" onClick={() => AmoundDecrement()}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                    </svg>

                </div>
                <b>{AmountItems}</b>
                <div className="button button--outline button--circle cart__item-count-plus" onClick={() => AmoundIncrement()}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                    </svg>

                </div>
            </div>
            <div className="cart__item-price">
                <b>{priceCard} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle" onClick={(id) => removeToCard(id)}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default CartItem