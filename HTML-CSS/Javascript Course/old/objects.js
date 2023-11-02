
function ComparePriceCheapest(product1, product2)
    {
        if (product1.price < product2.price)
        {
            return product1;
        }
        else
        {
            return product2;
        }
    }


function IsSameProduct(product1, product2)
    {
        if (product1.name === product2.name && product1.price === product2.price)
        {
            return true;
        }
        else
        {
            return false;
        }
    }


const Basketball = 
{
    name: 'Basketball',
    price: 2095,
    'delivery-time': '3 days'
};


const Basketball2 = 
{
    name: 'Basketball',
    price: 2095,
    'delivery-time': '3 days'
};


const Shirt = 
{
    name: 'Shirt',
    price: 999, 
};

console.log('string'.repeat(2))
console.log(ComparePriceCheapest(Basketball, Shirt))
console.log(IsSameProduct(Basketball, Basketball2))
