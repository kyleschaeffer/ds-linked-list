import { LinkedList } from './linked-list';

test('empty list is instantiated', () => {
  const list = new LinkedList<string>();
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.size()).toBe(0);
});

test('items are pushed to list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  expect(list.head.value).toBe('one');
  expect(list.tail.value).toBe('three');
  expect(list.size()).toBe(3);
});

test('item value is retrieved by index', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  expect(list.get(2)).toBe('three');
});

test('index is out of range', () => {
  const list = new LinkedList<string>();
  expect(() => list.get(1)).toThrowError();
});

test('item is found in the list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  expect(list.find('two')).toBe(1);
  expect(list.find('three')).toBe(2);
});

test('item is found using custom comparison test function', () => {
  const list = new LinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  expect(list.find(5, (a, b) => b >= a)).toBe(4);
  expect(list.find(3, (a, b) => b % a === 0)).toBe(2);
});

test('item is not found in the list', () => {
  const list = new LinkedList<string>();
  expect(list.find('one')).toBe(null);
});

test('item is popped from list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  const popped = list.pop();
  expect(popped).toBe('three');
  expect(list.tail.value).toBe('two');
  expect(list.size()).toBe(2);
});

test('last item is popped from list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  const popped = list.pop();
  expect(popped).toBe('one');
  expect(list.size()).toBe(0);
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
});

test('item is deleted from list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  list.push('four');
  list.push('five');
  list.push('six');
  list.delete(3);
  expect(list.get(3)).toBe('five');
  expect(list.size()).toBe(5);
  expect(list.head.value).toBe('one');
  expect(list.tail.value).toBe('six');
});

test('item is deleted from beginning of list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  list.delete(0);
  expect(list.get(0)).toBe('two');
  expect(list.size()).toBe(2);
  expect(list.head.value).toBe('two');
  expect(list.tail.value).toBe('three');
});

test('item is deleted from end of list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.push('two');
  list.push('three');
  list.delete(2);
  expect(list.get(1)).toBe('two');
  expect(list.size()).toBe(2);
  expect(list.head.value).toBe('one');
  expect(list.tail.value).toBe('two');
});

test('last item is deleted from list', () => {
  const list = new LinkedList<string>();
  list.push('one');
  list.delete(0);
  expect(list.size()).toBe(0);
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
});
