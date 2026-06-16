export async function handle() {
  const characters: string[] = []
  let password: string = ""
  const ABC: string = "abcdefghijklmnopqrstuvwxyz"
  const passwordLength: number = parseInt(process.env.PASSWORD_LENGTHS ?? "8")

  if (process.env.UPPERCASE_LETTERS === "true") {
    characters.push(...ABC.toUpperCase())
  }
  if (process.env.LOWERCASE_LETTERS === "true") {
    characters.push(...ABC)
  }
  if (process.env.NUMBERS === "true") {
    characters.push(..."0123456789")
  }

  if (process.env.SPECIAL_CHARACTERS === "true") {
    characters.push(..."!@#$%^&*()-_")
  }

  for (let i: number = 0; i < passwordLength; i++) {
    const index: number = Math.floor(Math.random() * characters.length)
    password += characters[index]

  }
  return password

}
