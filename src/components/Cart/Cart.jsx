import style from './Cart.module.scss'
import {state} from "../../state/state";
import {NavLink, Redirect} from "react-router-dom";
import React from "react";

const Cart = () => {

    // Если пользователь не авторизировался - редиректит на страницу логин
    if(state.isAuth === 'null') {
        return <Redirect to={'/login'}/>
    }

    let catalog = state.catalog.getCatalog()

    // Формируем список товаров в корзине
    let items = catalog.map(item => {
        if (item.inCart) {
            return (
                <CartItem key={item.id} count={item.count} id={item.id} img={item.img} name={item.name} price={item.price}/>
            )
        }
    })

    // Вычисляем сумму
    let sum = 0
    let summary = catalog.forEach(item => {
        if (item.inCart) {
            sum += Number(item.price) * Number(item.count)
        }
        return localStorage.setItem('summary', sum)
    })

    return (
        <div className={`${style.cartCon}`}>
            <div className={'container'}>
                <div className={`${style.wrap}`}>
                    <div className={`${style.title}`}><NavLink to={'/catalog'} className={`${style.bottom__btn}`}>Назад к каталогу</NavLink> Корзина с выбранными товарами</div>
                    <div className={`${style.cart}`}>
                        {items}
                    </div>
                    <div className={`${style.bottom}`}>
                        <div className={`${style.bottom__sum}`}>
                            Заказ на сумму: <span>{localStorage.getItem('summary')} ₽</span>
                        </div>
                        <div className={`${style.bottom__btn}`}>
                            Оформить заказ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CartItem = (props) => {

    let catalog = state.catalog.getCatalog()

    // Удаление из корзины
    const removeItem = (e) => {
        const id = e.currentTarget.value - 1
        state.removeFromCart(id)
    }

    const updateCount = (e) => {
        const id = e.currentTarget.id
        const count = e.current.value
        console.log(count)
        state.updateItemCount(id, count)
    }

    const decrementItem = (e) => {
        const id = e.currentTarget.value - 1
        state.decrementItem(id)
    }

    const incrementItem = (e) => {
        const id = e.currentTarget.value - 1
        state.incrementItem(id)
    }

    return (
        <div className={`${style.cartItem}`}>
            <div className={`${style.cartItem__img}`}>
                <img src={props.img} alt=""/>
            </div>
            <div className={`${style.cartItem__name}`}>
                Название: <span>{props.name}</span>
            </div>
            <div className={`${style.cartItem__price}`}>
                Цена: <span>{props.price} ₽</span>
            </div>
            <div className={`${style.cartItem__count}`}>
                Количество:
                <button value={props.id} onClick={decrementItem}>-</button>
                <span><input id={props.id} type="text" value={props.count}/></span>
                <button value={props.id} onClick={incrementItem}>+</button>
            </div>
            <button value={props.id} onClick={removeItem} className={`${style.cartItem__btn}`}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_153)">
                        <path d="M15.7043 15.0789L21.1221 20.4967C21.2726 20.6472 21.2726 20.891 21.1221 21.0415C21.0469 21.1169 20.9482 21.1544 20.8497 21.1544C20.751 21.1544 20.6525 21.1169 20.5774 21.0415L15.1189 15.5831L9.66045 21.0415C9.58509 21.1169 9.4866 21.1544 9.38811 21.1544C9.28961 21.1544 9.19093 21.1169 9.11577 21.0415C8.96525 20.891 8.96525 20.6472 9.11577 20.4967L14.5333 15.0789L9.11213 9.65737C8.96162 9.50686 8.96162 9.26301 9.11213 9.1125C9.26265 8.96218 9.50649 8.96218 9.65681 9.1125L15.1187 14.5748L20.5812 9.11269C20.7317 8.96237 20.9754 8.96237 21.1259 9.11269C21.2764 9.2632 21.2764 9.50705 21.1259 9.65756L15.7043 15.0789Z" fill="#D58C51"/>
                    </g>
                    <circle cx="15" cy="15" r="14.5" stroke="#D58C51"/>
                    <defs>
                        <clipPath id="clip0_11_153">
                            <rect width="12.24" height="12.24" fill="white" transform="matrix(-1 0 0 1 21.2402 9)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    )
}

export default Cart