window.onload = function(){
  var parent = document.getElementById('Body')
  $("#Body").css({
    'font-family': 'Open Sans,sans-serif',
    'text-align': 'center',
    'color': '#C9BBB0',
    'background-color': '#070d17',
    'margin': '0px'
  })
  AllCalls();
  const windowHeight = 650;
  CreateRaindrops(30, windowHeight);
}

function AllCalls(){
  Header();
  HeaderSNS();
  SnsImage();
  HeaderList();
  HomeThumbnail();
  ContentContainer();
  Content();
  Footer();
  Watermark();
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
function HomeThumbnail(){
  $("#home_thumb").css({
    'height': '600px'
  })
}
function ContentContainer () {
  $('#contentContainer').css({
    width: 'auto',
    height: 'auto',
    padding: '30px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'margin-top': '30px',
    'text-align': 'center',
    'background-color': '#C9BBB0'
  })
  $('#content').css({
    width: '1000px',
    height: '500px',
    'margin-bottom': 'auto',
    'margin-left': 'auto',
    'margin-right': 'auto'
  })
}
function Content(){
  $("#content").css({
    color: 'black'
  })
  $("#container").css({
    width: '510px',
    'margin-left': 'auto',
    'margin-right': 'auto'
  })
  $(".formFormat").css({
    'text-align': 'left',
    width: 'auto',
    'margin-top': '10px',
    'margin-bottom': '0px'
  })
  $("#fname, #lname").css({
    width: '500px'
  })
  $("#container").css({
    'text-align': 'left',
    'border-radius': '5px',
    'background-color': '#b4a499',
    'padding': '20px'
  })
  $("#subject").css({
    height: '200px',
    resize: 'none',
    width: '500px',
    'border-radius': '5px'
  })
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