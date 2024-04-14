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