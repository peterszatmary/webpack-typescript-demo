import {ZooSize} from "./zooSize"
import {Zoo} from "./zoo"
import {ZooImpl} from "./zooImpl"
import {Elephant} from "./elephant"

let zoo : Zoo = new ZooImpl(ZooSize.BIG)
let elephant = new Elephant("Elephant", 20)
console.info("Count of animals in zoo = " + zoo.getAnimalCount())
console.info(elephant.toString())
zoo.addAnimal(elephant)
console.info("Count of animals in zoo = " + zoo.getAnimalCount())