export default class Machina {
	constructor(params) {
	  this.update(params);
	}
	
	update(params) {
	  for (const p in params) {
	    this[p] = params[p]
	  }
	}
	
	remove(params) {
	  for (const p of params)
	    delete this[p]
	}
}