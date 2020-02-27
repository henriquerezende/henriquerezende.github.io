window.onload = () =>{
    if(localStorage.getItem("bgColor")){
        document.getElementsByTagName("body")[0].style.backgroundColor = localStorage.getItem("bgColor")
    }
    const changeBackground = () => {
        document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementById("backgroundColor").value
        if(typeof(Storage) != "undefined"){
            localStorage.setItem("bgColor", document.getElementById("backgroundColor").value)
        }
    }
    document.getElementById("backgroundColor").addEventListener("change", changeBackground)    
}
