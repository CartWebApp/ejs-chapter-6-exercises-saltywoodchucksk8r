/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

class Group {
    // Your code here.
add(value) {
  if (!this.has(value)){
    this.members.push(value);
  }
}

delete(value){
  this.members = this.members.filter(v => v !== value);
}
has(value){
  return this.members.includes(value);
}
 static from(collection) {
  let group = new group;
  for(let value of collection){
    group.add(value);
  }
  return group;
 }
  }
  

  // Tests:
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false

