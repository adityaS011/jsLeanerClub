import React, { useState } from 'react';
import { OutputTerminal } from './OutputTerminal';
import { SectionOptions } from '../types';

export const Section = ({
  sectionId,
  title,
  description,
  onRun,
}: {
  sectionId: SectionOptions;
  title: string;
  description: string;
  onRun: (appendOutput: (message: string) => void) => void;
}) => {
  const [output, setOutput] = useState<string[]>([]);

  const appendOutput = (message: string) => {
    setOutput((prev) => [...prev, message]);
  };

  const handleRun = () => {
    onRun(appendOutput);
  };

  const VariableSection = () => (
    <div className='mb-8 max-w-[400px] md:max-w-[800px] mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-blue-100 to-blue-200'>
      <h2 className='text-2xl font-bold mb-2 text-blue-800'>
        1. Variables and Scopes (var, let, const)
      </h2>
      <p className='mb-4'>
        <strong>What:</strong> Variables are the most basic building blocks.
        You’ll use <code>let</code> and <code>const</code> in modern JS, while{' '}
        <code>var</code> is mostly a relic of the past. Understanding their
        scoping is vital to avoid common pitfalls in your code.
      </p>
      <div className='bg-gray-800 text-white p-4 rounded'>
        <pre>
          <code className='text-xs w-full overflow-auto'>
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
      <p className='mt-4'>
        <strong>Why:</strong> <code>var</code> gets hoisted, while{' '}
        <code>let</code> and <code>const</code> are block-scoped.
      </p>
    </div>
  );

  const ClosureSection = () => (
    <div className='mb-8 max-w-[400px] md:max-w-[800px] mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-green-100 to-green-200'>
      <h2 className='text-2xl font-bold mb-2 text-green-800'>
        2. Closures and the Scope Chain
      </h2>
      <p className='mb-4'>
        <strong>What:</strong> A closure is a function that retains access to
        variables from its parent scope, even after the parent has finished
        executing.
      </p>
      <div className='bg-gray-800 text-white p-4 rounded'>
        <pre>
          <code className='text-xs w-full overflow-auto'>
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
      <p className='mt-4'>
        <strong>Why:</strong> Closures are used for encapsulation and in
        callbacks or async code.
      </p>
    </div>
  );

  const ThisSection = () => (
    <div className='mb-8 max-w-[400px] md:max-w-[800px] mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-purple-100 to-purple-200'>
      <h2 className='text-2xl font-bold mb-2 text-purple-800'>
        3. The <code>this</code> Keyword
      </h2>
      <p className='mb-4'>
        <strong>What:</strong> <code>this</code> refers to the context in which
        a function is executed. It can vary depending on how a function is
        called.
      </p>
      <div className='bg-gray-800 text-white p-4 rounded'>
        <pre>
          <code className='text-xs w-full overflow-auto'>
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
      <p className='mt-4'>
        <strong>Why:</strong> Misunderstanding <code>this</code> can lead to
        bugs in object methods and callbacks.
      </p>
    </div>
  );

  const HoistingSection = () => (
    <div className='mb-8 max-w-[400px] md:max-w-[800px] mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-red-100 to-red-200'>
      <h2 className='text-2xl font-bold mb-2 text-red-800'>4. Hoisting</h2>
      <p className='mb-4'>
        <strong>What:</strong> Hoisting is JavaScript's behavior of moving
        variable and function declarations to the top of their scope.
      </p>
      <div className='bg-gray-800 text-white p-4 rounded'>
        <pre>
          <code className='text-xs w-full overflow-auto'>
            {`console.log(hoistedVar); // undefined (due to hoisting)
var hoistedVar = 10;

console.log(notHoistedLet); // ReferenceError
let notHoistedLet = 10;
`}
          </code>
        </pre>
      </div>
      <p className='mt-4'>
        <strong>Why:</strong> Misunderstanding hoisting can lead to undefined
        values and bugs.
      </p>
    </div>
  );

  const CallbackSection = () => (
    <div className='mb-8 max-w-[400px] md:max-w-[800px] mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-yellow-100 to-yellow-200'>
      <h2 className='text-2xl font-bold mb-2 text-yellow-800'>
        5. Callbacks, Promises, and Async/Await
      </h2>
      <p className='mb-4'>
        <strong>What:</strong> These are essential for handling asynchronous
        operations like fetching data or interacting with APIs.
      </p>
      <div className='bg-gray-800 text-white p-4 rounded'>
        <pre>
          <code className='text-xs w-full overflow-auto'>
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
async function fetchAsync() {
  const data = await fetchDataPromise();
  console.log(data);
}

fetchAsync();
`}
          </code>
        </pre>
      </div>
      <p className='mt-4'>
        <strong>Why:</strong> Understanding async patterns is crucial for modern
        JavaScript development.
      </p>
    </div>
  );

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
        {title}
      </h1>
      <p className='mb-6 text-center text-gray-700'>{description}</p>
      <div className='mt-10'>
        {sectionId === 'Variables' && <VariableSection />}
        {sectionId === 'Closure' && <ClosureSection />}
        {sectionId === 'This' && <ThisSection />}
        {sectionId === 'Hoisting' && <HoistingSection />}
        {sectionId === 'Callback' && <CallbackSection />}
      </div>
      <div className='flex justify-center'>
        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          onClick={handleRun}
        >
          Run Code
        </button>
      </div>
      <OutputTerminal output={output} />
    </div>
  );
};
