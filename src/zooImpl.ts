import {ZooSize} from "./zooSize"
import {Zoo} from "./zoo"
import {Animal} from "./animal"

export class ZooImpl implements Zoo {

	private animalCount : number
	private size : ZooSize

	public getSize() : ZooSize {
		return this.size
	}

	public getAnimalCount() : number {
		return this.animalCount
	}


	constructor(public zooSize : ZooSize) {
		this.size = zooSize
		this.animalCount = 0
	}

	addAnimal = (animal : Animal) => {
		if (this.animalCount >= this.size) {
			console.info("No place for animal.")
			return
		}
		this.animalCount++
		console.info("Animal added.")
		}
}