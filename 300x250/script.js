// Banner duration timer start time
var startTime;

// timelaine vars

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = gsap.timeline({ onComplete: endTime });

  animate();
  // setRollover(); CALLED IN endTime()
}


function animate() {
  tl.set(['#main_content'], { autoAlpha:1, rotation: 0.1, force3D:true });
  tl.set(['#red, #girl, #white, #man'],{rotation: 0.1, force3D:true});
  
    tl.addLabel('frame1', 0)    
      .to('#red', 2, {left:'50%', ease: Power1.easeIn}, 'frame1')
      .to('#girl', 2, {left:'0px', ease: Power1.easeIn}, 'frame1+=.5')
      .to('#man', 2, {left:'0px', ease: Power1.easeIn}, '<')
      .to(['#girl'],1,{scale:0.645, left:-27, bottom: -38, ease: Power1.easeIn}, 'frame+=.5')
      .to(['#man'],1,{scale:0.645, left:27, bottom: -39, ease: Power1.easeIn},'<')
      .to(['#copy1'],1,{autoAlpha:1, ease: Power1.easeIn},'frame1+=3.5');
    

    tl.addLabel('frame2', 'frame1+=5')  
      .to('#red', 1, {left:'0', ease: Power1.easeIn}, 'frame2')
      .to(['#man'],1,{left:-130, ease: Power1.easeIn}, '<')
      .to(['#girl'],1,{left:-130, ease: Power1.easeIn}, 'frame2+=.7')

    tl.addLabel('frame3', 'frame2+=1.2')  
      .to(['#mobile'],1.5,{left:0, autoAlpha:1, ease: Power1.easeIn}, 'frame3')
      .to(['#copy1'],.5,{ autoAlpha:0, ease: Power1.easeIn}, 'frame3+=.5')
      .to(['#copy2'],.5,{ autoAlpha:1, ease: Power1.easeIn}, 'frame3+=1.5')

    tl.addLabel('frame4', 'frame3+=3')
      .to(['#mobile, #copy1, #copy2'],.5,{ autoAlpha:0, ease: Power1.easeIn}, 'frame4')
      .to(['#copy3, #logo'],.5,{ autoAlpha:1, ease: Power1.easeIn}, 'frame4+=1')
      .to(['#cta'],.5,{ autoAlpha:1, ease: Power1.easeIn}, 'frame4+=2')
      .to(['#legal'],.5,{ autoAlpha:0, ease: Power1.easeIn}, 'frame4')

      .to(['#white, #red'],{ autoAlpha:0,}, 'frame4')
}





// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  gsap.to(["#cta"], 0.3, { scale: 1.05, ease: Power1.easeInOut });
}

function default_out(event) {
  gsap.to(["#cta"], 0.3, {scale: 1, ease: Power1.easeInOut});
}


// End timer

function endTime() {
  setRollover()
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}