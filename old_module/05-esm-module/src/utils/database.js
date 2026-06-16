const databaseType = { userType: "admin", typeData: "database" }
async function connectToDatabase(dataName) {
  console.log(`conectado ao banco de dados. ${dataName}`)
}

async function desconecDataBase(dataName) {
  console.log(`desconectando do banco de dados ${dataName}.`)
}

export { connectToDatabase, desconecDataBase, databaseType }
