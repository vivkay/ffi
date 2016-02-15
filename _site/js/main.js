var $btn = $('.btn');
var $menu = $('.menu');
var name = 'hello';

$btn.on('click', function () {
  $menu.toggleClass('js-menu-open');
});
