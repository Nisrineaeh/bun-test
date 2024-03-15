const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password);
console.log(hash)

const isMatch = await Bun.password.verify(password, hash);
console.log(isMatch)