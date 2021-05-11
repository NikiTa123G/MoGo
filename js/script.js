
//scroll-anim=================================================-start-//

animItems = document.querySelectorAll('.anim-items');

statisticArr = new Array(42, 123, 15, 99, 24);

lockNum = true;

let statisticVal = document.querySelectorAll('.statistic-quantity');


if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll(){
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 5.5;
         
         statisticAnim = document.querySelector('.statistic-quantity.animation');

         if (statisticAnim) {
         	funFor();
         }
         	
         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('animation');
         }
           // else{
           //  animItem.classList.remove('animation');
           // }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   animOnScroll();
}



function funFor() {

	if (lockNum) {
		for (let a = 0; a < statisticVal.length; a++) {
			let elNum =  statisticVal[a];
			let bracePoint = statisticArr[a];
			animStatistic(a, elNum, bracePoint);
		}
	}

	let statisticAnim = document.querySelectorAll('.statistic-quantity.animation');
	if (statisticAnim) {
		lockNum = false;
	}

	statisticAnimActive = document.querySelectorAll('.statistic-quantity.statistic-anim-active');

}

function animStatistic(a, elNum, bracePoint) {
	let n = 0;
	let t = 3000 / bracePoint;
	
	let step = 1;

	let interval = setInterval(() => {
		n = n + step;
		if (n == bracePoint) {
			clearInterval(interval);
		}
		elNum.innerHTML = n;
	},t);
}

//scroll-anim=================================================-end-//

//===================---//nav//---======================//

window.onscroll = () => {
	const nav = document.querySelector('.navigation');
	const scrollY = window.scrollY;
	const windowHeight = window.innerHeight;

	if (scrollY > windowHeight * 0.4) {
		nav.classList.add('color');
	}else{
		nav.classList.remove('color');
	}
	for (let i = 0; i < arrNav.length; i++) {
		const arrNavThis = arrNav[i].offsetTop;
		if ((scrollY > arrNavThis - windowHeight * 0.7) && (scrollY < arrNavThis+ windowHeight * 0.3) && keyNavLinck) {
			removeActiveNavLinck();
			navLincks[i].classList.add('active');
		}
	}
}

//===================---//nav//---======================//

//=====================---//scroll-to//---========================//

function scrollTo(el) {
	window.scroll({
		left: 0,
		top: el.offsetTop - 82,
		behavior: 'smooth'
	});
}

arrNav = document.querySelectorAll('.scrol-to');
navLincks = document.querySelectorAll('.menu-item.link');
keyNavLinck = true;

for (let i = 0; i < navLincks.length; i++) {
	const navLinck = navLincks[i];
	navLinck.addEventListener('click', function(e) {
		removeActiveNavLinck();
		navBurger.classList.remove('active');
		navigation.classList.remove('menu-active');
		body.classList.remove('lock');
		navLinck.classList.add('active');
		const el = arrNav[i];
		keyNavLinck = false;
		scrollTo(el);
		e.preventDefault();
		setTimeout(function() {
			keyNavLinck = true;
		}, 700);
	});
}

function removeActiveNavLinck() {
	let navActive = document.querySelector('.menu-item.link.active');

	navActive.classList.remove('active');
}

//=====================---//scroll-to//---========================//

//===================---//tab//---======================//

const tabsBtn = document.querySelectorAll('.btn-tab');
const tabsContent = document.querySelectorAll('.tab-content');
const tabsImg = document.querySelectorAll('.img-tab');

for (let i = tabsBtn.length - 1; i >= 0; i--) {
	const tabBtn = tabsBtn[i];
	tabBtn.addEventListener("click", function(e) {
		tabRemove();
		tabsContent[i].classList.add('active');
		tabsImg[i].classList.add('active');
		e.preventDefault();
	});
}

function tabRemove () {
	const tabsContentActive = document.querySelector('.tab-content.active');
	const tabsImgActive = document.querySelector('.img-tab.active');

	tabsImgActive.classList.remove('active');
	tabsContentActive.classList.remove('active');
}

let comentSlider = new Swiper('.coment-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	observer: true,
	observerSlideChildren: true,
	observerParents: true,

	speed: 600,

	loop: true
});

//===================---//tab//---======================//

//===================---//popup//---======================//

const popapLinkcs = document.querySelectorAll('.popap-linck');
const body = document.querySelector('body');
const lockPading = document.querySelector(".lock-pading");
const nav = document.querySelector('.navigation');

let unlock = true;

const timeout = 800;

let = sliderPopap = new Swiper('.popap-slider',{
  navigation: {
   	nextEl: '.swiper-button-next',
   	prevEl: '.swiper-button-prev'
  },

  pagination: {
   	el: '.swiper-pagination',
   	type: 'fraction'
  },

  	observer: true,
  	observerSlideChildren: true,
  	observerParents: true,

  speed: 600,

	breakpoints: {
  		320: {
  			effect: 'fade',
			
  			speed: 500,

  			fadeEffect: {
  				crossFade: true,
  				
  			},

  			cubeEffect: {
				slideShadows: false,
				shadow: false,
				shadowOffset: 0,
				shadowScale: 0
			},
  		},

  		768: {
  			effect: 'cube',
		  	
  		},
  	},

  	effect: 'cube',

  	cubeEffect: {
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
  
});

if (popapLinkcs.length > 0) {
	for (let i = 0; i < popapLinkcs.length; i++) {
		const popapLinck = popapLinkcs[i];
		popapLinck.addEventListener("click", function(e) {
			const popapName = popapLinck.getAttribute('href').replace('#', '');
			const curentPopap = document.getElementById(popapName);
			popapOpen(curentPopap);
			sliderPopap.slideTo(i, 10);
			e.preventDefault();
		});
	}
}

const popapCloseIcon = document.querySelectorAll('.cloce-popap');

if (popapCloseIcon.length > 0) {
	for (let i = 0; i < popapCloseIcon.length; i++) {
		const el =popapCloseIcon[i];
		el.addEventListener('click', function(e) {
			popapClose(el.closest('.popap'));
			e.preventDefault();
		});
	}
}

const plan = document.querySelector('.plan');

function popapOpen(curentPopap) {
	if (curentPopap && unlock) {
		const popapActive = document.querySelector('.popap.open');
		
		if (popapActive) {
			popapClose(popapActive, false);
		}else {
			bodyLock();
		}
		curentPopap.classList.add('open');
		nav.classList.add('up-nav');
		curentPopap.addEventListener("click", function(e) {
			if (!e.target.closest('.popap-content')) {
				popapClose(e.target.closest('.popap'));
			}
		});
	}
}

function popapClose (popapActive, doUnlock = true) {
	if (unlock) {
		popapActive.classList.remove('open');
		nav.classList.remove('up-nav');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPadingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPading) {
		for (let i = 0; i < lockPading.length; i++) {
			const el = lockPading[i];
			el.style.padingRight = lockPadingValue;
		}
	}
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function() {
		if (lockPading) {
			for (let i = 0; i < lockPading.length; i++) {
				const el = lockPading[i];
				el.style.padingRight = '0px';
			}
		}
		body.style.padingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popapActive = document.querySelector('.popap.open');
		popapClose(popapActive);
	}
});

//======================---//popup//---==========================//

//===================---//nav-burger//---======================//

let navBurger = document.querySelector('.nav-burger');
let navigation = document.querySelector('.navigation');

navBurger.addEventListener("click", function() {
	navBurger.classList.toggle('active');
	navigation.classList.toggle('menu-active');
	body.classList.toggle('lock');
});

//=====================---//nav-burger//---========================//


