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
            html+= `<div onclick="openProductDetail(${i})" class="product-itmes ${product[i].type}">
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
        //console.log(elem)
        var value = $('#'+elem.id).val()

        var html = '';
            for (let i = 0; i < product.length; i++) {
                if (product[i].name.includes(value)) {
                    html+= `<div onclick="openProductDetail(${i})" class="product-itmes ${product[i].type}">
                        <img class="product-img" src="${product[i].img} alt="">
                        <p style="font-size: 1.5vw;">${product[i].name}</p>
                        <p style="font-size: 1.2vw;">${numberWithCommas (product[i].price)} THB</p></div>`;
                }
            }
            if (html == '') {
                $("#productlist").html('<p>Not Found Product</p>')
            }else{
                $("#productlist").html(html)
            }   
    }

//ปุ่ม Menu
function searchproduct(param){
    $(".product-itmes").css('display','none')
    if (param == 'all') {
        $(".product-itmes").css('display','block')
    }
    else{
        $("."+param).css('display','block')
    }
}


//openProductDetail
var productindex = 0
function openProductDetail(index){
    productindex  = index
    console.log(productindex)
    $("#modalDesc").css('display','flex')
    $("#mdd-img").attr('src',product[index].img)
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text(numberWithCommas(product[index].price)+ ' THB')
    $("#mdd-desc").text(product[index].description)
}

//ปุ่มปิด
function closeModal(){
    $(".modal").css('display','none')
}

//เพิ่มสินค้า หรือ Add to Cart
var cart = [];
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if(productindex == cart[i].index){
            cart[i].count++
            pass = false
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        //console.log(obj)

        cart.push(obj)
    }
    console.log(cart)
    
    Swal.file({
        icon:'success',
        title: 'Add'+ product[productindex].name + ' to Cart !'
    })
    
}