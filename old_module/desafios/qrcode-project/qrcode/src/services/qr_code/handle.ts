import qr from "qrcode-terminal"
export async function handle(err: any, result: any) {
  if (err) {
    console.log("error on application")

    return;
  }
  const isSmall: boolean = result.type == 2
  qr.generate(result.link, { small: isSmall }, (qrcode: any) => {
    console.log("QRCode gerado com sucesso:\n")
    console.log(qrcode)
  })



}
