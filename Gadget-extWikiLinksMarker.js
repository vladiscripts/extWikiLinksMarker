// Поддержка использования XPath
function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}


( function () { 
	// var $container = $('.mw-parser-output').children(':not(#navigation-box) :not(.wikilivresru-tpl) :not(.wikilivres-tpl)');
	var $container = $(_x(`//div[@id="mw-content-text"]//a[not(ancestor::table[@id="navigation-box"]) and not(ancestor::span[@class="wikilivresru-tpl"]) and not(ancestor::span[@class="wikilivresru-tpl"])]`));
	
	$.each(
		$container.filter('a[href*="wikipedia.org/"]'), function (i, e) { e.classList.add('wikipedia');})
	$.each(
		$container.filter('a[href*="wikilivres.org/"]'), function (i, e) { e.classList.add('wikilivres');})
	$.each(
		$container.filter('a[href*="wikilivres.ru/"]'), function (i, e) { e.classList.add('wikilivresru');})
	
	// var e = document.createElement( 'link' ); 
	// e.rel = "stylesheet"; 
	// e.href="//ru.wikisource.org/w/index.php?title=Участник:Vladis13/wplinks marker.css&action=raw&ctype=text/css"; 
	// document.getElementsByTagName( 'head' )[ 0 ].appendChild( e ); 	
	

} ) ();
