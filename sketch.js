let cam1
let cam2


function setup() {
  createCanvas(windowWidth, windowHeight);
  cam1 = createCapture(VIDEO);
  // cam1.size();
  cam1.hide();
  cam2 = createCapture(VIDEO);
  cam2.hide();

  let div1 = createDiv('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278.6285144749442!2d144.96580344561502!3d-37.8059355681024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cdc133add5%3A0x74d384e7855d54ee!2sRMIT%20Building%2057!5e0!3m2!1sen!2sau!4v1665506136819!5m2!1sen!2sau" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
  div1.style('z-index: 1');
  div1.position(200, 200);

  let div2 = createDiv('<iframe width="560" height="315" src="https://www.youtube.com/embed/nwibL__1Ux4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  div2.style('z-index: -1');
  div2.position(800, 100);
}

function snapme() {
  if (mouseIsPressed === true) {
    image(cam2, mouseX-110, mouseY-80, 220, 160);
    textSize(20);
    text([year(),month(),day()], mouseX-110, mouseY-120);
    text([hour()+'h',minute()+'min'], mouseX-110, mouseY-90);
    // line(mouseX-110, mouseY-80, pmouseX-110, pmouseY-80);
    // frameRate(1);
  }
  // else {
  //   frameRate(30);
  // }
}



function draw() {
  background(0, 0, 0, 0.6) 
  // the alpha value here is a trick i came up after several experiments, 
  // to save the trace of previous snaps
  // it might be another ways to achieve this function, 
  // but I think this method works particularly well artistically and visually,
  // with the effect of film pictures, if you pick the right value
  image(cam1,0, 0, 320, 240);
  // live reference
  snapme();
}
