AOS.init({
  offset:120,
  duration:1000,
});

setTimeout(function () {
    var typed = new Typed('.typed', {
    strings: [
      "a Developer.",
      "a Student.",
      "a Photographer.",
      "a Writer.",
      "an Artist.",
      "a Developer."
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop:false
    });
},1000)

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
}); 

//achivements
const txts=document.querySelector(".animate-text").children,
      txtsLen = txts.length;
    let index = 0;

function animateText() {
	for(let i=0; i<txtsLen; i++){
		txts[i].classList.remove("text-in");
	}
	txts[index].classList.add("text-in");
	if(index == txtsLen-1){
		index=0;
	}
	else {
		index++;
	}

	setTimeout(animateText,3000);
}

window.onload=animateText;


//rellax
let rellax= new Rellax('.rellax')