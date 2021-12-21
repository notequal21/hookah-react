import hookahImg from "../assets/img/hookahs/01.png";
import catalog from "../components/Catalog/Catalog";

export const state = {

    isAuth: localStorage.getItem('isAuth'),
    updateAuthStatus() {
        this.isAuth = localStorage.getItem('isAuth')
        if (localStorage.getItem('isAuth') === 'null') {
            state.catalog.setCatalog()
            localStorage.setItem('isAuth', 'null')
            localStorage.setItem('count', 0)
            localStorage.setItem('summary', 0)
        }
    },

    auth: {
        login: 'root',
        password: 'root'
    },

    cart: {
        count: localStorage.getItem('count'),
        summary: localStorage.getItem('summary'),
        // Находим сумму всех товаров в корзине
        getCartSum() {
            return this.summary
        },
    },
    catalog: {
        _catalog: [
            {id: 1, img: hookahImg, name: 'Don Smart', price: 10000, inCart: false, count: 0},
            {id: 2, img: hookahImg, name: 'Don Smart 2', price: 5000, inCart: false, count: 0},
            {id: 3, img: hookahImg, name: 'Don Smart 3', price: 7000, inCart: false, count: 0},
            {id: 4, img: hookahImg, name: 'Don Smart 4', price: 14000, inCart: false, count: 0},
            {id: 5, img: hookahImg, name: 'Don Smart 5', price: 17000, inCart: false, count: 0},
            {id: 6, img: hookahImg, name: 'Don Smart 6', price: 22000, inCart: false, count: 0},
        ],
        setCatalog() {
            return localStorage.setItem('catalog', JSON.stringify(this._catalog))
        },
        getCatalog() {
            return JSON.parse(localStorage.getItem('catalog'))
        },
    },
    updateCount() {
        let count = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                count += 1
            }
        })
        return localStorage.setItem('count', count)
    },
    updateCost() {
        let sum = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                sum += item.price
            }
        })
        return localStorage.setItem('summary', sum)
    },
    getItemCount(id) {
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        return catalog[id].count
    },
    decrementItem(id) {
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        if (catalog[id].count == 1) {
            return
        } else {
            catalog[id].count -= 1
        }
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    incrementItem(id) {
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog[id].count += 1
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    updateItemCount(id, count) {
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        if (catalog[id].count <= 0) {
            catalog[id].inCart = false
        } else {
            catalog[id].count = count
        }
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    addToCart(id) {
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog[id].inCart = true
        catalog[id].count = 1
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    removeFromCart(id) {
        debugger
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog[id].inCart = false
        catalog[id].count = 0
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    // Находим количество всех товаров в корзине
    getCartCount() {
        let count = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                count += 1
            }
            return localStorage.setItem('count', count)
        })
    },
}
