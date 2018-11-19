import mercadoPago from 'mercadopago'


export default class Pagar {
    async execute(responder) {
        try {
            
            var mp = new mercadoPago ("3972293862799730", "51KqJ8ePN5wXOR1qq3Tpsk6BqGfAKxML");

            var preference = {
                "items": [
                    {
                        "title": "1 real na brotheragem",
                        "quantity": 1,
                        "currency_id": "BRL", // Available currencies at: https://api.mercadopago.com/currencies
                        "unit_price": 1.0
                    }
                ]
            };
            
            mp.createPreference (preference, function (err, data){
                if (err) {
                    responder.error(err);
                } else {

                    responder.render ("index", {"preference": data});
                }
            });


        } catch (err) {
            responder.error(err)
        }
    }

}
