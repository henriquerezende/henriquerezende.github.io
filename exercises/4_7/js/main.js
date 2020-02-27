window.onload = () =>{
    //Change background
    const changeBackground = () => {
        document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementById("backgroundColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("bgColor", document.getElementById("backgroundColor").value)
        }
    }

    if(localStorage.getItem("bgColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bgColor")
    }

    document.getElementById("backgroundColor").addEventListener("change", changeBackground)

    //Change text color
    const changeTextColor = () => {
        document.getElementsByTagName("body")[0].style.color = document.getElementById("textColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("textColor", document.getElementById("textColor").value)
        }
    }

    if(localStorage.getItem("textColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.color = localStorage.getItem("textColor")
    }

    document.getElementById("textColor").addEventListener("change", changeTextColor)   

    //Change font size
    const changeTextSize = () => {
        document.getElementsByTagName("body")[0].style.fontSize = document.getElementById("fontSize").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("fontSize", document.getElementById("fontSize").value + "px")
        }
    }

    if(localStorage.getItem("fontSize") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.fontSize = localStorage.getItem("fontSize")
    }

    document.getElementById("fontSize").addEventListener("change", changeTextSize)

    //Change line height
    const changeLineHeight= () => {
        document.getElementsByTagName("body")[0].style.lineHeight = document.getElementById("lineHeight").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("lineHeight", document.getElementById("lineHeight").value + "px")
        }
    }

        document.getElementById("lineHeight").addEventListener("change", changeLineHeight)


    if(localStorage.getItem("lineHeight") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.lineHeight = localStorage.getItem("lineHeight")
    }

    //Change font family
    const changeFontFamily = () => {
        document.getElementsByTagName("body")[0].style.fontFamily = document.getElementById("fontFamilyList").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("fontFamilyList", document.getElementById("fontFamilyList").value)
        }
    }

    if(localStorage.getItem("fontFamilyList") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.fontFamily = localStorage.getItem("fontFamilyList")
    }

    document.getElementById("fontFamilyList").addEventListener("change", changeFontFamily)
}
