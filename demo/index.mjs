import ee from "cadienvan-event-bus/index.mjs";
ee.on("event", (data) => console.log(data));
ee.emit("event", "Hello World!");
