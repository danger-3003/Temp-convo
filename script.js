var celcius=document.getElementById("celcius");
var farenhite=document.getElementById("farenhite");
var kelvin=document.getElementById("kelvin");
var button=document.getElementById("btn");
button.addEventListener('click',()=>
{
    celcius.value = "";
    farenhite.value = "";
    kelvin.value= "";
}
)

celcius.addEventListener('input',()=>
{
    let c = parseFloat(celcius.value);
    kelvin.value = c+273.15;
    farenhite.value = (c *9/5) + 32;
}
)
farenhite.addEventListener('input',()=>
{
    let f = parseFloat(farenhite.value);
    celcius.value = (f-32)*5/9;
    kelvin.value = ((f-32)*5/9) + 273.15;
}
)
kelvin.addEventListener('input',()=>
{
    let k = parseFloat(kelvin.value);
    celcius.value = k-273.15;
    farenhite.value = ((k-273.15) *9/5) + 32;
}
)