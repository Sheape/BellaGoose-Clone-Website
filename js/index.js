function animatedBar(x) {
	x.classList.toggle('change');
}

// Sidebar opening and shifting of content //

function openNav(x) {
	document.getElementById('sidebar-content').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';
	document.getElementById('mainNav').style.backgroundColor = '#7796a8';
	document.getElementById('bar1').style.backgroundColor = '#fff';
	document.getElementById('bar2').style.backgroundColor = '#fff';
	document.getElementById('bar3').style.backgroundColor = '#fff';
}
// Coffee Hover //

function closeNav() {
	document.getElementById('sidebar-content').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
}

function removeSearch() {
	document.getElementById('search').onclick = ' ';
}

// Parallax Effect //

window.addEventListener('scroll', function(e) {});

function myFunction() {
	var h1 = document.getElementsByTagName('H1')[0];
	var att = document.createAttribute('class');
	att.value = 'democlass';
	h1.setAttributeNode(att);
}

// Onclick Input Search //

function openSearch(x) {
	x.classList.toggle('onclick--search');
}

function changeWebsiteName(x) {
	history.replaceState('index', null, 'https://bellagoosecoffee.com');
	console.log('success');
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Animation this is so stressful----------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
