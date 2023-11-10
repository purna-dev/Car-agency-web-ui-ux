const cars = document.querySelectorAll('section .cars')
const pages = document.querySelectorAll('.pages .page')
const menu = document.querySelector('header .menu')
const options = document.querySelector('.navbar nav ul')
const closee = document.querySelector('.navbar nav ul .close');


//loader
let l_line = document.querySelector('#loader .l .per .l_line')



console.log(pages)


function loader() {

    function start_l() {
        l_line.style.width = '0vw'
        let i = 0;
        let intervalMe = setInterval(() => {

            let no = Math.floor(Math.random() * 15 + 1)
            i= i+no;
            console.log(i)
            if (i > 100) {
                document.getElementById('persent').innerText = 100 + '%';
                l_line.style.width = '100vw'
                gsap.to('#loader',{
                   y:'-100vh',
                   duration:0.5,
                   delay:1,
                   ease:Power4.out
                })
                clearInterval(intervalMe);
                
                
                

            } else {
                document.getElementById('persent').innerText = i + '%';
                gsap.to('#loader .l .per .l_line', {

                    width: `${i}vw`,
                    duration: 2,
                    ease: Power4.out,
            
                })
                gsap.to('#loader .l .l_img img',{
                    
                    // width: `${i}vw`,
                    transform:`translateX(${i}vw)`,

                    duration: 2,
                    ease: Power4.out,
                })


            }
        }, 1000)
    }

    gsap.from('#loader', {

        // width: '0vw',
        duration: 2,
        ease: Power4.out,
        onStart: start_l()

    })



}
loader()

function menufun() {
    menu.addEventListener('click', (e) => {

        gsap.to('.navbar nav ul', {
            display: 'block',
            width: '450px',
            height: '450px',
            duration: 1,
            ease: Power4.in,
        })

        gsap.to('.navbar nav ul img ', {
            y: 0,
            duration: 1,

            ease: Power4.out,
        })
        // gsap.from('.navbar nav ul li',{
        //     opacity:0,
        //     duration:2,
        //     ease:Power2.in,
        // })

    })
}
menufun()

function close() {
    closee.addEventListener('click', () => {

        gsap.to('.navbar nav ul', {
            display: 'none',

            width: '0px',
            height: '0px',
            duration: 1,
            ease: Power4.in,
        })

        gsap.to('.navbar nav ul img ', {
            y: -150,
            duration: 1,

            ease: Power4.out,
        })




    })
}
close()



function startme() {
    cars.forEach((e, i) => {
        e.style.display = 'none';
    })
    cars[0].style.display = 'block';
    pages[0].classList.add('active')
    pages[0].style.color = '#ffd800';

}

pages.forEach((e, i, arr) => {

    e.addEventListener("click", function () {
        if (e.innerHTML === '01') {
            e.classList.add('active')
            e.style.color = '#ffd800';

            arr[1].classList.remove('active')
            arr[1].style.color = '';
            arr[2].classList.remove('active')
            arr[2].style.color = '';
            arr[3].classList.remove('active')
            arr[3].style.color = '';
            arr[4].classList.remove('active')
            arr[4].style.color = '';

            cars[0].style.display = 'block';
            cars[1].style.display = 'none';
            cars[2].style.display = 'none';
            cars[3].style.display = 'none';
            cars[4].style.display = 'none';

            gsap.from('.car_d .car_img', {
                opacity: 0,
                y: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })
            gsap.from('.car_d .car_text', {
                opacity: 0,
                x: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })




        } else if (e.innerHTML === '02') {
            e.classList.add('active')
            e.style.color = '#ffd800';
            arr[0].classList.remove('active')
            arr[0].style.color = '';
            arr[2].classList.remove('active')
            arr[2].style.color = '';
            arr[3].classList.remove('active')
            arr[3].style.color = '';
            arr[4].classList.remove('active')
            arr[4].style.color = '';

            cars[0].style.display = 'none';
            cars[1].style.display = 'block';
            cars[2].style.display = 'none';
            cars[3].style.display = 'none';
            cars[4].style.display = 'none';

            gsap.from('.car_d .car_img', {
                opacity: 0,
                y: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })
            gsap.from('.car_d .car_text', {
                opacity: 0,
                x: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })


        }
        if (e.innerHTML === '03') {
            e.classList.add('active')
            e.style.color = '#ffd800';
            arr[1].classList.remove('active')
            arr[1].style.color = '';
            arr[0].classList.remove('active')
            arr[0].style.color = '';
            arr[3].classList.remove('active')
            arr[3].style.color = '';
            arr[4].classList.remove('active')
            arr[4].style.color = '';


            cars[0].style.display = 'none';
            cars[1].style.display = 'none';
            cars[2].style.display = 'block';
            cars[3].style.display = 'none';
            cars[4].style.display = 'none';

            gsap.from('.car_d .car_img', {
                opacity: 0,
                y: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })
            gsap.from('.car_d .car_text', {
                opacity: 0,
                x: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })

        }
        if (e.innerHTML === '04') {
            e.classList.add('active')
            e.style.color = '#ffd800';
            arr[1].classList.remove('active')
            arr[1].style.color = '';
            arr[2].classList.remove('active')
            arr[2].style.color = '';
            arr[0].classList.remove('active')
            arr[0].style.color = '';
            arr[4].classList.remove('active')
            arr[4].style.color = '';

            cars[0].style.display = 'none';
            cars[1].style.display = 'none';
            cars[2].style.display = 'none';
            cars[3].style.display = 'block';
            cars[4].style.display = 'none';

            gsap.from('.car_d .car_img', {
                opacity: 0,
                y: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })
            gsap.from('.car_d .car_text', {
                opacity: 0,
                x: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })


        }
        if (e.innerHTML === '05') {
            e.classList.add('active')
            e.style.color = '#ffd800';
            arr[1].classList.remove('active')
            arr[1].style.color = '';
            arr[2].classList.remove('active')
            arr[2].style.color = '';
            arr[0].classList.remove('active')
            arr[0].style.color = '';
            arr[3].classList.remove('active')
            arr[3].style.color = '';


            cars[0].style.display = 'none';
            cars[1].style.display = 'none';
            cars[2].style.display = 'none';
            cars[3].style.display = 'none';
            cars[4].style.display = 'block';

            gsap.from('.car_d .car_img', {
                opacity: 0,
                y: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })
            gsap.from('.car_d .car_text', {
                opacity: 0,
                x: -10,
                duration: 2,
                delay: 0.1,
                ease: Expo.in,
            })

        }



    })

})

window.onload = startme();


//scroll

function scrollme() {
    window.addEventListener('scroll', (e) => {
        console.log(e)
    })
}
scrollme()