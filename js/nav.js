function getStyleAttribute(element_class, attribute_name) 
{
    return window.getComputedStyle(document.querySelector(element_class))[attribute_name]
}


function navListToggle() 
{
    
    displayAtt = getStyleAttribute(".nav_list", "display")

    if (displayAtt == "none") 
    {
        document.querySelector(".nav_list").setAttribute("style", "display: flex")
    }
    else 
    {
        document.querySelector(".nav_list").setAttribute("style", "display: none")
    }
}

window.onload = function() {
    if (window.innerWidth < 700) {
        document.querySelector(".nav_list").setAttribute("style", "display: none")
    }
};

window.addEventListener('resize', function(event) {
    console.log(window.innerWidth)
    if (window.innerWidth > 700) {
        document.querySelector(".nav_list").setAttribute("style", "display: flex")
    }
    if (window.innerWidth < 700) {
        document.querySelector(".nav_list").setAttribute("style", "display: none")
    }
}, true);
