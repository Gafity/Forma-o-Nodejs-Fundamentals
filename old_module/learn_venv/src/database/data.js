export async function connectToDatabase(user, password) {
  if (user === "naruto" && password === "uzumaki") {
    console.log("conexão com banco de dados estabelecida")
  } else {
    console.log("Falha de login, não foi possível se conectar ao banco de dados")
  }
}


