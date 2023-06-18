var product = [{
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2020/10/22/10/42/hemp-5675705_640.jpg',
    name: 'ต้นกัญชา',
    price: 500,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non aliquid cum iste, debitis odit.',
    type:'ต้นกัญชา'
},{
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2017/03/25/19/57/marijuana-2174302_1280.jpg',
    name: 'กัญชาอัดแท่ง',
    price: 800,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non aliquid cum iste, debitis odit.',
    type:'กัญชาอัดแท่ง'
},{
    id: 3,
    img: 'https://media.istockphoto.com/id/637492698/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B9%E0%B8%9A%E0%B8%9A%E0%B8%B8%E0%B8%AB%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%AD%E0%B8%87.jpg?s=612x612&w=0&k=20&c=f8n1hsdTYygZFqPTtOoP8leVhR5YuQRRrlsRjGsNgQg=',
    name: 'บ้องกัญชา',
    price: 1100,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non aliquid cum iste, debitis odit.',
    type:'บ้องกัญชา'
}]

//แสดง Product
$(document).ready(() =>{
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
function searchsomething(elem){
    //console.log(elem.id)
    var value = $('#'+elem.id).val()
    console.log(value)

    var html = ''
    for(let i =0; i < product.length; i++){
        if(product[i].name.includes(value)){
        html += `<div onclick="openProductDetail(${i})"  class="product-items ${product[i].type}">
                    <img src="${product[i].img}" alt="" class="product-img">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: .9vw;">${numberWithCommas(product[i].price)}</p>
                 </div>`
            }
    if(html == ''){
        $("#productlist").html(`<p> Not Found Product</p>`)
    }
    else{
        $("#productlist").html(html)
    }
    }
}

//ปุ่ม เมนู
function searchproduct(param){
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