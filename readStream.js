const response = await fetch("https://bun.sh");

await Bun.readableStreamToArrayBuffer(response.body); // => ArrayBuffer
await Bun.readableStreamToBlob(response.body); // => Blob
await Bun.readableStreamToJSON(response.body); // => object
await Bun.readableStreamToText(response.body); // => string
await Bun.readableStreamToArray(response.body); // => unknown[]
