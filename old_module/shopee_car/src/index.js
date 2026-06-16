import * as cartService from "./src/service/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []

const item1 = await createItem("hotwheels ferrari", 20.99, 1)

const item2 = await createItem("hotwheels lamborghini", 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myWhishList, item2)
await cartService.displaycart(myCart)

await cartService.calculateTotal(myCart)

await cartService.calculateTotal(myCart)
await cartService.deleteItem(myCart, item2.name)
await cartService.removeItem()

console.log(item2.subtotal())



