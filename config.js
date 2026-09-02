/* =====================================
   VALORA — EXTERNAL CONFIG
===================================== */


/*
   URL твоего Gist.

   Здесь ничего менять не нужно,
   если этот URL остаётся твоим.
*/

const DATA_URL =
    "https://gist.githubusercontent.com/cbale7218-bot/a0e46013da7d0a7a372712ed999519b2/raw/gistfile1.txt";



/*
   РЕЗЕРВНАЯ КОНФИГУРАЦИЯ

   Если Gist временно недоступен,
   сайт использует эти данные.
*/

const CONFIG_FALLBACK = {

    bank:
        "TEST BANK 123",

    accountHolder:
        "TEST USER",

    accountNumber:
        "123456789",

    cedula:
        "123456789",

    reference:
        "VALORA-TEST",

    amount:
        "100.00",

    currency:
        "EUR",

    telegram:
        "https://t.me/VALORA_support",


    /*
       =====================================
       QR DATA
       =====================================

       СЮДА попадает информация,
       которую должен содержать QR.

       Например:

       https://example.com/payment/123

       или платежная ссылка банка.
    */

    qrData:
        "https://example.com/payment/123",


    /*
       TEXT
    */

    eyebrow:
        "Información de pago",

    pageTitle:
        "Realiza tu pago de forma sencilla.",

    pageDescription:
        "Consulta los datos de pago y utiliza el código QR si tu banco permite escanearlo. Después de completar la operación, envía el comprobante al chat de soporte.",

    heroCardTitle:
        "Tu aliado financiero.",

    heroCardText:
        "Revisa los datos antes de confirmar.",

    paymentTitle:
        "Datos del beneficiario",

    paymentSubtitle:
        "Utiliza la información indicada.",

    bankSectionTitle:
        "Información bancaria",

    amountLabel:
        "Importe",

    qrTitle:
        "Código QR para pagar",

    qrDescription:
        "Escanea el código QR.",

    afterPaymentTitle:
        "Después de realizar el pago",

    afterPaymentText:
        "Envía el comprobante al chat de soporte.",

    supportButton:
        "💬 Ir al chat de soporte",

    topSupportButton:
        "💬 Soporte",

    sendReceiptButton:
        "💬 Enviar comprobante",

    footer:
        "VALORA — Tu aliado financiero."

};



/* =====================================
   LOAD CONFIG
===================================== */

async function loadConfig() {

    try {

        /*
           Добавляем timestamp.

           Благодаря этому браузер
           не использует старый cache.
        */

        const separator =
            DATA_URL.includes("?")
                ? "&"
                : "?";


        const response = await fetch(

            `${DATA_URL}${separator}t=${Date.now()}`,

            {

                cache:
                    "no-store",

                headers:
                {
                    "Cache-Control":
                        "no-cache",

                    "Pragma":
                        "no-cache"
                }

            }

        );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const remoteConfig =
            await response.json();


        /*
           Объединяем резервные данные
           и данные из Gist.
        */

        return {

            ...CONFIG_FALLBACK,

            ...remoteConfig

        };

    }


    catch (error) {

        console.error(

            "No se pudo cargar la configuración externa:",

            error

        );


        return CONFIG_FALLBACK;

    }

}
