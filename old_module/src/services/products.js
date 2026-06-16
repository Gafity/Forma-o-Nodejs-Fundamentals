const productType = { version: "digital", tax: "x1" }
async function getFullName(codeId, productName) {
  return console.log(codeId + "--" + productName)
}

async function getProductLabel(productName) {
  console.log("Product" + productName)
  await doBreakLine()
}

const apiURL = { url: "www.google.com/api" }

async function doBreakLine() {
  console.log("\n")
}
module.exports = { getFullName, getProductLabel, productType }
