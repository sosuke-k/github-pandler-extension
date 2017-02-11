console.log('content_scripts');

window.addEventListener('load', (function(){
  console.log('content_scripts loaded');
  // var a = document.querySelector('h1 strong a');
  var a = document.createElement("a");
  a.text = "pandler"
  a.href = "pandler-test1://" + document.location.host + document.location.pathname;
  a.className = "label v-align-middle";
  var style = "";
  style += "background: #CE93D8;"
  style += "color: rgba(0,0,0,.87);"
  style += "font-weight: 600;"
  a.style = style;
  console.log(a.href);
  document.querySelector('h1').appendChild(a);
})(),false);

// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   var a = document.querySelector('h1 strong a');
//   a.href = "pandler-test1://" + document.location.host + document.location.pathname;
//   console.log('red');
//   console.log(msg);
//   console.log(document.location)
//   document.body.style.backgroundColor = 'red';
// });
