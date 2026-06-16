import { meuPront } from "./src/prompts/prompt_main";
import prompt from "prompt"
import { createQRcode } from "./src/services/qr_code/create_qrcode";
import { createPassword } from "./src/services/password/create";
console.log("Hello via Bun!");
async function main() {
  prompt.get(meuPront, async (err, choose) => {
    if (choose.select == 1) await createQRcode()
    if (choose.select == 2) await createPassword()
  })

  prompt.start()


}

main()
