const splitTypes = document.querySelectorAll('.reveal-type')

 
splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                // markers: false ,
                toggleActions: 'play play reverse reverse'
            }
    })
})

gsap.registerPlugin(ScrollTrigger);
                   
const text = document.querySelector("#text_el")
gsap.from( text, {
    opacity:0, 
    duration:2, 
    y:0,
    x:0,
    ease: "slow(0.7,0.7,false)",
})

const element = document.querySelector("#element")
const content = document.querySelector("#content-element")

gsap.from(element, { 
    opacity:0, 
    duration:1,
    y:0,
    x:0,
    scrollTrigger: {
        trigger: content,
        start:"-450%",
        end:"bottom",
         toggleActions: 'play play reverse reverse'
    }
})


const  inicioAnimacao = document.querySelector("#inicioAnimacao");
const  animacaoEmSi = document.querySelector("#animacaoEmSi");

gsap.from(animacaoEmSi, {
    opacity:0,
    y:40, 
    x:50,
    ease: "slow(0.7,0.7,false)",
    duration:1,
    scrollTrigger: {
        trigger: inicioAnimacao,
        start:"-400px",
        end:"bottom",
          toggleActions: 'play play reverse reverse'

    }
})

const imgSection = document.querySelector(".product-image-section") //Local de onde a animaçao parte
const container = document.querySelector(".container");
let painel = document.querySelector(".painel");


let sections =  gsap.utils.toArray(".painel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
        trigger: imgSection,
        pin:true,
        scrub: .01,
        end: "+=3000"
    }
})