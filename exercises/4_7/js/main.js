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

    if(localStorage.getItem("bgColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bgColor")
    }
    if(localStorage.getItem("textColor") && typeof(Storage) != "undefined"){
        document.getElementsByTagName("body")[0].style.color = localStorage.getItem("textColor")
    }

    document.getElementById("backgroundColor").addEventListener("change", changeBackground)
    document.getElementById("textColor").addEventListener("change", changeTextColor)   
}
