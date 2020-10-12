canvas = document.getElementById("canvas")
canvas.focus()
c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const H =  canvas.height
const W = canvas.width
c.fillStyle = "#000000"
c.fillRect(0, 0, W, H)

var x = 0;
var y = 0;
var ang = 0;
var cAng = 0;
var lAng = 0;

function largeScaleV(){
    x+=0.3 * Math.cos(lAng)
    y+=0.3 * Math.sin(lAng)
}

function toColor(cAng){
    var red = Math.floor(Math.abs(Math.sin((cAng) * 2*Math.PI)) * 256)
    var blue = Math.floor(Math.abs(Math.sin((cAng + 0.33) * 2*Math.PI)) * 256)
    var green = Math.floor(Math.abs(Math.sin((cAng + 0.67) * 2*Math.PI)) * 256)
    var color = red*65536+blue*256+green
    return "#" + color.toString(16)
}

function randUpdate(){
    var r = Math.random()
    var sign = 2 * Math.floor(2 * Math.random()) - 1
    return Math.PI * Math.pow(r, 1) * sign
}

function nextPoint(){
    largeScaleV()
    cAng += 0.0001;
    cAng %= 1;
    c.fillStyle = toColor(cAng)
    c.fillRect(x, y, 1, 1)
    ang += randUpdate()
    x += 5 * Math.cos(ang)
    y += 5 * Math.sin(ang)
    x += W
    y += H
    x %= W
    y %= H
}
setInterval(()=>{
    c.fillStyle = "black"
    c.fillRect(0, 0, W, H)
    for(var i = 0; i < 50000; i ++){
        if (i % 1000 == 0){
            lAng = Math.PI * 2 * Math.random()
        }
        nextPoint()
}})
