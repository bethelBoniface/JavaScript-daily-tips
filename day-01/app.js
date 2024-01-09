// asynchronous js is something that can start now n finish later


// javasript is a single threaded language tha can be asynchro in nature--mean ing it can start now n finish later ( it cant block other code)


// A promise is a request that be resolved or rejected
// how to make a promise


// fetch

// first thing you need anytime you want fetch a Data, you ask for the resource or end point

// A file returned to you after a request is called a 'json file'
// and a json needs to be processed into a pure object

// fetch("jsonplaceholder.typicode.com/todos/")
//     .then((response)=>response.json())
//     .then((data)=>console.log(data))
//     .catch(()=>console.log('sorry can not fetch data'))



fetch("todo.json")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch(()=>console.log('sorry can not fetch data'))
