function ajax(url){
  httprequest =  new XMLHttpRequest();
  httprequest.onreadystatechange = console;

  httprequest.open('get', url);
  httprequest.send();

}
function console() {
    if (httprequest.readyState === XMLHttpRequest.DONE) {
      if (httprequest.status) {
        data = JSON.parse(httprequest.responseText)
        console.log('status:' + data.status + 'content:' + data.message );
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
ajax('https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-03&sortBy=publishedAt&apiKey=8f4ff16d621c4d5190f88c3bb01b12a5')
