(function(){
  if (window.myBookmarklet !== undefined){
    myBookmarklet();
  }
  else {
  document.body.appendChild(
    document.createElement('script')
  ).src='https://da2e-2605-6440-4015-c004-00-b56c.ngrok-free.app/static/js/bookmarklet.js?r='+Math.floor(Math.random()*999999999999999999999);
  }
 })();