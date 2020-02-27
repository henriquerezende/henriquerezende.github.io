window.onload = () =>{
    const changeBackground = () => {
        document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementById("backgroundColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("bgColor", document.getElementById("backgroundColor").value)
        }
    }

    const changeTextColor = () => {
        document.getElementsByTagName("body")[0].style.color = document.getElementById("textColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("textColor", document.getElementById("textColor").value)
        }
    }

    const changeTextSize = () => {
        document.getElementsByTagName("body")[0].style.fontSize = document.getElementById("fontSize").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("fontSize", document.getElementById("fontSize").value + "px")
        }
    }

    const changeLineHeight= () => {
        document.getElementsByTagName("body")[0].style.lineHeight = document.getElementById("lineHeight").value + "px"
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("lineHeight", document.getElementById("lineHeight").value + "px")
        }
    }



    if(localStorage.getItem("bgColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bgColor")
    }
    if(localStorage.getItem("textColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.color = localStorage.getItem("textColor")
    }
    if(localStorage.getItem("fontSize") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.fontSize = localStorage.getItem("fontSize")
    }
    if(localStorage.getItem("lineHeight") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.lineHeight = localStorage.getItem("lineHeight")
    }

    document.getElementById("backgroundColor").addEventListener("change", changeBackground)
    document.getElementById("textColor").addEventListener("change", changeTextColor)   
    document.getElementById("fontSize").addEventListener("change", changeTextSize)
    document.getElementById("lineHeight").addEventListener("change", changeLineHeight)
}
