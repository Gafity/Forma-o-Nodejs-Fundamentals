async function addItem(userCart, item) {
  userCart.push(item)
}

async function calculateTotal(userCart) {
  return userCart.reduce((total, item) => total + item.subtotal(), 0)
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if (index != -1) {
    userCart.splice(index, 1)
  }

}

async function removeItem(userCart, index) {
  const deleteIdex = index - 1
  if (index >= 0 && index < userCart.lenght) {
    userCart.splice(deleteIdex, 1)
  }


}

async function displayCart(userCart) {
  console.log("Shopee cart list:")
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} |
        ${item.quantity} | Subtotal ${item.subtotal}`
    )

  })
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart }
