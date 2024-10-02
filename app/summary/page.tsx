
import React from 'react';

const Summary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">JavaScript Fundamentals - The Core Concepts</h1>

        {/* Variables and Scopes */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Variables and Scopes (var, let, const)</h2>
          <p className="mb-4">
            <strong>What:</strong> Variables are the most basic building blocks. You’ll use <code>let</code> and <code>const</code> in modern JS, while <code>var</code> is mostly a relic of the past.
            Understanding their scoping is vital to avoid common pitfalls in your code.
          </p>
          <div className="bg-gray-800 text-white p-4 rounded">
            <pre>
              <code>
                {`// var example
function oldScope() {
    var a = 10;
    if (true) {
        var a = 20;
        console.log(a); // 20
    }
    console.log(a); // 20
}

oldScope();

// let and const example
function newScope() {
    let b = 10;
    if (true) {
        let b = 20;
        console.log(b); // 20
    }
    console.log(b); // 10
}

newScope();
`}
              </code>
            </pre>
          </div>
          <p className="mt-4">
            <strong>Why:</strong> <code>var</code> gets hoisted, while <code>let</code> and <code>const</code> are block-scoped.
          </p>
        </section>

        {/* Closures and Scope Chain */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Closures and the Scope Chain</h2>
          <p className="mb-4">
            <strong>What:</strong> A closure is a function that retains access to variables from its parent scope, even after the parent has finished executing.
          </p>
          <div className="bg-gray-800 text-white p-4 rounded">
            <pre>
              <code>
                {`function outer() {
    let secret = "I’m a secret!";
    function inner() {
        console.log(secret); // Still has access to 'secret'
    }
    return inner;
}

const innerFunction = outer();
innerFunction(); // Logs: "I’m a secret!"
`}
              </code>
            </pre>
          </div>
          <p className="mt-4">
            <strong>Why:</strong> Closures are used for encapsulation and in callbacks or async code.
          </p>
        </section>

        {/* this Keyword */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. The <code>this</code> Keyword</h2>
          <p className="mb-4">
            <strong>What:</strong> <code>this</code> refers to the context in which a function is executed.
            It can vary depending on how a function is called.
          </p>
          <div className="bg-gray-800 text-white p-4 rounded">
            <pre>
              <code>
                {`const person = {
    name: "John",
    greet: function() {
        console.log(\`Hi, my name is \${this.name}\`);
    }
};

person.greet(); // 'this' refers to the person object

const greetFn = person.greet;
greetFn(); // 'this' refers to global context (or undefined in strict mode)
`}
              </code>
            </pre>
          </div>
          <p className="mt-4">
            <strong>Why:</strong> Misunderstanding <code>this</code> can lead to bugs in object methods and callbacks.
          </p>
        </section>

        {/* Hoisting */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Hoisting</h2>
          <p className="mb-4">
            <strong>What:</strong> Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope.
          </p>
          <div className="bg-gray-800 text-white p-4 rounded">
            <pre>
              <code>
                {`console.log(hoistedVar); // undefined (due to hoisting)
var hoistedVar = 10;

console.log(notHoistedLet); // ReferenceError
let notHoistedLet = 10;
`}
              </code>
            </pre>
          </div>
          <p className="mt-4">
            <strong>Why:</strong> Misunderstanding hoisting can lead to undefined values and bugs.
          </p>
        </section>

        {/* Callbacks, Promises, and Async/Await */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Callbacks, Promises, and Async/Await</h2>
          <p className="mb-4">
            <strong>What:</strong> These are essential for handling asynchronous operations like fetching data or interacting with APIs.
          </p>
          <div className="bg-gray-800 text-white p-4 rounded">
            <pre>
              <code>
                {`// Callback example
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

// Promise example
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data received via promise"), 1000);
    });
};

fetchDataPromise().then(data => console.log(data));

// Async/Await example
async function fetchAsyncData() {
    const data = await fetchDataPromise();
    console.log(data);
}

fetchAsyncData();
`}
              </code>
            </pre>
          </div>
          <p className="mt-4">
            <strong>Why:</strong> Async code is common in modern JavaScript, and promises/async-await help write clean, maintainable code.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Summary;
