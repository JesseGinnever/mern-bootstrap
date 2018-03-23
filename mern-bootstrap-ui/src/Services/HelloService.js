const apiEndpoint = "http://localhost:5000"
var HelloService = {};

HelloService.getGreeting = function() {
    return fetch(apiEndpoint + "/api/hello");
}

export default HelloService