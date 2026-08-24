/*
========================================================
VALORA — НАСТРОЙКИ САЙТА
========================================================
Меняй информацию ТОЛЬКО в этом файле.

После изменения:
1. Сохрани файл.
2. Нажми Commit changes в GitHub.
3. GitHub Pages автоматически обновит сайт.

QR:
Положи новый QR-файл в папку assets и укажи его имя,
например: "assets/qr.png"
========================================================
*/

const CONFIG = {

    // ==================================================
    // 💳 РЕКВИЗИТЫ
    // ==================================================

    bank: "Название банка",

    accountHolder: "Nombre del titular",

    accountNumber: "0000000000",



    swift: "XXXXXX",

    reference: "Referencia del pago",


    // ==================================================
    // 💰 СУММА
    // ==================================================

    amount: "1500.00",

    currency: "NIO",


    // ==================================================
    // 📱 TELEGRAM / ПОДДЕРЖКА
    // ==================================================

    telegram: "https://t.me/valora_credito_bot",


    // ==================================================
    // 📷 QR-КОД
    // ==================================================
    //
    // Помести QR в папку assets.
    //
    // Например:
    // assets/qr.png
    //
    // Если QR пока нет — оставь пустым: ""

    qrImage: "assets/qr.png",


    // ==================================================
    // 📝 ТЕКСТЫ
    // ==================================================

    eyebrow: "Información de pago",

    pageTitle: "Realiza tu pago de forma sencilla.",

    pageDescription:
        "Consulta los datos de pago y utiliza el código QR si tu banco permite escanearlo. Después de completar la operación, envía el comprobante al chat de soporte.",

    heroCardTitle: "Tu aliado financiero.",

    heroCardText:
        "Revisa siempre los datos antes de confirmar la transferencia y conserva tu comprobante.",

    paymentTitle: "Datos para el pago",

    paymentSubtitle:
        "Utiliza exactamente la información indicada a continuación.",

    bankSectionTitle: "Información bancaria",

    amountLabel: "Importe",

    qrTitle: "Código QR para pagar",

    qrDescription:
        "Escanea el código desde la aplicación de tu banco y verifica el destinatario antes de confirmar.",

    afterPaymentTitle:
        "Después de realizar el pago",

    afterPaymentText:
        "Envía el comprobante de la operación al chat de soporte para que el equipo pueda revisarlo.",

    supportButton:
        "💬 Ir al chat de soporte",

    topSupportButton:
        "💬 Soporte",

    sendReceiptButton:
        "💬 Enviar comprobante",

    footer:
        "VALORA — Tu aliado financiero."
};
