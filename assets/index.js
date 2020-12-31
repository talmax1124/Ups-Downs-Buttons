function nav() {
  
	var toggle = $('.nav-toggle'),
		navContainer = $('.nav-container'),
		navLink = $('.nav-container a');
	
	toggle.on('click', function(){
	  navContainer.toggleClass('active');
	});
	
	navLink.on('click', function(){
	  navContainer.removeClass('active');
	});
  
  };
  
  nav();
  
  