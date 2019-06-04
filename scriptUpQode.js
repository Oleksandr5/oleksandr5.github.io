//For sliders waiting times

$('.carousel1').carousel ({
    interval: 3000
});

$('.carousel').carousel ({
    interval: 4000
});

// For menu: Activate scrollspy to add active class to navbar items on scroll

(function($) { 

  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); 

// For menu: background and color on hover

let aMenu = document.querySelectorAll('.navbar-nav .dropdown-menu a');
let dropdown_item = document.querySelectorAll('.dropdown-item');

for (let i = 0; i < aMenu.length; i++) {    
    
        aMenu[i].onmouseover = function () {
           aMenu[i].style.background = "#2c1e41";
           aMenu[i].style.color = "#e3d609";
        }
    
        aMenu[i].onmouseout = function () {
                    aMenu[i].style.background = "none"; 
                    aMenu[i].style.color = "#fff";
        }
}


// For height slider

function windowSizeFonTop () {
    var heightFonTop = $('.img-my').height();
    $('.block-my-2').height(heightFonTop);
}

$(window).on('load resize', windowSizeFonTop);


// For height Map

function windowSizeMap () {
    var heightMap = $('.map-my').height();
    $('.form-block').height(heightMap);
}

$(window).on('load resize', windowSizeMap);


// Form validation

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//Skillbars

(function($){
  $(document).ready(function(){
    var $els = $('.skillbar'); // Note this must be moved to within event handler if dynamically adding elements - I've placed it for performance reasons 
    var $window = $(window);
    
    $window.on('scroll', function(){
      $els.each(function(){ // Iterate over all skillbars
        var $this = $(this); 
        if($window.scrollTop() > $this.offset().top - $window.height()){ // Check if it in viewport
          $this.find('.skillbar-bar').css({'width' : $this.attr('data-percent')}); // Update the view with percentage
        }
      });
    
    });
  });
}(jQuery));


// Array slider

 const slider = [
        { h2: 'Creative <span>Design Agency</span>', p: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.', a: 'active'},
        { h2: 'Creative <span>Design Agency</span>', p: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.'},
        { h2: 'Creative <span>Design Agency</span>', p: 'Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.'}       
    ]
    function createSlider(sliderValue) {
        return `           
        <div class="carousel-item ${sliderValue.a}">
        <div class="row text-center justify-content-center text-slider">
          <div class="col-12">
            <h2 class="bold">${sliderValue.h2}</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-6 p-sl">
            <p>${sliderValue.p}</p>
          </div>
        </div>
        </div>
            `
    }
    let block_slider = document.querySelector('.slider');
    const templatesSlider = slider.map(sliderValue => createSlider(sliderValue));
    const htmlSlider = templatesSlider.join(' ');
    block_slider.innerHTML = htmlSlider;


// Array WHY CHOOSE US

 const yourTitle = [
        { icon: 'favorite_border', h4: 'Your Title', p: 'Duis bibendum diam non erat facilaisis en ter tincidunt. Duis '},
        { icon: 'sms', h4: 'Your Title', p: 'Duis bibendum diam non erat facilaisis en ter tincidunt. Duis '},
        { icon: 'laptop', h4: 'Your Title', p: 'Duis bibendum diam non erat facilaisis en ter tincidunt. Duis '},
        { icon: 'star_border', h4: 'Your Title', p: 'Duis bibendum diam non erat facilaisis en ter tincidunt. Duis '},
        { icon: 'flag', h4: 'Your Title', p: 'Duis bibendum diam non erat facilaisis en ter tincidunt. Duis '}
    ]
    function createTitle(title) {
        return `           

        <div class="col-6 col-sm-4 col-lg-2 p-0">
          <div class="card">
            <div class="img-title">
                <i class="material-icons icon-size">${title.icon}</i>            
            </div>
            <div class="card-body card-my">
              <h4 class="bold">${title.h4}</h4>               
              <p>${title.p}</p>
              <div class="card-hover">
                    <div class="pt-2 pb-2 justify-content-center">
                      <div class="text-see">
                        <a href="#" class="bold">see more</a>
                      </div>
                        
                      <div class="icons-see">
                        <a href="#"><img src="img/infinity.png" alt=""></a>
                        <a href="#"><img src="img/plus.png" alt=""></a>                        
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
            `
    }
    let why_choose_us = document.querySelector('.title');
    const templatesTitle = yourTitle.map(title => createTitle(title));
    const htmlTitle = templatesTitle.join(' ');
    why_choose_us.innerHTML = htmlTitle;


// For hover card
    
    let card_my = document.querySelectorAll('.card-my');
    let card_hover = document.querySelectorAll('.card-hover');
    for (let i = 0; i < card_my.length; i++) {

    card_my[i].onmouseover = function () {
            card_hover[i].style.display = 'flex';
        }
    card_my[i].onmouseout = function () {
            card_hover[i].style.display = 'none';
        }
    }

// For height card-hover

function windowHeightCard () {
    let heightCard = $('.card-my').height();
    $('.card-hover').height(heightCard);
}

$(window).on('load resize', windowHeightCard);



// Array products

 const productsValue1 = [
        { src: 'img/title1.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title2.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title3.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title4.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title5.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title6.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'}
    ]
    function createProducts1(product1) {
        return `           

        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-0">

          <div class="media">
            <img class="media-left" alt="Image" src="${product1.src}">
            <div class="media-body pl-3 text-my">
              <h4 class="bold">${product1.h4}</h4>
              <h5 class="bold">${product1.h5}</h5>
              <p>${product1.p}</p>
            </div>
          </div>

        </div>
            `
    }
    let block_products1 = document.querySelector('.products1');
    const templatesProducts1 = productsValue1.map(product1 => createProducts1(product1));
    const htmlProducts1 = templatesProducts1.join(' ');
    block_products1.innerHTML = htmlProducts1;

    const productsValue2 = [
        { src: 'img/title1.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title2.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title3.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title4.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title5.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title6.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'}
    ]
    function createProducts2(product2) {
        return `           

        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-0">

          <div class="media">
            <img class="media-left" alt="Image" src="${product2.src}">
            <div class="media-body pl-3 text-my">
              <h4 class="bold">${product2.h4}</h4>
              <h5 class="bold">${product2.h5}</h5>
              <p>${product2.p}</p>
            </div>
          </div>

        </div>
            `
    }
    let block_products2 = document.querySelector('.products2');
    const templatesProducts2 = productsValue2.map(product2 => createProducts2(product2));
    const htmlProducts2 = templatesProducts2.join(' ');
    block_products2.innerHTML = htmlProducts2;

    const productsValue3 = [
        { src: 'img/title1.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title2.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title3.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title4.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title5.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'},
        { src: 'img/title6.png', h4: 'Title', h5: 'Best Produkt', p: 'Duis bibendum diam non erat facilaisis en ter'}
    ]
    function createProducts3(product3) {
        return `           

        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 p-0">

          <div class="media">
            <img class="media-left" alt="Image" src="${product3.src}">
            <div class="media-body pl-3 text-my">
              <h4 class="bold">${product3.h4}</h4>
              <h5 class="bold">${product3.h5}</h5>
              <p>${product3.p}</p>
            </div>
          </div>

        </div>
            `
    }
    let block_products3 = document.querySelector('.products3');
    const templatesProducts3 = productsValue3.map(product3 => createProducts3(product3));
    const htmlProducts3 = templatesProducts3.join(' ');
    block_products3.innerHTML = htmlProducts3;


// Array skill

 const skillValue = [
        { percent: '79%', span: 'Photoshop'},
        { percent: '90%', span: 'HTML/CSS'},
        { percent: '69%', span: 'JavaScript'},
        { percent: '92%', span: 'Wordpress'}
    ]
    function createSkill(skill) {
        return `           

        <div class="skillbar clearfix " data-percent="${skill.percent}">

            <div class="skillbar-title">
              <span class="bold">${skill.span}</span>
            </div>
            <div class="widthSkillbar">
              <div class="skillbar-bar" style="background: #009dda; width: 0%"></div>
            </div>

            <div class="skill-bar-percent bold">${skill.percent}</div>
          </div>
          <br>
            `
    }
    let block_skill = document.querySelector('.skill-my');
    const templatesSkill = skillValue.map(skill => createSkill(skill));
    const htmlSkill = templatesSkill.join(' ');
    block_skill.innerHTML = htmlSkill;
