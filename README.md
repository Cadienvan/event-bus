# What is this?
This is a simple event bus made using the CustomEvent Web API for in-browser usage simulating the Node.js EventEmitter API.

# How to use it?
Simply import the module and start using it as follows:
```js
import ee from 'cadienvan-event-bus';
ee.on('event', (data) => console.log(data));
ee.emit('event', 'Hello World!');
```