var clock
runLasyloading()

$(window).on('scroll', function(){
  
  if(clock){
    clearTimeout(clock)
  }
  clock = setTimeout(function(){
      runLasyloading()
  }, 500)
  

})

function runLasyloading(){
  $('.container img').each(function(){
    if(checkDisplay($(this)) && !isLoaded($(this))){
      loadImg($(this)) 
    }
  }) 
}

function checkDisplay($img) {
  if($img.offset().top <= $(window).scrollTop() + $(window).height() && $img.offset().top > $(window).scrollTop()){
    return true
  }
  return false
}

function isLoaded($img) {
  return $img.attr('src') === $img.attr('data-src')
}

function loadImg($img) {
  $img.attr('src', $img.attr('data-src'))
}
