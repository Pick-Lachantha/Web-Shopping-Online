var product = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'puma',
        price: 5000,
        description: 'puma Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio esse, porro doloribus magni assumenda omnis.',
        type: 'puma',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'converse',
        price: 4500,
        description: 'converse Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio esse, porro doloribus magni assumenda omnis.',
        type: 'converse',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'vans',
        price: 6000,
        description: 'vans Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio esse, porro doloribus magni assumenda omnis.',
        type: 'vans',

    }];

    $(document).ready(()=>{
        var html = '';
        for (let i = 0; i < product.length; i++) {
            html+= `<div class="product-itmes ${product[i].type}">
                    <img class="product-img" src="${product[i].img} alt="">
                    <p style="font-size: 1.5vw;">${product[i].name}</p>
                    <p style="font-size: 1.2vw;">${numberWithCommas (product[i].price)} THB</p></div>`;
        }
        $("#productlist").html(html)
    })

//function ใส่ Commas
    function numberWithCommas(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }

//ช่องค้นหา
function searchsomething(elem){
    console.log(elem)
}