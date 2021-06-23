var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: 'email=info@totagotech.com&password=Unlock*2021@&clientname=jtb',
};

fetch("https://api.jtb.gov.ng:2089/api/GetTokenID", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
