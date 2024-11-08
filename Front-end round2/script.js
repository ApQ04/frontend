const promotionTypes = document.querySelectorAll('.streaming_promotion_type');
const title = document.getElementById('title');
const price_value = document.getElementById('price_value');
const paytype_value = document.getElementById('paytype_value');




promotionTypes.forEach(type => {
    type.addEventListener('click', function () {
        // ลบ class active จากทุกกล่อง
        promotionTypes.forEach(t => t.classList.remove('active'));
        // เพิ่ม class active ให้กับกล่องที่ถูกคลิก
        this.classList.toggle('active');
        // เปลี่ยนสีข้อความใน h1 ตาม ID ที่คลิก
        switch (this.id) {
            case 'enterprice':
                title.style.color = 'blue';
                price_value.innerHTML = "$1999";

                break;
            case 'professonal':
                title.style.color = 'green';
                price_value.innerHTML = "$799";
                break;
            case 'standard':
                title.style.color = 'purple';
                price_value.innerHTML = "$349";
                break;

            default:
                title.style.color = 'black'; // สีเริ่มต้น
                title.style.backgroundColor = 'transparent'; // พื้นหลังเริ่มต้น
        }

    });
});



const paymentTypes = document.querySelectorAll('.payment_type');
paymentTypes.forEach(type => {
    type.addEventListener('click', function () {
        // ลบ class active จากทุกกล่อง
        paymentTypes.forEach(t => t.classList.remove('active2'));
        // เพิ่ม class active ให้กับกล่องที่ถูกคลิก
        this.classList.toggle('active2');
        switch (this.id) {
            case 'paypal':

                paytype_value.innerHTML = "Paypal";
                break;
            case 'checks':

                paytype_value.innerHTML = "Checks";
                break;
            case 'cash':

                paytype_value.innerHTML = "Cash";

                break;


        }
    });
});
document.getElementById("recipte_form").addEventListener("submit", function (event) {
    event.preventDefault(); // หยุดการส่งฟอร์ม
    if (validateForm()) { // ตรวจสอบฟอร์ม

        document.querySelector("#box3 #price").textContent = "Price: " + document.getElementById("price_value").textContent; // แสดงราคา
        document.querySelector("#box3 #paytype").textContent = "Payment Type: " + document.getElementById("paytype_value").textContent; // แสดงวิธีการชำระเงิน
        document.querySelector("#box3 #prefix").textContent = "Prefix: " + document.getElementById("prefix-select").value; // แสดง Prefix
        document.querySelector("#box3 #name").textContent = "Name: " + document.getElementById("name_value").value; // แสดงชื่อ
        document.querySelector("#box3 #phone").textContent = "Phone: " + document.getElementById("phone_value").value; // แสดงหมายเลขโทรศัพท์
        document.querySelector("#box3 #address").textContent = "Address: " + document.getElementById("address_value").value; // แสดงที่อยู่
        document.querySelector(".box3").style.display = "block"; // แสดง box3
    }
});


function validateForm() {
    var nameValue = document.getElementById("name_value").value;
    var phoneValue = document.getElementById("phone_value").value;
    var addressValue = document.getElementById("address_value").value;
    var prefixValue = document.getElementById("prefix-select").value;

    if (prefixValue === "") {
        window.alert("Please select a Prefix.");
        return false;
    }

    if (nameValue.trim() === "") {
        window.alert("Please fill in the Name field.");
        return false;
    }

    if (phoneValue.trim() === "") {
        window.alert("Please fill in the Phone field.");
        return false;
    }

    if (addressValue.trim() === "") {
        window.alert("Please fill in the Address field.");
        return false;
    }

    return true;

}
