import hookahImg from "../assets/img/hookahs/01.png";
import login from "../components/Login/Login";
import catalog from "../components/Catalog/Catalog";

export const state = {

    isAuth: localStorage.getItem('isAuth'),

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
            {id: 1, img: hookahImg, name: 'Don Smart', price: 10000, inCart: false},
            {id: 2, img: hookahImg, name: 'Don Smart 2', price: 5000, inCart: false},
            {id: 3, img: hookahImg, name: 'Don Smart 3', price: 7000, inCart: false},
            {id: 4, img: hookahImg, name: 'Don Smart 4', price: 14000, inCart: false},
            {id: 5, img: hookahImg, name: 'Don Smart 5', price: 17000, inCart: false},
            {id: 6, img: hookahImg, name: 'Don Smart 6', price: 22000, inCart: false},
        ],
        // localStorage.setItem('catalog', JSON.stringify(this._catalog)),
        setCatalog() {
            return localStorage.setItem('catalog', JSON.stringify(this._catalog))
        },
        getCatalog() {
            return JSON.parse(localStorage.getItem('catalog'))
        },
    },
    updateCount() {
       // this.cart.count = 0

        let count = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                // this.cart.summary += item.price
                count += 1
            }
            // return this.cart.summary
        })
        return localStorage.setItem('count', count)

        // let count = 0
        // this.catalog._catalog.forEach(item => {
        //     if (item.inCart) {
        //         // this.cart.count += 1
        //         count += 1
        //     }
        //     // return this.cart.count
        //     return localStorage.setItem('count', count)
        // })
    },
    updateCost() {
        // this.cart.summary = 0
        let sum = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                // this.cart.summary += item.price
                sum += item.price
            }
            // return this.cart.summary
        })
        return localStorage.setItem('summary', sum)

        // return localStorage.setItem('catalog', JSON.stringify(catalog))
        // this.catalog._catalog.forEach(item => {
        //     if (item.inCart) {
        //         // this.cart.summary += item.price
        //         sum += item.price
        //     }
        //     // return this.cart.summary
        //     return localStorage.setItem('summary', sum)
        // })
    },
    addToCart(id) {
        // this.catalog._catalog[id - 1].inCart = true
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        // console.log(catalog)
        catalog[id].inCart = true
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    removeFromCart(id) {
        // this.catalog._catalog[id - 1].inCart = false
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog[id - 1].inCart = false
        return localStorage.setItem('catalog', JSON.stringify(catalog))
    },
    // Находим количество всех товаров в корзине
    getCartCount() {
        // let count = this.cart.count
        let count = 0
        let catalog = JSON.parse(localStorage.getItem('catalog'))
        catalog.forEach(item => {
            if (item.inCart) {
                // this.cart.summary += item.price
                count += 1
            }
            // return this.cart.summary
            return localStorage.setItem('count', count)
        })

        // let count = 0
        // this.catalog._catalog.forEach(item => {
        //     if (item.inCart) {
        //         count += 1
        //     }
        //     // return this.cart.count = count
        //     return localStorage.setItem('count', count)
        // })
    },
}
