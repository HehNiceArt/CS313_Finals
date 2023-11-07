window.onload = function(){
    var parent = document.getElementById('Body')
  parent.style.fontFamily = 'sans-serif'
  parent.style.textAlign = 'center'
  parent.style.color = '#C9BBB0'
  parent.style.backgroundColor = '#070d17'
  parent.style.margin = '0px'

  const windowHeight = 900;
  CreateRaindrops(30, windowHeight);
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