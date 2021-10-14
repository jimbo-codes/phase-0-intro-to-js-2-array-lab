// Write your solution here!

const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats
}
function destructivelyRemoveLastCat() {
    cats.splice(-1);
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
    return cats
}
function appendCat(name) {
    
    const newcats = [
        ...cats.slice(),
        name,
    ]
    return newcats
}
function prependCat(name) {
    
    const newcats1 = [
        name,
        ...cats.slice(),
            ]
    return newcats1
}
function removeLastCat() {
    
    const newcats2 = [
        ...cats.slice(0, cats.length-1),
            ]
    return newcats2
        }
function removeFirstCat() {
    const newcats3 = [
        ...cats.slice(1, cats.length),
            ]
    return newcats3
        }
        /*
    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});


*/
