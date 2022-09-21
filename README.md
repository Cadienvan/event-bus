# What is this?
This is a simple event bus made using the CustomEvent Web API for in-browser usage simulating the Node.js EventEmitter API.

# How to use it?
Simply import the module and start using it as follows:
```js
import ee from 'cadienvan-event-bus/index.mjs';
ee.on('event', (data) => console.log(data));
ee.emit('event', 'Hello World!');
ee.off('event');
```

If you prefer a simpler approach, you could just import the `index.js` file in your HTML as a script tag and use the global `eventBus` variable:
```js
eventBus.on('event', (data) => console.log(data));
eventBus.emit('event', 'Hello World!');
eventBus.off('event');
```