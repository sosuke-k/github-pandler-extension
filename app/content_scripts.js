window.addEventListener('load', (function(){
  var img = document.createElement('img');
  img.type = "image/svg+xml";
  img.src = chrome.extension.getURL('images/pandler.svg');
  img.style = "width: 32px; height: 32px;";
  img.className = "v-align-middle";
  var a = document.createElement("a");
  a.appendChild(img);
  a.style = "margin-left: 12px; width: 32px; height: 32px;";
  a.href = "pandler://" + document.location.host + document.location.pathname;
  document.querySelector('h1').appendChild(a);
})(),false);
