$(".mThumb").each(function(i) {
  $(this).find('img').eq(0).addClass('active');
});

$('.mThumb').on('mouseenter', function() {
  targetThumb = $(this);
  if ($(this).data('thumbSpeed') != undefined) {
    speed = targetThumb.data('thumbSpeed');
  } else {
    speed = 1000
  }

  targetThumb.find('img').removeClass('active');
  targetThumb.find('img').eq(1).addClass('active');
  var index = targetThumb.find('img').index($('.active'));

  changeImg = setInterval(function(){
    targetThumb.find('img').removeClass('active');
    targetThumb.find('img').eq(index + 1).addClass('active');
    index++;
  }, speed);
});

$('.mThumb').on('mouseleave', function() {
  $(this).find('img').removeClass('active');
  $(".mThumb").each(function(i) {
    $(this).find('img').eq(0).addClass('active');
  });
  clearInterval(changeImg);
});
