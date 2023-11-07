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
  Content();
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
function Content(){
  $("#contentContainer").css({
    'background-color': '#C9BBB0',
    height: '1000px'
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