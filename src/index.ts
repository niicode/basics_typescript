 import { Sorter } from "./Sorter";
 import { NumbersCollection } from "./NumbersCollection";
 import { CharactersCollection } from "./CharactersCollection";

 const numbersCollection = new NumbersCollection([10,-2,3,5])
 const characters = new CharactersCollection("dcTa")
 const sorter = new Sorter(characters);

 sorter.sort();
 
 console.log(characters.data)