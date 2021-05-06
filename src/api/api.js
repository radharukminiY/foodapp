import $ from 'jquery';

export default {
sampleData: {
  "categories": [
    {
      "name": "Dessert",
      "image": "http://www.myiconfinder.com/uploads/iconsets/256-256-7275aebc435153f103fe46c706a7f332-pastry.png"
    },
    {
      "name": "Starters",
      "image": "https://image.flaticon.com/icons/svg/362/362272.svg"
    },
    {
      "name": "Main course",
      "image": "https://image.flaticon.com/icons/svg/926/926255.svg"
    },
    {
      "name": "Drinks",
      "image": "https://image.flaticon.com/icons/svg/861/861276.svg"
    },
    {
      "name": "Ice creams",
      "image": "https://image.flaticon.com/icons/svg/1256/1256952.svg"
    },
  ],
  "recipes": [
    {
      "name": "Classic chocolate mousse",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg",
      "price": 10,
      "category": "Dessert",
      "rating": 3,
      "reviews": 200,
      "details": "Creamy chocolate mousse is an absolute classic, and this indulgent gluten-free dessert recipe is so easy to follow. Whip up the mousse with rich dark chocolate and allow to set overnight, before serving with whipped cream and chocolate shards, if you like. Stunning dinner party desserts don't get better than this!",
      "isFavourite": true
    },
    {
      "name": "Peach custard tart recipe",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-Peach-tart-114def26-cd60-4d75-a7da-e9b35f07c3df-0-1400x919.jpg",
      "price":80,
      "category": "Dessert",
      "rating": 4,
      "reviews": 100,
      "details": "The sweetest peaches, crumbly pastry and creamy custard make this pretty fruit tart the ultimate summer pud. As our peaches are taste tested every week before picking, you'll be confident knowing that every bite is bursting with flavour from only the tastiest fruits.",
      "isFavourite": false
    },
    {
      "name": "Chocolate and honeycomb ice cream terrine recipe",
      "image": "https://realfood.tesco.com/media/images/RFO-ChocolateHoneycombTerrine-1400x919-v1-mini-96a9f731-7e0c-4bc1-95a9-6d06fa33bf4a-0-1400x919.jpg",
      "price": 100,
      "category": "Dessert",
      "rating": 4,
      "reviews": 400,
      "details": "Homemade honeycomb is the star of the show in this decadent chocolate ice cream terrine. Set in layers of chocolate shards, chocolate ice cream and honeycomb nuggets and decorated with chunks of honeycomb and chocolate shards, this is a chocoholics dream come true",
      "isFavourite": false
    },
    {
      "name": "Potato and corn chowder",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-Potato-and-corn-chowder-26096800-13f5-40bb-a070-0aa95ce8e921-0-1400x919.jpg",
      "price": 120,
      "category": "Starters",
      "rating": 2,
      "reviews": 240,
      "details": "Made with seasonal Maris Piper potatoes, this easy vegan recipe is a comforting bowl of autumnal goodness. Packed with flavour, a hint of spice, and entirely dairy-free, it's perfect topped with a sprinkling of fresh herbs and served with warm fresh bread for dunking.",
      "isFavourite": true
    },
    {
      "name": "Mexican corn on the cob",
      "image": "https://realfood.tesco.com/media/images/63-MEXICAN-CORN-ON-COB-LGH-c2646d1d-c822-47c1-97ce-95e7101bf43b-0-1400x919.jpg",
      "price": 150,
      "category": "Starters",
      "rating": 1,
      "reviews": 130,
      "details": "Spice up your summer cookout with this delicious barbecue side recipe. We've given traditional barbecued corn on the cob a tasty twist with fiery Mexican spices and fresh chilli, lime and coriander.",
      "isFavourite": true
    },
    {
      "name": "Baked smoked garlic cheese with pesto toasts recipe",
      "image": "https://realfood.tesco.com/media/images/1400x919-Baked-smoked-garlic-cheese-with-pesto-toasts-b72dcc77-e0f0-469b-8d10-ba2006881597-0-1400x919.jpg",
      "price": 210,
      "category": "Starters",
      "rating": 2,
      "reviews": 230,
      "details": "There's no better starter or indulgent snack than this oozing, cheesy dip. Smoky Camembert pairs perfectly with fresh pesto and crunchy ciabatta. Get stuck in! ",
      "isFavourite": false
    },
    {
      "name": "Watercress and prawn risotto recipe",
      "image": "https://realfood.tesco.com/media/images/472x310-Watercress--prawn-risotto-52d210ed-45ce-4007-9bf1-4d2627ce1498-0-472x310.jpg",
      "price": 800,
      "category": "Main course",
      "rating": 3,
      "reviews": 230,
      "details": "A light lunch perfect for al fresco dining, this watercress and prawn risotto is ready in just 20 minutes. A member of the mustard family, the fresh, peppery taste of watercress perfectly compliments the creamy lemon risotto and Tesco's finest jumbo king prawns. Add some grated Grana Padano to bring the dish together and for a real taste sensation",
      "isFavourite": true
    },
    {
      "name": "Sparkling grapefruit, lime and rosemary water recipe",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-SparklingCitrusWater-3cac22ae-b335-464d-95e2-10f7f4e9cc03-0-1400x919.jpg",
      "price": 499,
      "category": "Drinks",
      "rating": 4,
      "reviews": 530,
      "details": "Make your own simple soft drink by infusing sparkling water with the fresh flavours of tangy grapefruit, lime and a few sprigs of rosemary for a herbal touch",
      "isFavourite": true
    },
    {
      "name": "Pumpkin punch",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-PumpkinPunch-3f32889f-ac39-469f-a0eb-c69230a5cee5-0-1400x919.jpg",
      "price": 230,
      "category": "Drinks",
      "rating": 4,
      "reviews": 430,
      "details": "Serve up a Halloween cocktail in style with this fun pumpkin punch recipe. Not only is the fruity, Caribbean-inspired cocktail delicious to drink on its own but serving it in a hollowed-out pumpkin is a great way to show your Halloween creativity and get the party started.",
      "isFavourite": false
    },
    {
      "name": "Blackberry, elderflower and gin fizz recipe",
      "image": "https://realfood.tesco.com/media/images/RFO-1400x919-GinBlackberryElderflowerFizz-c4fd9230-4957-47e5-bd4f-0aec764468af-0-1400x919.jpg",
      "price": 401,
      "category": "Drinks",
      "rating": 4,
      "reviews": 430,
      "details": "Fruity and refreshing, this blackberry gin fizz recipe is the perfect gin cocktail for sharing on a hot summer’s day. Tart blackberries and zesty lime are balanced with aromatic gin and the floral flavours of sparkling apple and elderflower pressé.",
      "isFavourite": true
    },
    {
      "name": "Classic banoffee pie",
      "image": "https://realfood.tesco.com/media/images/HI-BANOFFEECREPEBACKET-LGH-56e19782-eff3-48eb-8a3c-0eb4f7317353-0-1400x919.jpg",
      "price": 201,
      "category": "Ice creams",
      "rating": 2,
      "reviews": 480,
      "details": "Classic banoffee pie is given a delicious twist in this gorgeous dessert, featuring sliced bananas, vanilla ice cream and silky toffee sauce all packaged up in golden, crispy crêpe baskets.",
      "isFavourite": true
    },
    {
      "name": "Blackberry and lemon cheesecake ice cream ",
      "image": "https://realfood.tesco.com/media/images/Blackberry-and-lemon-cheesecake-ice-cream-LGH-41119c6d-6c6e-4ed5-90e7-849ababb007d-0-1400x919.jpg",
      "price": 301,
      "category": "Ice creams",
      "rating": 2,
      "reviews": 480,
      "details": "We've given the traditional cheesecake a summery twist with this fruity ice cream. This no-churn recipe is super-easy to make and can be frozen for up to 1 month.",
      "isFavourite": false
    }
  ]
},

    _callAPI: function (url, method, target, data) {
    target(this.sampleData)
        /*$.ajax({
            url,
            method,
            success: (data) => {
                target(data)

            }
        })*/


    }
}
