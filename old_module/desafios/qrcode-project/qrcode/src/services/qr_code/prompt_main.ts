type PromptQRCode = [
  { name: string; description: string },
  { name: string; description: string; pattern: RegExp },
];
export const promptQRCode: PromptQRCode = [
  {
    name: "link",
    description: "Digite o link para gerar o QR CODE",
  },
  {
    name: "type",
    description: "Escolha entre o tipo do  QRcode (1) - NORMAL ou (2) TERMINAL",
    pattern: /^[1-2]+$/,
  },
];
