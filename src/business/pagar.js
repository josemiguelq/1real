var mercadoPago = require('mercadopago')

var pagar = function (req,res) {
    console.log('teste')

    var mp = new mercadoPago ("3972293862799730", "51KqJ8ePN5wXOR1qq3Tpsk6BqGfAKxML");

    var preference = {
        "items": [
            {
                "title": "Multicolor kite",
                "quantity": 1,
                "currency_id": "BRL", // Available currencies at: https://api.mercadopago.com/currencies
                "unit_price": 1.0
            }
        ]
    };
    
    mp.createPreference (preference, function (err, data){
        if (err) {
            console.log(err)
            res.send (err);
        } else {
            console.log(data)
            res.render ("button", {"preference": data});
        }
    });
}

module.exports = pagar