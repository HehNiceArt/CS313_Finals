window.onload = function () {
  var parent = document.getElementById('Body')
  parent.style.fontFamily = 'sans-serif'
  parent.style.textAlign = 'center'
  parent.style.color = '#C9BBB0'
  parent.style.backgroundColor = '#070d17'
  parent.style.margin = '0px'
  Header()
  HeaderSNS()
  SnsImage()
  HouseImage()
  HideShowImage()
  Greeting()
  Footer()
  Welcome()
  Watermark();

  const windowHeight = 900;
  CreateRaindrops(30, windowHeight);
}
function Header () {
  var header = document.getElementById('header')
  var instruction = document.getElementById('inst')
  if (instruction) {
    instruction.style.fontSize = '0.8rem'
    instruction.style.margin = '1rem'
    instruction.style.display = 'inline'
  }
  if (header) {
    header.style.width = '1080px'
    header.style.marginLeft = 'auto'
    header.style.marginRight = 'auto'
    header.style.marginBottom = '0px'
    header.style.margingTop = '0px'
    header.style.paddingTop = '5px'
    header.style.paddingBottom = '5px'
    header.style.display = 'block'
    header.style.height = '50px'
  }
  var headMenu = document.getElementById('head_menu')
  headMenu.style.height = '50px'
  headMenu.style.marginTop = '20px'
}

function HeaderSNS () {
  var top = document.getElementById('top')
  top.style.height = '100px'
  top.style.backgroundImage = 'linear-gradient(#011722, transparent)'
  var sns = document.getElementById('sns')
  sns.style.marginTop = '0px'
  sns.style.float = 'right'
  sns.style.width = 'auto'
  sns.style.height = 'auto'

  var snsList = document.getElementById('snsList')
  if (snsList) {
    snsList.style.display = 'flex'
    snsList.style.textAlign = 'center'
    snsList.style.padding = '0px'
    snsList.style.listStyle = 'none'
    snsList.style.marginTop = '0px'
    snsList.style.marginBottom = '0px'
  }
}
function SnsImage () {
  var snsImage = document.getElementById('snsImage')
  var snsImage1 = document.getElementById('snsImage1')
  var snsImage2 = document.getElementById('snsImage2')
  if (
    (snsImage && snsImage.style) ||
    (snsImage1 && snsImage1.style) ||
    (snsImage2 && snsImag2.style)
  ) {
    snsImage.style.height = '15px'
    snsImage1.style.height = '15px'
    snsImage1.style.marginLeft = '10px'
    snsImage2.style.height = '15px'
    snsImage2.style.marginLeft = '10px'
  }
}

function HouseImage () {
  var homeContainer = document.getElementById('home')
  homeContainer.style.position = 'relative'

  var homeMain = document.getElementById('home_main')
  homeMain.style.height = '800px'
  homeMain.style.position = 'static'
  homeMain.style.marginLeft = 'auto'
  homeMain.style.marginRight = 'auto'
  homeMain.style.zIndex = '1'

  var homeAnim = document.getElementById('home_anim')
  homeAnim.style.height = '350.4px'
  homeAnim.style.marginTop = '15.5px'
  homeAnim.style.marginLeft = '244px'
  homeAnim.style.position = 'absolute'
  homeAnim.style.zIndex = '2'

  var homeIllust = document.getElementById('home_illust')
  homeIllust.style.height = '415px'
  homeIllust.style.marginTop = '303.9px'
  homeIllust.style.marginLeft = '11px'
  homeIllust.style.position = 'absolute'
  homeIllust.style.zIndex = '2'

  var homeContact = document.getElementById('home_cont')
  homeContact.style.height = '302.5px'
  homeContact.style.marginTop = '406.2px'
  homeContact.style.marginLeft = '667.21px'
  homeContact.style.position = 'absolute'
  homeContact.style.zIndex = '2'

  var homeHome = document.getElementById('home_home')
  homeHome.style.height = '428px'
  homeHome.style.marginTop = '362.4px'
  homeHome.style.marginLeft = '200.7px'
  homeHome.style.position = 'absolute'
  homeHome.style.zIndex = '2'
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
        window.location.href = 'animation.html'
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
        window.location.href = 'illustration.html'
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
        window.location.href = 'contact.html'
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
        window.location.href = 'Home.html'
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
  var welcome = document.getElementById('welcome')
  var welcome_p = document.getElementById('welcome_p')
  var welcome_text = document.getElementById('welcome_text')
  var welcome_fullfilment = document.getElementById('welcome_fullfilment')
  welcome_p.style.color = 'black'
  welcome_p.style.fontSize = '20px'
  welcome_text.style.paddingTop = '10px'
  welcome_text.style.color = 'black'
  welcome_text.style.fontSize = '18px'
  welcome_text.style.textAlign = 'left'
  welcome_fullfilment.style.color = 'black'
  welcome_fullfilment.style.textAlign = 'left'
  welcome_fullfilment.style.fontStyle = 'italic'
  welcome.style.marginLeft = '700px'
  welcome.style.marginRight = '700px'
  welcome.style.textAlign = 'center'
}
function Footer () {
  var footer = document.getElementById('footer')
  var footerList = document.getElementById('footerlist')
  var footerP1 = document.getElementById('footer_p1')
  var footerP2 = document.getElementById('footer_p2')
  var footerP3 = document.getElementById('footer_p3')
  var footerP4 = document.getElementById('footer_p4')
  var border1 = document.getElementById('border1')
  var border2 = document.getElementById('border2')
  var border3 = document.getElementById('border3')
  var hrefHome = document.getElementById('hrefHome')
  var hrefIllust = document.getElementById('hrefillust')
  var hrefAnim = document.getElementById('hrefanim')
  var hrefCont = document.getElementById('hrefcont')

  border1.style.borderLeft = '1px solid #C9BBB0'
  border2.style.borderLeft = '1px solid #C9BBB0'
  border3.style.borderLeft = '1px solid #C9BBB0'
  footer.style.margin = '0px'
  footer.style.textAlign = 'center'
  footer.style.height = '150px'
  footer.style.padding = '0px'

  footerP1.style.paddingLeft = '10px'
  footerP1.style.paddingRight = '10px'
  footerP1.style.margin = '0px'
  footerP2.style.paddingLeft = '10px'
  footerP2.style.paddingRight = '10px'
  footerP2.style.margin = '0px'
  footerP3.style.paddingLeft = '10px'
  footerP3.style.paddingRight = '10px'
  footerP3.style.margin = '0px'
  footerP4.style.paddingLeft = '10px'
  footerP4.style.paddingRight = '10px'
  footerP4.style.margin = '0px'

  hrefHome.style.color = '#C9BBB0'; 
  hrefIllust.style.color = '#C9BBB0';
  hrefAnim.style.color = '#C9BBB0';
  hrefCont.style.color = '#C9BBB0';
  hrefHome.style.textDecoration = 'none'
  hrefIllust.style.textDecoration = 'none';
  hrefAnim.style.textDecoration = 'none';
  hrefCont.style.textDecoration = 'none';

  footerList.style.display = 'inline-flex'
  footerList.style.textAlign = 'center'
  footerList.style.fontWeight = 'bold'
  footerList.style.marginLeft = 'auto'
  footerList.style.marginRight = 'auto'
  footerList.style.marginTop = '30px'
  footerList.style.padding = '10px'
  footerList.style.height = '18px'
  footerlist.style.listStyle = 'none'
}

function Watermark(){
  var watermark = document.getElementById('watermark')
  watermark.style.marginTop = '40px';
  watermark.style.fontSize = '12px';
}

function createRaindrop(maxHeight) {
  const raindrop = document.createElement('div');
  raindrop.className = 'raindrop';
  raindrop.style.width = '1.5px';
  raindrop.style.height = `${Math.random() * 20 + 10}px`;
  raindrop.style.backgroundColor = '#828282';
  raindrop.style.position = 'absolute';
  const leftPosition = Math.random() * (window.innerWidth - 2);
  raindrop.style.left = `${leftPosition}px`;
  document.body.appendChild(raindrop);

  document.getElementById('rain').style.zIndex = '3';
  let position = 0;
  const fallSpeed = 10;

  function fall() {
    position += fallSpeed;
    raindrop.style.top = position + 'px';

    if (position < maxHeight) {
      requestAnimationFrame(fall);
    } else {
      raindrop.remove();
      setTimeout(() => createRaindrop(maxHeight), Math.random() * 3000); 
    }
  }

  fall();
}

function CreateRaindrops(numRaindrops, maxHeight) {
  for (let i = 0; i < numRaindrops; i++) {
    setTimeout(() => createRaindrop(maxHeight), Math.random() * 3000);
  }
}