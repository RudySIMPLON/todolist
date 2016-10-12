alert('Bienvenue ! sur ta To Do List, oublie pas de cliquer sur une tache pour la barré');
console.log('voici mon texte afficher haha');

$('input').keyup(function(e) { 
	if(e.keyCode == 13) {
		question = $('.input').val();
		if ( question == ""){
			$('ul').append();
		} else {  
			$('ul').append("<li>"+question+"</li>"); }
			console.log(question); 
		}
	});
$('.button').click(function(){
	question = $('.input').val();
	if ( question == ""){
		$('ul').append();
	} else {  
		$('ul').append("<li>"+question+"</li>"); }
		console.log(question); 

	});

$('ul').on('click','li', function(){
	$(this).toggleClass('done');

});



function effacer()
{
	document.getElementById('machin').value = '';
}

$("input").click(function(){

	effacer();
})




