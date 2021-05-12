function* generator() {
	for (let i = 0; i < 5; i++) yield i;
}

const iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
