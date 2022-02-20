//navSection
const navToggle = document.querySelectorAll('[data-nav-btn]');
const navCloseBtn = document.querySelectorAll('[data-navclose-btn]');

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
