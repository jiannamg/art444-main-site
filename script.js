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
  }

  function myMenu() {
    document.getElementById('myMenu').classList.toggle('open');
    document.getElementById('menuButton').classList.toggle('close');
  }


  function mini_nav_button() {
    document.getElementById('myMenu').classList.remove('open');
    document.getElementById('menuButton').classList.remove('close');
  }
