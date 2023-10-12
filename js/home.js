
var x = document.getElementById("myAudio");
var layout = document.getElementById("layout")
var layout2 = document.getElementById("layout2")

let url = window.location.pathname

function playAudio() {
    x.play();
    layout.style.animation = "jumbotron 2s alternate"
    setTimeout(() => {
        layout.style.display= "none"
    }, 2000)
    layout2.style.display = "block"
    
}

function randomNum(){
    return Math.floor(Math.random() * 218);
}

function image(id){
    let image = "/Images/"+randomNum()+".jpg"
    document.getElementById("image1").style.animation = "opacity 2s 2s normal"
    return document.getElementById(id).src = image
}



setTimeout(() => {
    for(let i = 0; i <= 217; i++){ 
            
        
    }
},2000)
function doDate() {
    let current = new Date()
    let time = current.getSeconds()
    console.log(time)
    if(time % 2 == 0){
        image("image0")
        image("image4")
        image("image8")
        image("image12")
        image("image16")
        image("image20")
        image("image24")
        image("image28")
        image("image32")
    }
    if(time % 3 == 1){ 
        image("image1")
        image("image5")
        image("image9")
        image("image13")
        image("image17")
        image("image21")
        image("image25")
        image("image29")
        image("image33")
    }
    if(time % 2 == 0){ 
        image("image2")
        image("image6")
        image("image10")
        image("image14")
        image("image18")
        image("image22")
        image("image26")
        image("image30")
        image("image34")
    }
    if(time % 3 == 2){ 
        image("image3")
        image("image7")
        image("image11")
        image("image15")
        image("image19")
        image("image23")
        image("image27")
        image("image31")
        image("image35")
    }
  }
  
  setInterval(doDate, 1000);


