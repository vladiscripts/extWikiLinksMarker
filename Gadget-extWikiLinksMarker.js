// Стили: MediaWiki:Gadget-extWikiLinksMarker.css  
// Ставит иконки возле ссылок на внешние проекты (Википедия, Викиливр, Викиливр.ру)

if( mw.config.get( 'wgAction' ) == 'view' ) {  // mw.config.get( 'wgNamespaceNumber' ) == 0 && 
	
	var content = $('.mw-parser-output');
	var a_tags = content.find('a');
	
	// Классификация ссылок
	$.each(a_tags.filter('[href*="wikipedia.org/"]'), function (i, e) { e.classList.add('wikipedia');})
	$.each(a_tags.filter('[href*="wikilivres.org/"]'), function (i, e) { e.classList.add('wikilivres');})
	$.each(a_tags.filter('[href*="wikilivres.ru/"]'), function (i, e) { e.classList.add('wikilivresru');})
	
	// Маркируем все классом иконок
	$.each(
		a_tags.filter('.wikipedia, .wikilivres, .wikilivresru'), function (i, e) { 
		e.classList.add('with_icon');})

	// Исключения. Ограничивающие классы определяются в соотв. шаблонах и модулях.
	$.each(
		// .wikilivresru-tpl a, .wikilivres-tpl a
		content.find('#navigation-box a, .about-extlink a, .questionmark-tpl a'), function (i, e) { 
		e.classList.remove('with_icon');});
}
