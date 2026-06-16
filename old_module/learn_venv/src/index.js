import { connectToDatabase } from "./database/data.js"
import { loadEnvFile } from "node:process"
loadEnvFile()

async function main() {
  await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORD)

}

main()
