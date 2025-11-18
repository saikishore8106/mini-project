async function callApi() {
    try {
        // internal k8s service name + port
        const apiUrl = "http://backend-service:5000/api";
        const res = await fetch(apiUrl);
        const txt = await res.text();
        document.getElementById("response").innerText = txt;
    } catch (err) {
        document.getElementById("response").innerText = "Backend not reachable";
    }
}
