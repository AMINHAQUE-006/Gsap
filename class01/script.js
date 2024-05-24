let Gsap = gsap.timeline();

Gsap.from(".nav-item", {
    y: -200,
    delay: 1,
    duration: 1,
    stagger: 0.5,
})

Gsap.to(".nav-item", {
    color: "red",
    fontSize: "2.3rem",
    x: 200,
    duration: 1,
    stagger: .5,
})

Gsap.from("h2", {
    opacity: 0,
    y: 200,
    color: "red",
    fontSize: "2.3rem",
})

Gsap.from("h1", {
    opacity: 0,
    y: 200,
    color: "red",
    fontSize: "2.3rem",
})

