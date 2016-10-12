alert('Bienvenue ! sur ta To Do List, oublie pas de cliquer sur une tache pour la barré');
console.log('voici mon texte afficher haha');

$('input').keyup(function(e) { 
	if(e.keyCode == 13) {
		question = $('.input').val();
		if ( question == ""){
			$('ul').append();
		} else {  
			$('ul').append("<li>"+question+"</li>"); }
		
		}
	});
$('.button').click(function(){
	question = $('.input').val();
	if ( question == ""){
		$('ul').append();
	} else {  
		$('ul').append("<li>"+question+"</li>"); }
	 

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


$('.btn1').on('click',function(){
$('li').show();
$('li.done').show();
});

$('.btn2').on('click',function(){
$('li').show();
$('li.done').hide();
});

$('.btn3').on('click',function(){
$('li').hide();
$('li.done').show();
});
