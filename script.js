const passwordb=document.getElementById("password");
const length=12;
const UPPERCASE="ABCDEFGHIJKLMNOPQRSTUVEXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const sym="!@#$%^&*~()_+}{[]?<>/=|";

const allChars=UPPERCASE + lowercase + number + sym;
function creatPassword()
{
   event.preventDefault();
    let password="";
    password += UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += sym[Math.floor(Math.random() * sym.length)];

while (length > password.length){
password += allChars[Math.floor(Math.random() *  allChars.length)];
};
passwordb.value =password;
}

function CopyPassword(){
    passwordb.select();
    document.execCommand("copy");
    
}










