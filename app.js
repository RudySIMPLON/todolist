alert('Bienvenue ! sur votre To Do List');
console.log('voici mon texte afficher haha')

$('.button').click(function(){
	question = $('.input').val();
	$('ul').append("<li>"+question+"</li>");

});

$('ul').on('click','li', function(){
	$(this).toggleClass('done');

});














