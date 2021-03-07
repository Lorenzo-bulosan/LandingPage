
// plain js for document ready
document.addEventListener('DOMContentLoaded', (event) => {

    BtnContactOnClick();

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