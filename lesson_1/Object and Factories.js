/*
1. Make a factory to create the following objects.
2. Get Description should return something like... "Me Talk Pretty one day was written by David Sedaris."


Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

*/

const createBook = function(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription(){
      let status;

      this.read? status = 'I have read it' : status = 'I have not read it.';
      console.log(`${this.title} was written by ${this.author}. ${status}`);
    },

    readBook() {
      this.read = true;
    }
  }
}

 let book1 = createBook('Mythos', 'Stephen Fry');
 let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
 let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => false
console.log(book2.getDescription());
console.log(book2.readBook());
console.log(book2.getDescription());
