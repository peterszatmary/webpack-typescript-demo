import {ZooSize} from "./zooSize"
import {Animal} from "./animal"

export interface Zoo {
	getSize : () => ZooSize
	addAnimal : (animal : Animal) => void
	getAnimalCount : () => number
}