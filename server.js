import { serve } from "bun";

serve({
    fetch(request) {
        return new Response("Hello World from Bun!, coucou babou et samra !");
    },
    port: 3000,
});
