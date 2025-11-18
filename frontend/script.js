function  callBackend(){
    fetch("http://backend-service:5000")
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerText = data;
        })
        .catch(error => {
            document.getElementById("result").innerText = "Backend not reachable";
            console.error(error);
        });
}
