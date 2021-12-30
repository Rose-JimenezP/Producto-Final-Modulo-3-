$(document).ready(function(){

	$('.category_list .category_item[category="todo"]').addClass('ct_item-active');

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);
		
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		$('.chef').css('transform', 'scale(0)');
		function hideProduct(){
			$('.chef').hide();
		} setTimeout(hideProduct,400);

		function showProduct(){
			$('.chef[category="'+catProduct+'"]').show();
			$('.chef[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	$('.category_item[category="todo"]').click(function(){
		function showAll(){
			$('.chef').show();
			$('.chef').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});