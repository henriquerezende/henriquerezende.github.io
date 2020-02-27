window.onload = () =>{
    //Change background
    const changeBackground = () => {
        document.body.style.backgroundColor = document.getElementById("backgroundColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("bgColor", document.getElementById("backgroundColor").value)
        }
    }

    if(localStorage.getItem("bgColor") && typeof(Storage) != "undefined"){
        document.body.style.backgroundColor = localStorage.getItem("bgColor")
        document.getElementById("backgroundColor").value = localStorage.getItem("bgColor")
    }

    document.getElementById("backgroundColor").addEventListener("change", changeBackground)

    //Change text color
    const changeTextColor = () => {
        document.body.style.color = document.getElementById("textColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("textColor", document.getElementById("textColor").value)
        }
    }

    if(localStorage.getItem("textColor") && typeof(Storage) != "undefined"){
        document.body.style.color = localStorage.getItem("textColor")
        document.getElementById("textColor").value = localStorage.getItem("textColor")
    }

    document.getElementById("textColor").addEventListener("change", changeTextColor)   

    //Change font size
    const changeTextSize = () => {
        document.body.style.fontSize = document.getElementById("fontSize").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("fontSize", document.getElementById("fontSize").value + "px")
        }
    }

    if(localStorage.getItem("fontSize") && typeof(Storage) != "undefined"){
        document.body.style.fontSize = localStorage.getItem("fontSize")
    }

    document.getElementById("fontSize").addEventListener("change", changeTextSize)

    //Change line height
    const changeLineHeight= () => {
        document.body.style.lineHeight = document.getElementById("lineHeight").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("lineHeight", document.getElementById("lineHeight").value + "px")
        }
    }

        document.getElementById("lineHeight").addEventListener("change", changeLineHeight)


    if(localStorage.getItem("lineHeight") && typeof(Storage) != "undefined"){
        document.body.style.lineHeight = localStorage.getItem("lineHeight")
    }

    //Change font family
    const changeFontFamily = () => {
        document.body.style.fontFamily = document.getElementById("fontFamilyList").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("fontFamilyList", document.getElementById("fontFamilyList").value)
        }
    }

    if(localStorage.getItem("fontFamilyList") && typeof(Storage) != "undefined"){
        document.body.style.fontFamily = localStorage.getItem("fontFamilyList")
    }

    document.getElementById("fontFamilyList").addEventListener("change", changeFontFamily)
}
