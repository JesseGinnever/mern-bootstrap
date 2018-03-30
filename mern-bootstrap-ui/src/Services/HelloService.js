const apiEndpoint = "http://localhost:5000"
var HelloService = {};

HelloService.getGreeting = function() {
    return fetch(apiEndpoint + "/api/hello");
}

HelloService.postGreeting = function(greeting) {
    let greetingJson = {
        text: greeting
    }
    return fetch(apiEndpoint + "/api/hello/create", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(greetingJson)
    });
}

HelloService.deleteGreetings = function(greeting) {
    return fetch(apiEndpoint + "/api/hello", {
        method: 'DELETE'
    });
}

HelloService.deleteGreeting = function(greetingId) {
    return fetch(apiEndpoint + "/api/hello/" + greetingId, {
        method: 'DELETE'
    });
}

export default HelloService