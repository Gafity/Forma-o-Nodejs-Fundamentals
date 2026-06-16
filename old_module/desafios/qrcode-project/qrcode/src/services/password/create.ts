import { handle } from "./handle"


export async function createPassword() {
  const password = await handle()
  console.log(password)
}
