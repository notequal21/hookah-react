import style from './Catalog.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import {state} from "../../state/state";

const Catalog = () => {

    // Если пользователь не авторизировался - редиректит на страницу логин
    if(state.isAuth === 'null') {
        return <Redirect to={'/login'}/>
    }

    let catalog = state.catalog.getCatalog()

    // Формируем список товаров в каталоге
    let items = catalog.map(item => <CatalogItem
        key={item.id} id={item.id} img={item.img}
        name={item.name} price={item.price} inCart={item.inCart}/>)

    let logout = () => {
        localStorage.setItem('isAuth', 'null')
        state.updateAuthStatus()
    }

    // Вычисляем сумму
    let sum = 0
    let summary = catalog.forEach(item => {
        if (item.inCart) {
            sum += Number(item.price) * Number(item.count)
        }
        return localStorage.setItem('summary', sum)
    })

    // Находим количество товара
    let count = 0
    let itemsCount = catalog.forEach(item => {
        if (item.inCart) {
            count += item.count
        }
        return localStorage.setItem('count', count)
    })

    return (
        <div className={`${style.catalog}`}>
            <div className={`container`}>
                <div className={`${style.header}`}>
                    <NavLink to={'/login'} onClick={logout} className={`${style.logout__btn}`}>
                        Выйти
                    </NavLink>
                    <div className={`${style.header__title}`}>
                        Каталог
                    </div>
                    <div className={`${style.header__info}`}>
                        <div className={`${style.header__infoBody}`}>
                            <div className={`${style.header__infoGoods}`}>
                                {localStorage.getItem('count')} товара
                            </div>
                            <div className={`${style.header__infoSum}`}>
                                на сумму {localStorage.getItem('summary')} ₽
                            </div>
                        </div>
                        <NavLink to={'/cart'} className={`${style.header__infoBtn}`}>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="currentColor"/>
                                <path d="M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7569 26.6815 14.5033 26.1992 14.6727C25.717 14.8421 25.4635 15.3703 25.6329 15.8525L28.2157 23.2042H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.8421 22.8008 14.6727C22.3187 14.5033 21.7904 14.7569 21.621 15.239L18.8226 23.2042H14.9254C14.4143 23.2042 14 23.6185 14 24.1296C14 24.6407 14.4143 25.055 14.9254 25.055H15.1789L17.4465 33.331C17.6163 33.9505 18.1793 34.3801 18.8217 34.3801H30.2413C30.8871 34.3801 31.4522 33.9461 31.6189 33.3222L33.8274 25.0549H34.0746C34.5857 25.055 35 24.6407 35 24.1296C35 23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.355C21.4678 31.8661 21.0535 32.2804 20.5425 32.2804C20.0314 32.2804 19.6171 31.8661 19.6171 31.355V26.6562C19.6171 26.1452 20.0314 25.7309 20.5425 25.7309C21.0535 25.7309 21.4678 26.1452 21.4678 26.6562V31.355ZM25.4254 31.355C25.4254 31.8661 25.011 32.2804 24.5 32.2804C23.9889 32.2804 23.5746 31.8661 23.5746 31.355V26.6562C23.5746 26.1452 23.9889 25.7309 24.5 25.7309C25.011 25.7309 25.4254 26.1452 25.4254 26.6562V31.355ZM29.3829 31.355C29.3829 31.8661 28.9686 32.2804 28.4575 32.2804C27.9464 32.2804 27.5321 31.8661 27.5321 31.355V26.6562C27.5321 26.1452 27.9464 25.7309 28.4575 25.7309C28.9686 25.7309 29.3829 26.1452 29.3829 26.6562V31.355Z" fill="white"/>
                            </svg>
                        </NavLink>
                    </div>
                </div>

                <div className={`${style.catalogBody}`}>
                    {items}
                </div>
            </div>
        </div>
    )
}

const CatalogItem = (props) => {

    let catalog = state.catalog.getCatalog()

    const addToCart = (e) => {
        if (catalog[e.currentTarget.value - 1].inCart) {
            return state.removeFromCart(e.currentTarget.value - 1)
        }
        return state.addToCart(e.currentTarget.value - 1)
    }

    return (
        <div className={`${style.catalogBody__item}`}>
            <div className={`${style.catalogBody__itemImg}`}>
                <img src={props.img} alt=""/>
            </div>
            <div className={`${style.catalogBody__itemName}`}>
                {props.name}
            </div>
            <div className={`${style.catalogBody__itemPrice}`}>
                {props.price} ₽
            </div>
            {
                props.inCart ?
                    <button value={props.id} onClick={addToCart} className={`${style.catalogBody__itemBtn}`}>
                        Убрать из корзины
                    </button>
                    : <button value={props.id} onClick={addToCart} className={`${style.catalogBody__itemBtn}`}>
                        В корзину
                    </button>
            }
        </div>
    )
}

export default Catalog