let name = document.getElementById("name");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");


// const RegName = /^[A-Za-z]+$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const RegMo = /07[789]\d{7}/;

function printData() {

    // if (!RegName.test(name.value) && name.value) {
    //     document.getElementById("SName").innerHTML = "Must contain letters only.";
    //     return;
    // } else {
    //     document.getElementById("SName").innerHTML = "";
    // }
    // if (!emailRegex.test(email.value) && email.value) {
    //     document.getElementById("SEmail").innerHTML = "Must be valid Email";
    //     return;
    // } else {
    //     document.getElementById("SEmail").innerHTML = "";
    // }
    // if (!RegMo.test(mobile.value) && mobile.value) {
    //     document.getElementById("SMobile").innerHTML = "Invali Mobile Number";
    //     return;
    // } else {
    //     document.getElementById("SMobile").innerHTML = "";
    // }

    document.getElementById("result").innerHTML =
        `<span class="name">${name.value}</span>
         <span class="email">${email.value}</span>
         <span class="mobile">${mobile.value}</span>`;

    let row = `
        <tr>
            <td>${name.value}</td>
            <td>${email.value}</td>
            <td>${mobile.value}</td>
        </tr>
    `;

    document.querySelector("#table tbody").innerHTML += row;

    // window.print();
}