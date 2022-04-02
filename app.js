
const ui = document.querySelectorAll('.ui-col a');
const followImg = document.querySelectorAll('.follow-img');


ui.forEach((mini,index)=>{

    mini.addEventListener('mousemove',(e)=>{
        //  console.log(index, arr)
     followImg[index].classList.add('come-out')
     followImg[index].style.top = (e.pageY) + 'px';
     followImg[index].style.left = (e.pageX) + 'px';
    })

    mini.addEventListener('mouseout',(e)=>{
        followImg[index].classList.remove('come-out')
    })
})


//slider

const swiper = new Swiper('.swiper',{
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next'
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }

});

//gsap 

gsap.registerPlugin(ScrollTrigger);

gsap.to('.rotate-img',{
    scrollTrigger:{
        trigger:'.hero-section',
         toggleClass:'rotate',
        start:'top top',
        scrub:true,
    },
    rotation:360

})