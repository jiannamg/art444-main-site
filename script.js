function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }

  function darkmode() {

    const adark=document.querySelectorAll('a')
    for (let i = 0; i < adark.length; i++) {
    adark[i].classList.toggle('nav_button-dark');
    }

    const h2dark=document.querySelectorAll('h2')
    for (let i = 0; i < h2dark.length; i++) {
    h2dark[i].classList.toggle('h2-dark');
    }

    const h3dark=document.querySelectorAll('h3')
    for (let i = 0; i < h3dark.length; i++) {
    h3dark[i].classList.toggle('h3-dark');
    }

    const h4dark=document.querySelectorAll('h4')
    for (let i = 0; i < h4dark.length; i++) {
    h4dark[i].classList.toggle('h4-dark');
    }

    const h5dark=document.querySelectorAll('h5')
    for (let i = 0; i < h4dark.length; i++) {
    h5dark[i].classList.toggle('h5-dark');
    }


    const dividerdark=document.querySelectorAll('.blue-dash-divider')
    for (let i = 0; i < dividerdark.length; i++) {
      dividerdark[i].classList.toggle('divider-dark');
    }

    const contactbar=document.querySelectorAll('.u-full-width')
    for (let i = 0; i < contactbar.length; i++) {
      contactbar[i].classList.toggle('u-full-width-dark');
    }

    const faqbuttondark=document.querySelectorAll('.faq-button')
    for (let i = 0; i < faqbuttondark.length; i++) {
      faqbuttondark[i].classList.toggle('faq-button-dark');
    }

    const faqbuttondarkhover=document.querySelectorAll('.faq-button:hover')
    for (let i = 0; i < faqbuttondarkhover.length; i++) {
      faqbuttondarkhover[i].classList.toggle('faq-button-dark:hover');
    }

    const gallerynavframe=document.querySelectorAll('.gallery-navbar-mobile')
    for (let i = 0; i < gallerynavframe.length; i++) {
      gallerynavframe[i].classList.toggle('gallery-navbar-mobile-dark');
    }



    





    document.getElementById('modebutton').classList.toggle('lightmode');
    document.getElementsByClassName('contact-top')[0].classList.toggle('contact-top-dark');
    document.getElementsByClassName('gallery-top')[0].classList.toggle('gallery-top-dark');
    document.getElementsByClassName('gallery')[0].classList.toggle('gallery-dark');
    document.getElementsByClassName('footer')[0].classList.toggle('footer-dark');
    document.getElementsByClassName('persona-answer')[0].classList.toggle('persona-answer-dark');
    document.getElementsByClassName('gallery-bottom')[0].classList.toggle('gallery-bottom-dark');
    document.getElementsByTagName('body')[0].classList.toggle('body-dark');
    document.getElementsByClassName('gallery-frame')[0].classList.toggle('gallery-frame-dark');
    document.getElementsByClassName('gallery-navbar')[0].classList.toggle('gallery-navbar-dark');
    document.getElementsByClassName('contact')[0].classList.toggle('contact-dark');
    document.getElementsByClassName('mainn_nav')[0].classList.toggle('mainn_nav-dark');
    document.getElementsByClassName('header-background')[0].classList.toggle('header-background-dark');
    document.getElementsByClassName('navigation')[0].classList.toggle('navigation-dark');
    document.getElementsByClassName('button-primary')[0].classList.toggle('button-primary-dark');
    document.getElementsByClassName('gallery-frame-tablet')[0].classList.toggle('gallery-frame-tablet-dark');
    document.getElementsByClassName('gallery-frame-tablet')[1].classList.toggle('gallery-frame-tablet-dark');
    document.getElementsByClassName('gallery-center')[0].classList.toggle('gallery-center-dark');
    document.getElementsByClassName('gallery-center')[1].classList.toggle('gallery-center-dark');
    document.getElementsByClassName('header-background')[1].classList.toggle('header-background-dark');

  }


  function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menubutton').classList.toggle('close');
  }


  function mini_nav_button() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menubutton').classList.remove('close');
  }




  
  
  var quotes = [
    'I will be graduating on May 11th, 2024 for the Spring Semester!',
    'I plan to work at the my old restaurant job as a hostess to save money while developing my portfolio. To save up money, while looking for worthwhile job openings I wouldd actually want to pursue. Rather than applying for everything right away. Take my time with it!',
    'My favorite class had to be Graphic Design IV. It was the smallest class turnout I ever had with only 6 students including myself. But the work and interaction with a small enviornment was super fun. I also discovered that I wanted to pursue cafe and restauran branding!',
    'Probably my cafe rebrand guidelines for a cafe in convoy! The space and brand has so much potential and I had a lot of fun designing it!',
    'I love the color yellow! I think I am a pretty upbeat and sunshiny type of demeanor so I love having the color yellow around to brighten the environment I am in! I do not like wearing the color yellow though, it does not compliment me very well.',
    'I know for sure I want to travel. It is intimidating thinking of where to though. I have been to Japan, but I want to go back already.',
    'Currentlyyyyy, I am into my school projects since I am able to invest alot of time into them. But, outside of work I really like the Persona game series and Genshin Impact!',
    'Blah Blah Blah Blah Blah Blah Blah',
  
  ]
  
  
  function firstanswer() {
    //set the typing text
    txt = quotes[0];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function secondanswer() {
    //set the typing text
    txt = quotes[1];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function thirdanswer() {
    //set the typing text
    txt = quotes[2];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function fourthanswer() {
    //set the typing text
    txt = quotes[3];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function fifthanswer() {
    //set the typing text
    txt = quotes[4];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function sixthanswer() {
    //set the typing text
    txt = quotes[5];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function seventhanswer() {
    //set the typing text
    txt = quotes[6];
    
    //reset the index
    i = 0;
    typeWriter();
  }

  function eigthanswer() {
    //set the typing text
    txt = quotes[7];
    
    //reset the index
    i = 0;
    typeWriter();
  }

   var i = 0;
    var txt = ''; //the typing text
    var speed = 50;

    function typeWriter() {

      //clear the html initially for a text
      if (i === 0)
        document.getElementById("faq-question").innerHTML = '';

      if (i < txt.length) {

        document.getElementById("faq-question").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("demo");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
      captionText.innerHTML = dots[slideIndex-1].alt;
    }

  

