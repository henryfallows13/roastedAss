//setting variables
//buttons
const coffee1 = document.getElementById("coffee1");
const coffee2 = document.getElementById("coffee2");
const coffee3 = document.getElementById("coffee3");
const coffee4 = document.getElementById("coffee4");

const tea1 = document.getElementById("tea1");
const tea2 = document.getElementById("tea2");
const tea3 = document.getElementById("tea3");
const tea4 = document.getElementById("tea4");
const tea5 = document.getElementById("tea5");
const tea6 = document.getElementById("tea6");

const soft1 = document.getElementById("soft1");
const soft2 = document.getElementById("soft2");

const order_list = document.getElementById("order_list");

const pay_button = document.getElementById("pay_button");
const clear_button = document.getElementById("clear_button");

var i = 0;
var order_array = [];
var total_price = 0;
const table_number = document.getElementById("table_number");

//setting drink prices
const c1_price = 2;
const c2_price = 2.50;
const c3_price = 1.50;
const c4_price = 1;

const t1_price = 2;
const t2_price = 3;
const t3_price = 1.50;
const t4_price = 3;
const t5_price = 2.50;
const t6_price = 4;

const s1_price = 0.50;
const s2_price = 0.50;


//changing name to price when hover
coffee1.addEventListener("mouseover", function() {
    this.textContent = `$${c1_price}`;
  })
coffee1.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

coffee2.addEventListener("mouseover", function() {
    this.textContent = `$${c2_price}`;
  })
coffee2.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

coffee3.addEventListener("mouseover", function() {
    this.textContent = `$${c3_price}`;
  })
coffee3.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

coffee4.addEventListener("mouseover", function() {
    this.textContent = `$${c4_price}`;
  })
coffee4.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })


tea1.addEventListener("mouseover", function() {
    this.textContent = `$${t1_price}`;
  })
tea1.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

tea2.addEventListener("mouseover", function() {
    this.textContent = `$${t2_price}`;
  })
tea2.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

tea3.addEventListener("mouseover", function() {
    this.textContent = `$${t3_price}`;
  })
tea3.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

tea4.addEventListener("mouseover", function() {
    this.textContent = `$${t4_price}`;
  })
tea4.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

tea5.addEventListener("mouseover", function() {
    this.textContent = `$${t5_price}`;
  })
tea5.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

tea6.addEventListener("mouseover", function() {
    this.textContent = `$${t6_price}`;
  })
tea6.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })


soft1.addEventListener("mouseover", function() {
    this.textContent = `$${s1_price}`;
  })
soft1.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

soft2.addEventListener("mouseover", function() {
    this.textContent = `$${s2_price}`;
  })
soft2.addEventListener("mouseout", function() {
    this.textContent = "ADD TO ORDER";
  })

//adding to order array

coffee1.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Capuccino($${c1_price})`));
    total_price = total_price + c1_price;
    order_array.push(`Capuccino($${c1_price})`);
})

coffee2.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Latte($${c2_price})`));
    total_price = total_price + c2_price;
    order_array.push(`Latte($${c2_price})`);
})

coffee3.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Americano($${c3_price})`));
    total_price = total_price + c3_price;
    order_array.push(`Americano($${c3_price})`);
})

coffee4.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Esspresso($${c4_price})`));
    total_price = total_price + c4_price;
    order_array.push(`Esspresso($${c4_price})`);
})


//showing order on order summary and creating array w them
tea1.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Brewed Tea($${t1_price})`));
    total_price = total_price + t1_price;
    order_array.push(`Brewed Tea($${t1_price})`);
})

tea2.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Macha Green Tea($${t2_price})`));
    total_price = total_price + t2_price;
    order_array.push(`Macha Green Tea($${t2_price})`);
})

tea3.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Mint Tea($${t3_price})`));
    total_price = total_price + t3_price;
    order_array.push(`Mint Tea($${t3_price})`);
})

tea4.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Chi Latte($${t4_price})`));
    total_price = total_price + t4_price;
    order_array.push(`Chi Latte($${t4_price})`);
})

tea5.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Iced Chi Tea Latte($${t5_price})`));
    total_price = total_price + t5_price;
    order_array.push(`Iced Chi Tea Latte($${t5_price})`);
})

tea6.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Shaked Peach Citrus Tea($${t6_price})`));
    total_price = total_price + t6_price;
    order_array.push(`Shaked Peach Citrus Tea($${t6_price})`);
})



soft1.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Fanta($${s1_price})`));
    total_price = total_price + s1_price;
    order_array.push(`Fanta($${s1_price})`);
})

soft2.addEventListener("click",()=>{
    order_list.appendChild(document.createElement(`li`)).appendChild(document.createTextNode(`Coka-cola($${s2_price})`));
    total_price = total_price + s2_price;
    order_array.push(`Coka-cola($${s2_price})`);
})

//displayin pcire when hover over pay button and says succesfull payment when pressed 

pay_button.addEventListener("mouseover", function() {
    this.textContent = `$${total_price}`;
  })
pay_button.addEventListener("mouseout", function() {
    this.textContent = "PAY";
  })
pay_button.addEventListener("click",()=>{
  if (total_price == 0 || table_number.value == ""){
    window.alert("YOUR CART IS EMPTY OR YOU DIDN`T ENTER YOUR TABLE NUMBER");
  }
  else{
    window.alert("PAYMENT SUCCESFULL");
  }
})

//clearing list

clear_button.addEventListener("click",()=>{
  var ul = document.getElementById("order_list");
  ul.innerHTML = "";
  order_array.length = 0;
  total_price = 0;
})