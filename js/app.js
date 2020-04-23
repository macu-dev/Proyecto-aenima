function gotoPage (mobile){
  ventana = window.open('index.html','ventana', "width=100, height=100");
  ventana.resizeTo(((mobile) ? 360 : 1366), ((mobile) ? 640 : 768));
  ventana.focus();
}