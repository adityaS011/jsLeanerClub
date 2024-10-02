'use client';
import React from 'react';
import { Section } from '../../components/Section';

const JavaScriptFundamentals: React.FC = () => {
  const runOldScope = (appendOutput: (message: string) => void) => {
    appendOutput('Running var (oldScope) Example:');
    function oldScope() {
      var a = 10;
      appendOutput('Declared var a = 10;');
      if (true) {
        var a = 20; // var is function-scoped, not block-scoped
        appendOutput('Inside if block, var a is redeclared and set to 20.');
        appendOutput(`console.log(a): ${a}`); // 20
      }
      appendOutput(`console.log(a) after if block: ${a}`); // 20
      appendOutput(`----------------------------`);
    }
    oldScope();
  };

  const runNewScope = (appendOutput: (message: string) => void) => {
    appendOutput('Running let (newScope) Example:');
    function newScope() {
      let b = 10;
      appendOutput('Declared let b = 10;');
      if (true) {
        let b = 20; // let is block-scoped
        appendOutput('Inside if block, let b is declared and set to 20.');
        appendOutput(`console.log(b): ${b}`); // 20
      }
      appendOutput(`console.log(b) after if block: ${b}`); // 10
      appendOutput(`----------------------------`);
    }
    newScope();
  };

  const runClosureExample = (appendOutput: (message: string) => void) => {
    appendOutput('Running Closures Example:');
    function outer() {
      let secret = 'I’m a secret!';
      appendOutput(`Inside outer(), declared let secret = "${secret}"`);
      function inner() {
        appendOutput(`Inside inner(), accessing secret: "${secret}"`);
      }
      return inner;
    }

    const innerFunction = outer(); // outer function has finished
    appendOutput('Called outer(), now calling innerFunction()');

    innerFunction(); // Logs: "I’m a secret!"
    appendOutput(`----------------------------`);
  };

  const runThisExample = (appendOutput: (message: string) => void) => {
    appendOutput("Running 'this' Keyword Example:");
    const person = {
      name: 'John',
      greet: function () {
        appendOutput(`Inside person.greet(), this.name = "${this.name}"`);
      },
    };

    appendOutput('Calling person.greet():');
    person.greet(); // 'this' refers to the person object

    appendOutput('Assigning person.greet to greetFn and calling greetFn():');
    const greetFn = person.greet;
    try {
      greetFn(); // 'this' refers to global context (or undefined in strict mode)
    } catch (err) {
      appendOutput(`Error: ${(err as Error).message}`);
    }
    appendOutput(`----------------------------`);
  };

  const runHoistingExample = (appendOutput: (message: string) => void) => {
    appendOutput('Running Hoisting Example:');
    try {
      appendOutput('Attempting to log hoistedVar before declaration:');
      //@ts-ignore
      appendOutput(`console.log(hoistedVar): ${hoistedVar}`); // undefined
    } catch (err) {
      appendOutput(`Error: ${(err as Error).message}`);
    }
    var hoistedVar = 10;
    appendOutput('Declared var hoistedVar = 10;');

    try {
      appendOutput('Attempting to log notHoistedLet before declaration:');
      //@ts-ignore
      appendOutput(`console.log(notHoistedLet): ${notHoistedLet}`); // ReferenceError
    } catch (err) {
      appendOutput(`Error: ${(err as Error).message}`);
    }
    let notHoistedLet = 10;
    appendOutput('Declared let notHoistedLet = 10;');
    appendOutput(`----------------------------`);
  };

  const runAsyncExamples = async (appendOutput: (message: string) => void) => {
    appendOutput('\nRunning Callbacks, Promises, and Async/Await Examples:');

    // Callback example
    appendOutput('Starting Callback Example:');
    function fetchData(callback: (data: string) => void) {
      setTimeout(() => {
        callback('Data received via callback');
      }, 1000);
    }

    fetchData((data) => {
      appendOutput(`Callback: ${data}`);
    });

    // Promise example
    appendOutput('Starting Promise Example:');
    const fetchDataPromise = () => {
      return new Promise<string>((resolve) => {
        setTimeout(() => resolve('Data received via promise'), 1000);
      });
    };

    fetchDataPromise().then((data) => appendOutput(`Promise: ${data}`));

    // Async/Await example
    appendOutput('Starting Async/Await Example:');
    async function fetchAsyncData() {
      const data = await fetchDataPromise();
      appendOutput(`Async/Await: ${data}`);
    }

    fetchAsyncData();
    appendOutput(`----------------------------`);
  };

  return (
    <div className='w-full flex flex-row justify-center pt-6 pb-10 bg-slate-100'>
      <div className='w-fit px-4'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
          JavaScript Fundamentals
        </h1>

        <Section
          sectionId='Variables'
          title='1. Variables and Scopes (let)'
          description='let is block-scoped and can lead to unexpected behaviors.'
          onRun={runNewScope}
        />
        <Section
          sectionId='Closure'
          title='2. Closures and Scope Chain'
          description='A closure is a function that remembers its outer variables and can access them.'
          onRun={runClosureExample}
        />
        <Section
          sectionId='This'
          title="3. The 'this' Keyword"
          description='The value of this depends on how a function is called.'
          onRun={runThisExample}
        />
        <Section
          sectionId='Hoisting'
          title='4. Hoisting'
          description="Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope."
          onRun={runHoistingExample}
        />
        <Section
          sectionId='Callback'
          title='5. Callbacks, Promises, and Async/Await'
          description='Understanding asynchronous programming is essential in JavaScript.'
          onRun={runAsyncExamples}
        />
      </div>
    </div>
  );
};

export default JavaScriptFundamentals;
