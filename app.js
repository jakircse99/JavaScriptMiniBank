//Login page and validation
let loginPage = document.getElementById("login-page");
let loginBtn = document.getElementById("loginbtn");
let userName = document.getElementById("username");
let password = document.getElementById("password");
let adminPage = document.getElementById("bank");
const welcome = document.getElementById("welcome");


function adminPanel(){
  
  userName = userName.value;
  password = password.value;
  if(userName ==""){
    alert("User name is required");
  }
  else if(password ==""){
    alert("Password is required");
  }
  else{
    loginPage.style.display = "none";
    adminPage.style.display = "block";

    welcome.innerHTML = userName;
    console.log(userName);
    if(userName== undefined){
      welcome.innerHTML = "";
    }
  }
  
}

loginBtn.addEventListener('click', adminPanel);

//Admin page



//Disposite


let addBtn = document.getElementById("addbtn");
function diposit() {
  let totalDiposit = document.getElementById("total-diposit").innerHTML;
  let totalDipositNew = document.getElementById("total-diposit");
  let dipositInput = document.getElementById("deposit-input");
  let totalDipositnew = parseFloat(dipositInput.value);
  let totalDipositAmountNew = parseFloat(totalDiposit);
  totalDipositAmount = totalDipositnew + totalDipositAmountNew ;
  totalDipositNew.innerHTML = totalDipositAmount;

  let totalAmount = document.getElementById("total-amount");
  let currentAmount = document.getElementById("total-amount").innerHTML;
  totalAmount.innerHTML = parseFloat(currentAmount) + totalDipositnew;


};

addBtn.addEventListener('click', diposit);


let withdrowBtn = document.getElementById("withdrowbtn");

function withdrow() {
  let totalWithdrowCurrent = document.getElementById("total-withdrow").innerHTML;
  let totalWithdrow = document.getElementById("total-withdrow");
  let withDorwInput = document.getElementById("withdrow-input").value;
  totalWithdrow.innerHTML = parseFloat(totalWithdrowCurrent) + parseFloat(withDorwInput);

  let totalAmount = document.getElementById("total-amount");
  let currentAmount = document.getElementById("total-amount").innerHTML;

  totalAmount.innerHTML = currentAmount - parseFloat(withDorwInput)
  console.log(totalAmount.innerHTML);
  console.log(currentAmount)
  
}
withdrowBtn.addEventListener('click', withdrow);

