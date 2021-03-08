
// plain js for document ready
document.addEventListener('DOMContentLoaded', (event) => {

    BtnContactOnClick();
    HideExtraInformation();

})

// function to handle contact button click
function BtnContactOnClick()
{
    var btn = document.querySelector(".btn-contact");

    btn.addEventListener("click", function ()
    {
        alert(0);
    });
}

// function to handle user selecting tabs
function SidebarTabOnChange(event)
{
    // remove active
    document.querySelector(".tab-item.active").classList.remove("active");
    //add active to current
    event.target.classList.add('active');
}

function ShowExtraInformation()
{
    document.querySelector(".main").classList.add("main-container-expanded");
    document.querySelector(".leftbar-extra-information").style.visibility = "visible";
}

function HideExtraInformation()
{
    document.querySelector(".main").classList.remove("main-container-expanded")
    document.querySelector(".main").classList.add(".main-container");
    document.querySelector(".leftbar-extra-information").style.visibility = "hidden";
}

class Person
{
    constructor(fName, lName, age)
    {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }

    GetFullName()
    {
        return this.firstName + ' ' + this.lastName;
    }
}

function AddLine(obj)
{
    var param = document.createElement("p");
    var textNode = document.createTextNode("Yo");

    param.appendChild(textNode);
    obj.appendChild(param);
}
function DeleteLine(obj) {
    var elements = obj.getElementsByTagName("p");
    obj.removeChild(elements[elements.length -1]);
}