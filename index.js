import LinkedList from './linkedList.js';

// const node1 = linkedList();
// console.log(node1);
const list = LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
console.log(list.toString());
list.insertAt('Enrico', 2);
console.log(list.toString());
console.log(list);
