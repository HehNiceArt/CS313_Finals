window.onload = function () {
  var parent = document.getElementById('Body')
  $("#Body").css({
    'font-family': 'Open Sans,sans-serif',
    'text-align': 'center',
    'color': '#C9BBB0',
    'background-color': '#070d17',
    'margin': '0px'
  })
  
  
  AllCalls();
  const windowHeight = 900
  CreateRaindrops(30, windowHeight)
}

function AllCalls(){
  Header()
  HeaderSNS()
  SnsImage()
  HouseImage()
  HideShowImage()
  Greeting()
  Footer()
  Welcome()
  Watermark()
}
function Header () {
  $('#inst').css({ fontSize: '0.8rem', margin: '1rem', display: 'inline' })
  $('#header').css({
    width: '1080px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-bottom': '0px',
    'margin-top': '0px',
    'padding-top': '5px',
    'padding-bottom': '5px',
    display: 'block',
    height: '50px'
  })
  $('#head_menu').css({ height: '50px', 'margin-top': '20px' })
}

function HeaderSNS () {
  $('#top').css({
    height: '100px',
    'background-image': 'linear-gradient(#011722, transparent)'
  })
  $('#sns').css({
    'margin-top': '0px',
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

function HouseImage () {
  $('#home').css({
    position: 'relative'
  })
  $('#home_main').css({
    height: '800px',
    position: 'static',
    'margin-left': 'auto',
    'margin-right': 'auto',
    zIndex: '1'
  })
  $('#home_anim').css({
    height: '350.4px',
    marginTop: '15.5px',
    marginLeft: '244px',
    position: 'absolute',
    zIndex: '2'
  })
  $('#home_illust').css({
    height: '415px',
    marginTop: '303.9px',
    marginLeft: '11px',
    position: 'absolute',
    zIndex: '2'
  })
  $('#home_cont').css({
    height: '302.5px',
    marginTop: '406.2px',
    marginLeft: '667.21px',
    position: 'absolute',
    zIndex: '2'
  })
  $('#home_home').css({
    height: '428px',
    marginTop: '362.4px',
    marginLeft: '200.7px',
    position: 'absolute',
    zIndex: '2'
  })
}
function HideShowImage () {
  $(document).ready(function () {
    var homeAnim = document.getElementById('home_anim')
    var homeIllust = document.getElementById('home_illust')
    var homeContact = document.getElementById('home_cont')
    var homeHome = document.getElementById('home_home')

    //#region Animation
    $('home_anim').ready(function () {
      homeAnim.style.opacity = '0'
    })
    $('.home_animation').mouseenter(function () {
      homeAnim.style.opacity = '1'
      $('.home_animation').on('click', function () {
        window.location.href = './src/animation.html'
      })
    })
    $('.home_animation').mouseleave(function () {
      homeAnim.style.opacity = '0'
    })
    //#endregion
    //#region Illustration
    $('home_illust').ready(function () {
      homeIllust.style.opacity = '0'
    })
    $('.home_illustration').mouseenter(function () {
      homeIllust.style.opacity = '1'
      $('.home_illustration').on('click', function () {
        window.location.href = './src/illustration.html'
      })
    })
    $('.home_illustration').mouseleave(function () {
      homeIllust.style.opacity = '0'
    })
    //#endregion
    //#region Contact
    $('home_cont').ready(function () {
      homeContact.style.opacity = '0'
    })
    $('.home_contact').mouseenter(function () {
      homeContact.style.opacity = '1'
      $('.home_contact').on('click', function () {
        window.location.href = './src/contact.html'
      })
    })
    $('.home_contact').mouseleave(function () {
      homeContact.style.opacity = '0'
    })
    //#endregion
    //#region Home
    $('home_home').ready(function () {
      homeHome.style.opacity = '0'
    })
    $('.home_home_light').mouseenter(function () {
      homeHome.style.opacity = '1'
      $('.home_home_light').on('click', function () {
        window.location.href = 'index.html'
      })
    })
    $('.home_home_light').mouseleave(function () {
      homeHome.style.opacity = '0'
    })
    //#endregion
  })
}

function Greeting () {
  var greeting = document.getElementById('greeting')
  greeting.style.backgroundColor = '#C9BBB0'
  greeting.style.height = '250px'
  greeting.style.textAlign = 'center'
  greeting.style.paddingTop = '50px'
  greeting.style.paddingBottom = '50px'
  greeting.style.marginTop = '20px'
  greeting.style.border = '0px'
}
function Welcome () {
  $('#welcome').css({
    'margin-left': 'auto',
    'margin-right': 'auto',
    width: '500px',
    textAlign: 'left'
  })
  $('#welcome_p').css({
    color: 'black',
    fontSize: '20px'
  })
  $('#welcome_text').css({
    'padding-top': '10px',
    color: 'black',
    fontSize: '18px',
    textAlign: 'left'
  })
  $('#welcome_fullfilment').css({
    color: 'black',
    'text-align': 'left',
    fontstyle: 'italic'
  })
  $('#Signature_black').css({
    height: '100px',
    position: 'absolute',
    'margin-left': '600px',
    'margin-bottom': '0px'
  })
  $('#Signature_black2').css({
    height: '100px',
    position: 'absolute',
    'margin-left': '-250px'
  })
}
function Footer () {
  $('#border1, #border2, #border3').css({ 'border-left': '1px solid #C9BBB0' })
  $('#footer').css({
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
    'margin-top': '40px',
    'font-size': '12px'
  })
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
  const fallSpeed = Math.random() * 15 + 5;

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
