const { getFullName, productType } = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")

async function main() {
  console.log("Hello, I'm Gabriel!")
  getFullName("408", "mousepad")
  // product.getProductLabel("Kabbum")
  console.log(config.DevArea.production)
  console.log(config.client.device)
  console.log(productType.tax)
  database.connectToDatabase
  database.disconnetDatabase
}

main()
