---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({ 'max-width': '530px', 'width': '40%' }, 400, swing = 'swing', function () { })
    }
  })
  if (window.location.hash && window.location.hash == '#blog') { $('.panel-cover').addClass('panel-cover--collapsed') }
  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}/index.html') { $('.panel-cover').addClass('panel-cover--collapsed') }

  $('.show-disqus').on('click', function (e) {
    e.preventDefault();
    var $btn = $('.disqus-hidden');

    $.ajax({
      type: 'GET',
      url: '//' + disqus_shortname + '.disqus.com/embed.js',
      dataType: 'script',
      cache: true,
      beforeSend: function() {
        $btn.html('Loading..');
      }
    }).done(function() {
      $btn.delay(1200).fadeOut().delay(500).html('');
    });
  });

  SocialShareKit.init();


  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})