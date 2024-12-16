let mooresite = gsap.timeline({
  scrollTrigger: {
    trigger: ".mooresite-advantage2-gsap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.mooresite-advantage2-gsap', {
  duration: 3,
  y: 0,
})


let mooresite2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mooresite-advantage1-gsap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.mooresite-advantage1-gsap', {
  duration: 3,
  y: 0,
})

let mooresite3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".mooresite-advantage3-gsap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.mooresite-advantage3-gsap', {
  duration: 3,
  y: 0,
})


let title_mooresite = gsap.timeline({
  scrollTrigger: {
    trigger: ".mooresite",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.mooresite', {
  duration: 3,
  y: 0,
  opacity:1,
})


let project_block = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-block",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.projects-block', {
  duration: 3,
  opacity: 1,
  scale:1
})

let sendTask_wrapper = gsap.timeline({
  scrollTrigger: {
    trigger: ".sendTask",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.sendTask', {
  duration: 3,
  opacity: 1,
  y:0
})

let partner_top_block = gsap.timeline({
  scrollTrigger: {
    trigger: ".partner-top",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.partner-top-block-first', {
  duration: 3,
  opacity: 1,
  x:0
})


let partner_top_music = gsap.timeline({
  scrollTrigger: {
    trigger: ".partner-top",
    start: "top bottom",
    end: "0px",
    scrub: true,
  } 
}).to('.partner-top-block-first', {
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-1',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-2',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-3',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-4',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-5',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.music-player-6',{
  duration: 3,
  opacity: 1,
  x:0
})

let world_clients = gsap.timeline({
  scrollTrigger: {
    trigger: ".worldClients",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.worldClients-title-wrap', {
  duration: 3,
  opacity: 1,
  x:0
}).to('.worldClients-content', {
  duration: 3,
  opacity: 1,
  scale:1
})


let charact_wrap = gsap.timeline({
  scrollTrigger: {
    trigger: ".charact-wrap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.charact-title', {
  duration: 3,
  opacity: 1,
  x:0
}).to('.lev', {
  duration: 3,
  opacity: 1,
  x:0,
  scale:1
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".charact-blocks",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.charact-pk-block-1', {
  duration: 3,
  opacity: 1,
  x:0
}).to('.charact-pk-block-2', {
  duration: 3,
  opacity: 1,
  y:0
}).to('.charact-pk-block-3', {
  duration: 3,
  opacity: 1,
  y:0
}).to('.charact-pk-block-4', {
  duration: 3,
  opacity: 1,
  y:0
}).to('.charact-pk-block-7', {
  duration: 3,
  opacity: 1,
  y:0
}).to('.charact-pk-block-5', {
  duration: 3,
  opacity: 1,
  y:0
}).to('.charact-pk-block-6', {
  duration: 3,
  opacity: 1,
  y:0
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".response-charact",
    start: "top bottom",
    end: "2400px",
    scrub: true,
  } 
}).to('.charact-pk-block-1-res', {
  duration: 4,
  opacity: 1,
  y:0,
  
}).to('.charact-pk-block-2-res', {
  duration: 4,
  opacity: 1,
  y:0
}).to('.charact-pk-block-3-res', {
  duration: 4,
  opacity: 1,
  y:0
}).to('.charact-pk-block-4-res', {
  duration: 4,
  opacity: 1,
  y:0
}).to('.charact-pk-block-5-res', {
  duration: 4,
  opacity: 1,
  y:0
}).to('.charact-pk-block-6-res', {
  duration: 4,
  opacity: 1,
  y:0
}).to('.charact-pk-block-7-res', {
  duration: 4,
  opacity: 1,
  y:0
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".individ",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.individ-owner-image', {
  duration: 3,
  opacity: 1,
  y:0
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".director",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.director', {
  duration: 3,
  opacity: 1,
  y:0
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".price-list-wrap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.bg-owner', {
  duration: 2,
  opacity: 1,
  y:0
}).to('.bg-price-lists-items',{
  duration:3,
  opacity:1,
  y:0
}).to('.price-list-top', {
  duration: 3,
  opacity: 1,
  x:0
}).to('.price-list-blocks',{
  duration: 3,
  opacity: 1,
  x:0
})



gsap.timeline({
  scrollTrigger: {
    trigger: ".planets-wrap",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.planets-title',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.planet-subtitle',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.planet-wrap-social',{
  duration: 3,
  opacity: 1,
  x:0
})


if(window.outerWidth<=762){
  gsap.timeline({
    scrollTrigger: {
      trigger: ".planet-blocks",
      start: "top bottom",
      end: "2000px",
      scrub: true,
    } 
  }).to('.planet-block-1',{
    duration: 3,
    opacity: 1,
    y:0
  }).to('.planet-block-2',{
    duration: 3,
    opacity: 1,
    y:0
  }).to('.planet-block-3',{
    duration: 3,
    opacity: 1,
    y:0
  }).to('.planet-block-4',{
    duration: 3,
    opacity: 1,
    y:0,
  })
}else{
  gsap.timeline({
    scrollTrigger: {
      trigger: ".planets",
      start: "top bottom",
      end: "800px",
      scrub: true,
    } 
  }).to('.planet-block-1',{
    duration: 3,
    opacity: 1,
    y:0
  }).to('.planet-block-2',{
    duration: 3,
    opacity: 1,
    y:0
  }).to('.planet-block-4',{
    duration: 3,
    opacity: 1,
    y:0,
  }).to('.planet-block-3',{
    duration: 3,
    opacity: 1,
    y:0
  })
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".response-banner-advant",
    start: "top bottom",
    end: "300px",
    scrub: true,
  } 
}).to('.banner__tiger__item-1',{
  duration: 3,
  opacity: 1,
  y:0
}).to('.banner__tiger__item-2',{
  duration: 3,
  opacity: 1,
  y:0
}).to('.banner__tiger__item-3',{
  duration: 3,
  opacity: 1,
  y:0,
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".response-projects-lists",
    start: "top bottom",
    end: "300px",
    scrub: true,
  } 
}).to('.response-projects-lists',{
  duration: 3,
  opacity: 1,
  scale:1,
  y:0
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".dev-road-map-response",
    start: "top bottom",
    end: "800px",
    scrub: true,
  } 
}).to('.dev-road-content-block-1',{
  duration: 3,
  opacity: 1,
  x:0
}).to('.dev-road-content-block-2',{
  duration: 3,
  opacity: 1,
  scale:1,
  x:0
}).to('.dev-road-content-block-3',{
  duration: 3,
  opacity: 1,
  x:0
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".add-info",
    start: "top bottom",
    end: "400px",
    scrub: true,
  } 
}).to('.add-info',{
  duration: 3,
  opacity: 1,
  scale:1,
  x:0
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".send-tz",
    start: "top bottom",
    end: "300px",
    scrub: true,
  } 
}).to('.send-tz-top',{
  duration: 3,
  opacity: 1,
  scale:1,
  x:0
})


gsap.timeline({
  scrollTrigger: {
    trigger: ".man-and-lev",
    start: "top bottom",
    end: "300px",
    scrub: true,
  } 
}).to('.man-and-lev',{
  duration: 3,
  opacity: 1,
  scale:1,
  x:0
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".form-tz-wrap",
    start: "top bottom",
    end: "300px",
    scrub: true,
  } 
}).to('.form-tz-wrap',{
  duration: 3,
  opacity: 1,
  scale:1,
  x:0
})
