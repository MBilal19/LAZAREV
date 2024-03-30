
var nav = document.querySelectorAll("nav")
nav.forEach(function(nav1) {
nav1.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to (".nav-bottom" , {
        height:"21vh"
    } )
    tl.to (" .nav-part2 h5 span " , {
        display : "inline-block"
    } )
    tl.to (" .nav-part2 h5 span " , {
        y : 5 ,
        stagger : {
            amount : 0.5
        }
    })

})



nav1.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y: 5,
        stagger: {
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to(".nav-bottom", {
        height: 0,
        duration: 0.2
    })
})
})


var rightElems= document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })

    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })

    

    elem.addEventListener("mousemove", function (dets) {

        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 115
        })
    })
    
})

var page3center = document.querySelector(".page3-center")
var video = document.querySelector(".page-3 video")
page3center.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform: "scaleX(1)  scaleY(1)",
        opacity : 1,
        borderRadius: 0,
    })


    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform:"scaleX(0) scaleY(0)",
            opacity:0,
            borderRadius:"30px",
        })
    })

})
