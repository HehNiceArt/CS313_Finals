window.onload = function () {
  var parent = document.getElementById('Body')
  $('#Body').css({
    'font-family': 'Open Sans,sans-serif',
    'text-align': 'center',
    color: '#C9BBB0',
    'background-color': '#070d17',
    margin: '0px'
  })
  AllCalls()
  const windowHeight = 650
  CreateRaindrops(30, windowHeight)
}

function AllCalls () {
  Header()
  HeaderSNS()
  SnsImage()
  HeaderList()
  HomeThumbnail()
  ContentContainer()
  Content()
  Flip()
  Footer()
  Watermark()
}
function Header () {
  $('#header').css({
    width: '1080px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-bottom': '0px',
    'margin-top': '0px',
    'padding-top': '15px',
    'padding-bottom': '5px',
    display: 'block',
    height: '50px'
  })
  $('#head_menu').css({ height: '50px', 'margin-top': '0px' })
}
function HeaderSNS () {
  $('#top').css({
    height: '100px',
    'background-image': 'linear-gradient(#011722, transparent)'
  })
  $('#sns').css({
    'margin-top': '10px',
    float: 'right',
    width: 'auto',
    height: 'auto'
  })
  $('#snsList').css({
    display: 'flex',
    'text-align': 'center',
    padding: '0px',
    'list-style': 'none',
    'margin-top': '0px',
    'margin-bottom': '0px'
  })
}
function SnsImage () {
  $('#snsImage').css({
    height: '15px'
  })
  $('#snsImage1').css({
    height: '15px',
    'margin-left': '10px'
  })
  $('#snsImage2').css({
    height: '15px',
    'margin-left': '10px'
  })
}
function HeaderList () {
  $('#border1, #border2, #border3').css({ 'border-left': '1px solid #C9BBB0' })
  $('#header_p1, #header_p2, #header_p3, #header_p4').css({
    'font-size': '12px',
    'padding-left': '10px',
    'padding-right': '10px',
    margin: '0px'
  })
  $('#hrefHome, #hrefillust, #hrefanim, #hrefcont').css({
    color: '#C9BBB0',

    'text-decoration': 'none'
  })
  $('#headerlist').css({
    display: 'inline-flex',
    textAlign: 'center',
    'font-weight': 'bold',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': '0px',
    'margin-bottom': '0px',
    padding: '10px',
    height: '18px',
    listStyle: 'none'
  })
}
function HomeThumbnail () {
  $('#home_thumb').css({
    height: '600px'
  })
}
function ContentContainer () {
  $('#contentContainer').css({
    width: 'auto',
    'margin-left': 'auto',
    'margin-right': 'auto',
    height: 'auto',
    'margin-top': '30px',
    padding: '30px',
    'text-align': 'center',
    'background-color': '#C9BBB0'
  })
  $('#content').css({
    width: '1000px',
    //height: 'auto',
    'margin-bottom': '300px',
    'margin-left': 'auto',
    'margin-right': 'auto'
  })
}
function Content () {
  $('#contentP').css({
    color: 'black',
    'font-size': '18px',
    'margin-top': '25px'
  })
  $('hr').css({
    width: '100%'
  })
  $("p").css({
    'text-align': 'left',
    color: 'black'
  })
  $('#2023P').css({
    'text-align': 'left',
    //color: 'black'
  })
  $('.row').css({
    padding: '8px 8px',
    width: 'auto',
    height: 'auto',
    'padding-bottom': '8px'
  })
  $('.column').css({
    float: 'left',
    'padding-left': '40px',
    'padding-right': '40px',
    'padding-bottom': '40px',
    width: '155px'
  })
  $('.modal').css({
    display: 'none',
    position: 'fixed',
    'z-index': 1,
    'padding-top': '100px',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    overflow: 'auto',
    'background-color': 'black',
  })
  $(".closecursor").css({
    'color': 'white',
    'position': 'absolute',
    'top': '10px',
    'right': '25px',
    'font-size': '35px',
    'font-weight': 'bold'
  })
  $(".closecursor").mouseenter(function(){
  $(this).css({
    'color': '#999',
    'text-decoration': 'none',
    'cursor': 'pointer'
  })
  })
  $(".closecursor").mouseleave(function(){
    $(this).css({
      'color': 'white',
      'position': 'absolute',
      'top': '10px',
      'right': '25px',
      'font-size': '35px',
      'font-weight': 'bold'
    })
  })
}

function Flip () {
  $(document).ready(function () {
    $('#2023Panel, #2022Panel, #2021Panel').slideUp('fast');
    $('#2023P').click(function () {
      if ($('#2023Panel').is(':visible')) {
        $('#2023Panel').slideUp('slow')
      } else {
        $('#2023Panel').slideDown('slow')
      }
    })
    $('#2022P').click(function () {
      if ($('#2022Panel').is(':visible')) {
        $('#2022Panel').slideUp('slow')
      } else {
        $('#2022Panel').slideDown('slow')
      }
    })
    $('#2021P').click(function () {
      if ($('#2021Panel').is(':visible')) {
        $('#2021Panel').slideUp('slow')
      } else {
        $('#2021Panel').slideDown('slow')
      }
    })
    $('#2023P, #2022P, #2021P').mouseenter(function(){
      $(this).css({
        cursor: 'pointer'
      })
    })
  })
}
function openModal () {
  document.getElementById('myModal').style.display = 'block'
}
function CloseModal () {
  document.getElementById('myModal').style.display = 'none'
}
function currentSlide (n) {
  showSlides((slideIndex = n))
}

function Footer () {
  $('#border1, #border2, #border3').css({ 'border-left': '1px solid #C9BBB0' })
  $('#footer').css({
    'background-color': '#070d17',
    margin: '0px',
    'text-align': 'center',
    height: '150px',
    padding: '0px'
  })
  $('#footer_p1, #footer_p2, #footer_p3, #footer_p4').css({
    'padding-left': '10px',
    'padding-right': '10px',
    margin: '0px'
  })
  $('#hrefHome, #hrefillust, #hrefanim, #hrefcont').css({
    color: '#C9BBB0',
    'text-decoration': 'none'
  })
  $('#footerlist').css({
    display: 'inline-flex',
    textAlign: 'center',
    'font-weight': 'bold',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': '30px',
    padding: '10px',
    height: '18px',
    listStyle: 'none'
  })
}

function Watermark () {
  $("#watermark").css({
    'margin-top': '0px',
    'font-size': '12px',
    color: 'white'
  })
  $("#watermarkP").css({
    'text-align': 'center',
    color: '#C9BBB0'
  })
}
function showSlides (n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  var dots = document.getElementsByClassName('demo')
  var captionText = document.getElementById('caption')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
}
function createRaindrop (maxHeight) {
  const raindrop = document.createElement('div')
  raindrop.className = 'raindrop'
  raindrop.style.width = '1.5px'
  raindrop.style.height = `${Math.random() * 20 + 10}px`
  raindrop.style.backgroundColor = '#828282'
  raindrop.style.position = 'absolute'
  const leftPosition = Math.random() * (window.innerWidth - 2)
  raindrop.style.left = `${leftPosition}px`
  document.body.appendChild(raindrop)

  document.getElementById('rain').style.zIndex = '3'
  let position = 0
  const fallSpeed = 10

  function fall () {
    position += fallSpeed
    raindrop.style.top = position + 'px'

    if (position < maxHeight) {
      requestAnimationFrame(fall)
    } else {
      raindrop.remove()
      setTimeout(() => createRaindrop(maxHeight), Math.random() * 3000)
    }
  }

  fall()
}

function CreateRaindrops (numRaindrops, maxHeight) {
  for (let i = 0; i < numRaindrops; i++) {
    setTimeout(() => createRaindrop(maxHeight), Math.random() * 3000)
  }
}
