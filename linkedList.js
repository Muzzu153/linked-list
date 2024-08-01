import { Node } from './node.js';

const LinkedList = function createLinkedList() {
  let HEAD = null;
  let length = 0;

  const append = function appendNodeToList(value) {
    const newNode = Node(value);
    length += 1;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = function prependNodeToList(value) {
    const newNode = Node(value);
    length += 1;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  const size = function getSize() {
    if (!HEAD) return null;
    return length;
  };

  const head = function getHeadNode() {
    if (!HEAD) return null;
    return HEAD.value;
  };

  const tail = function getTailNode() {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const atIndex = function getNodeOfGivenIndx(index) {
    if (!HEAD) return null;
    let pointer = HEAD;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = function removeLastElement() {
    if (!HEAD) return null;
    // for a List with one node
    if (HEAD.nextNode === null) {
      HEAD = null;
    }
    // find the pointer before the tail
    atIndex(size() - 2).nextNode = null;
    length -= 1;
  };

  const contains = (value) => {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    // check the tail node as well
    return pointer.value === value ? true : false;
  };

  const find = (value) => {
    if (!HEAD) return null;
    let index = 0;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return index;
      pointer = pointer.nextNode;
      index++;
    }
    // check the tail node as well
    return pointer.value === value ? index : null;
  };

  const toString = () => {
    if (!HEAD) return null;
    let pointer = HEAD;
    let result = '';
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    // for the tail
    result = result.concat(`( ${pointer.value} ) --> null`);
    return result;
  };

  const insertAt = (value, index) => {
    if (!HEAD) return null;
    const newNode = Node(value);
    length++;
    let pointer = HEAD;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  const removeAt = (index) => {
    if (!HEAD) return null;
    if (index > length || index < 0) return;
    if (index === 0) HEAD = HEAD.nextNode;
    else {
      const prePointer = at(index - 1);
      prePointer.nextNode = prePointer.nextNode.nextNode;
    }
    length--;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
