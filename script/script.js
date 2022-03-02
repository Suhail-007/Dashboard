//navSection
const navToggle = document.querySelectorAll('[data-nav-btn]');
const navCloseBtn = document.querySelectorAll('[data-navclose-btn]');
const overlay = document.querySelector('[data-overlay]');

 //open nav bar
navToggle.forEach(btn => {
		btn.addEventListener('click', e => {
		
		 const element = e.target.dataset.navBtn === 'left' ? document.querySelector('[data-nav="left"]') : document.querySelector('[data-nav="right"]');		 
			 element.classList.toggle('open');			 
			});
});

//close nav bar
navCloseBtn.forEach(btn => {
		btn.addEventListener('click', e => {
		
		 const element = e.target.dataset.navcloseBtn === 'left' ? document.querySelector('[data-nav="left"]') : document.querySelector('[data-nav="right"]');	
			 element.classList.remove('open');
			})
});

const listItems = document.querySelectorAll('li');

//add open class to list item when user click
listItems.forEach(listItem => {
		listItem.addEventListener('click', () => {		
				//remove added open class from list items
				listItems.forEach(item => {
						item.classList.remove('open');
				});
				//add open class
				listItem.classList.add('open');
		});
});

const days = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];

const months = ["Jan","Feb","March","April","May","June", "July","August","Sept","Oct","Nov","Dec"];

//get Today date
const todayDate = new Date();
const dashboardDate = document.querySelector('[data-date]');
const dashboardDay = document.querySelector('[data-day]');

//get current month
dashboardDate.textContent = `${todayDate.getDate()} ${months[todayDate.getMonth()]}`  

//get today day
dashboardDay.textContent = days[todayDate.getDay()];

const selectAssociateType = document.querySelector('#associate');
const submitBtn = document.querySelector('[data-submitBtn]');
const nullValue = document.querySelector('[data-dash]');

window.addEventListener('click', e => {
const leftNav = document.querySelector('[data-nav="left"]');
const rightNav = document.querySelector('[data-nav="right"]');

//select dataset of button
const element = e.target.dataset.navBtn;

//it'll select the opposite navBar so if the left Nav is open and user tries to open right nav it'll remove the classlist from left nav

//*********DIFFERENT APPROACH
/*const element = e.target.dataset.navBtn === 'left' ? document.querySelector('[data-nav="right"]') : document.querySelector('[data-nav="left"]');

		if (element.classList.contains('open')) {
				element.classList.remove('open');
		}*/
				
		if (element === 'left' && rightNav.classList.contains('open')) {			
			rightNav.classList.remove('open');
		}
		
			if (element === 'right' &&  leftNav.classList.contains('open')) {
				leftNav.classList.remove('open');
				}
				
		//to close overlay
		if (e.target.dataset.overlay === 'overlaydiv') {
				leftNav.classList.remove('open');
				overlay.style.display = 'none';
				submitBtn.disabled = true;
				selectAssociateType.value = nullValue;
		}
})

const addAssociate = document.querySelector('[data-add-associate]');

addAssociate.addEventListener('click', () => {
		overlay.style.display = 'block';
})

selectAssociateType.addEventListener('change', () => {		

		if (nullValue === '') {
				submitBtn.disabled = true;
		} else {
				submitBtn.disabled = false;
		}
})

const overlayCloseBtn = document.querySelector('[data-overlay-closeBtn]');

overlayCloseBtn.addEventListener('click', () => {
		overlay.style.display = 'none';	
		submitBtn.disabled = true;
		selectAssociateType.value = nullValue;
		const leftNav = document.querySelector('[data-nav="left"]');
		leftNav.classList.remove('open');
})