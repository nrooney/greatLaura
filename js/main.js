jQuery(document).ready(function(){

	jQuery('button.play').live('click', function(){
		jQuery('section').hide();
		jQuery('section#question').show();
	});
	
	jQuery('button#yes').live('click', function(){
		jQuery('section').hide();
		jQuery('section#answeryes').show();
	});
	
	jQuery('button#no').live('click', function(){
		jQuery('section').hide();
		jQuery('section#answerno').show();
	});

});
