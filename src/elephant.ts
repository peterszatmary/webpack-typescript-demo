import {Animal} from "./animal"

export class Elephant extends Animal {

	constructor(elName : string, elAge : number) {
		super()
		if (elName != null) { this.name = elName }
		if (elAge != null) { this.age = elAge }
	}

	toString = () : string => {
		return "Elephant = [ " + this.name + " , " + this.age + "]"
	}
}