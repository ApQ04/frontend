document.getElementById("info_form").addEventListener("submit", function (event) {

var package_a_count = document.getElementById("package_a_count").value
var package_b_count = document.getElementById("package_b_count").value
var package_c_count = document.getElementById("package_c_count").value
var package_d_count = document.getElementById("package_d_count").value


var totalprice = ((package_a_count*100)+(package_b_count*200)+(package_c_count*300)+(package_d_count*400))
var discount_text = document.getElementById("coupon_value").value
var discount = totalprice*0.1
var price_after_discount = totalprice-discount
price_after_discount = Number(price_after_discount.toFixed(2))
var tax = price_after_discount*0.07
tax = Number(tax.toFixed(2)) 
var net_price = (price_after_discount+tax);
net_price = net_price.toFixed(2)

    event.preventDefault(); // หยุดการส่งฟอร์ม
   
    if (validateForm()) { // ตรวจสอบฟอร์ม

        if(package_a_count!=0){
            document.querySelector("#package_report_a").textContent = "Pagkage A Automated Testing - ฿100 x " + package_a_count +" = ฿"+(package_a_count*100).toFixed(2); // แสดงราคา
        }
        if(package_b_count!=0){
            document.querySelector("#package_report_b").textContent = "Pagkage B Advance Machine Learning - ฿200 x " + package_b_count +" = ฿"+(package_b_count*200).toFixed(2); // แสดงราคา
        }
        if(package_c_count!=0){
            document.querySelector("#package_report_c").textContent = "Pagkage C Cyber-Security Technology - ฿300 x " + package_c_count +" = ฿"+(package_c_count*300).toFixed(2); // แสดงราคา
        }
        if(package_d_count!=0){
            document.querySelector("#package_report_d").textContent = "Pagkage D Agile Bussiness Analysis - ฿400 x " + package_d_count +" = ฿"+(package_d_count*400).toFixed(2); // แสดงราคา
        }

        document.querySelector("#total_price").textContent = "Total_price: ฿" + totalprice.toFixed(2); // แสดงราคา

        if(discount_text == "SAVE10"){
            document.querySelector("#discount").textContent = "Discount: -฿" + discount.toFixed(2); // แสดงราคา
        }
        else{
            document.querySelector("#discount").textContent = "Discount: -฿0.00"; // แสดงราคา
        }
        document.querySelector("#price_after_discount").textContent = "Price after Discount: ฿" + price_after_discount.toFixed(2); // แสดงราคา
        document.querySelector("#tax").textContent = "Tax(7%): ฿" + tax.toFixed(2); // แสดงราคา

        
       document.querySelector("#net_price").textContent = "Net Price: ฿" + net_price; // แสดงราคา
        

       
       
       
        document.querySelector(".summary").style.display = "block"; // แสดง summary
    }
        
});


function validateForm() {
    var nameValue = document.getElementById("name_value").value;
    var emailValue = document.getElementById("email_value").value;
    var phoneValue = document.getElementById("phone_value").value;
   

   

    if (nameValue.trim() === "") {
        window.alert("Please fill all required field.");
        return false;
    }

    if (emailValue.trim() === "") {
        window.alert("Please fill all required field.");
        return false;
    }

    if (phoneValue.trim() === "") {
        window.alert("Please fill all required field.");
        return false;
    }

    return true;

}