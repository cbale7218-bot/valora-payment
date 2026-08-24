/* VALORA: внешняя конфигурация */

// Вставь сюда URL публичного JSON-файла с актуальными данными.
// Например: https://example.com/valora.json
const DATA_URL = "https://gist.githubusercontent.com/cbale7218-bot/a0e46013da7d0a7a372712ed999519b2/raw/gistfile1.txt";

const CONFIG_FALLBACK = {
  bank: "Название банка",
  accountHolder: "Nombre del titular",
  accountNumber: "0000000000",
  swift: "XXXXXX",
  reference: "Referencia del pago",
  amount: "0.00",
  currency: "EUR",
  telegram: "https://t.me/VALORA_support",
  qrImage: "assets/qr.png",
  eyebrow: "Información de pago",
  pageTitle: "Realiza tu pago de forma sencilla.",
  pageDescription: "Consulta los datos de pago y utiliza el código QR si tu banco permite escanearlo. Después de completar la operación, envía el comprobante al chat de soporte.",
  heroCardTitle: "Tu aliado financiero.",
  heroCardText: "Revisa siempre los datos antes de confirmar la transferencia y conserva tu comprobante.",
  paymentTitle: "Datos para el pago",
  paymentSubtitle: "Utiliza exactamente la información indicada a continuación.",
  bankSectionTitle: "Información bancaria",
  amountLabel: "Importe",
  qrTitle: "Código QR para pagar",
  qrDescription: "Escanea el código desde la aplicación de tu banco y verifica el destinatario antes de confirmar.",
  afterPaymentTitle: "Después de realizar el pago",
  afterPaymentText: "Envía el comprobante de la operación al chat de soporte para que el equipo pueda revisarlo.",
  supportButton: "💬 Ir al chat de soporte",
  topSupportButton: "💬 Soporte",
  sendReceiptButton: "💬 Enviar comprobante",
  footer: "VALORA — Tu aliado financiero."
};

async function loadConfig(){
  if(!DATA_URL.trim()) return CONFIG_FALLBACK;
  try{
    const sep = DATA_URL.includes('?') ? '&' : '?';
    const response = await fetch(DATA_URL + sep + 't=' + Date.now(), {cache:'no-store'});
    if(!response.ok) throw new Error('HTTP '+response.status);
    return {...CONFIG_FALLBACK, ...(await response.json())};
  }catch(error){
    console.warn('External config unavailable; using fallback.', error);
    return CONFIG_FALLBACK;
  }
}
