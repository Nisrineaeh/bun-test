Bun.serve({
    fetch(req) {
        return new Response("Hello from the worker!");
    },
});