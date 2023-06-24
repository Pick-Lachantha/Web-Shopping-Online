 var product = [{
     id: 1,
     img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
     name: 'Nike',
     price: 7000,
     description: 'Nike Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
     type: 'shoe'

 }, {

     id: 2,
     img: 'https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
     name: 'Adidas shirt',
     price: 1500,
     description: 'Adidas shirt Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
     type: 'shirt'
 }, {
     id: 3,
     img: 'https://images.unsplash.com/photo-1593287073863-c992914cb3e3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774',
     name: 'Adidas shoe',
     price: 45000,
     description: 'Adidas shoe Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, labore dolorum optio ad consequatur cupiditate!',
     type: 'shoe'
}];


//แสดง Product
$(document).ready(() =>{

    $.ajax({
        method: 'get',
        url: './api/getallproduct.php',
        success: function(response){
            console.log(response)
        }, error: function(err){
            console.log(err)
        }
    })


    var html = ''
    for(let i =0; i < product.length; i++){
       html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img src="${product[i].img}" alt="" class="product-img">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: .9vw;">${numberWithCommas(product[i].price)}</p>
                </div>`
    }
    $("#productlist").html(html)
})

//Commas
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

//Search
function searchsomething(elem) {
    // console.log('#'+elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if( product[i].name.includes(value) ) {
            html += `<div onclick="openProductDetail(${i})" class="product-items ${product[i].type}">
                    <img class="product-img" src="./imgs/${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p stlye="font-size: 1vw;">${ numberWithCommas(product[i].price) } THB</p>
                </div>`;
        }
    }
    if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
    } else {
        $("#productlist").html(html);
    }

}


//ปุ่ม เมนู
function searchproduct(param){
    console.log(param)
    $(".product-items").css('display','none')
    if(param == 'all'){
        $(".product-items").css('display','block')
    }
    else{
        $("."+param).css('display','block')
    }
}


//รายละเอียดสินค้า
var productindex = 0
function openProductDetail(index){
    productindex = index
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

//ปุ่ม AddToCart หรือ เพิ่มใส่ตระกล้า
var cart = []
function AddToCart(){
    var pass = true
    for(let i = 0; i < cart.length; i++){
        if(productindex == cart[i].index){
            cart[i].count++
            pass = false
        }
    }
    if(pass){
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        }
        cart.push(obj)
    }
    console.log(cart)

    Swal.fire({
        icon:'success',
        title:'Add ' + product[productindex].name + ' Ta Cart !'
    })
    $("#cartcout").css('display','flex').text(cart.length)
}

//ปุ่ม cart  หรือ ตระกล้า 
function opencart(){
    $('#modalCart').css('display','flex')
    rendercart()
}

//rendercart
function rendercart(){
    if(cart.length > 0){
        var html = ''
        for(let i = 0; i < cart.length; i++){
            html += `<div class="cartlist-items">
                        <div class="cartlist-left">
                            <img src="${cart[i].img}" alt="" >
                            <div class="cartlisrt-detail">
                                <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price * cart[i].count)+ ' THB'}</p>
                            </div>
                        </div>
                        
                        <div class="cartlist-right">
                            <p onclick="deinitems('-', ${i})" class="btnc">-</p>
                            <p id="countitems${i}">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class="btnc">+</p>
                        </div>
                    </div> `
        }
        $("#MyCart").html(html)
    }
    else{
        $("#MyCart").html('<p>Not found Product list</p>')
    }
}

//ปุ่ม - +
function deinitems(action, index){
    if(action == '-'){
        if(cart[index].count > 0){
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <=0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are You Sure To Dalate?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    ConfirmButton: 'Delete',
                    CancelButton: 'Cancel',
                }).then((res) =>{
                    if(res.isConfirmed){
                        cart.splice(index, 1)
                        rendercart()
                        $("#cartcout").css('display','flex').text(cart.length)

                        if(cart.length <= 0){
                            $("#cartcout").css('display','none')
                        }
                    }
                    else{
                        cart[index].count++
                        $("#countitems"+index).text(cart[index].count)
                    }
                })
            }
        }
    }
    else if(action == '+'){
        cart[index].count++
        $("#countitems"+index).text(cart[index].count)
    }
}
