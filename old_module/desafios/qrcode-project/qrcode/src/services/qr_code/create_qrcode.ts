import { handle } from "./handle";
import prompt from "prompt"
import { promptQRCode } from "./prompt_main.ts";

export async function createQRcode() {
  prompt.get(promptQRCode, handle)
  prompt.start()

}
promptQRCode


