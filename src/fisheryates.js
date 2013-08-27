/**
* Fisher-Yates shuffle algorithm for arrays (modern version)
*
* Author: Sam Stonehouse
* Created - August 2013
*
* Version - 0.1 August 2013
*
* See - http://stackoverflow.com/a/6274398/873401
*/

(function(undefined) {
	"use strict";

	if (!Array.prototype.shuffle) {
		Array.prototype.shuffle = function () {
			if ( Object.prototype.toString.call( this ) !== '[object Array]' ) {
				throw new TypeError("Array.prototype.shuffle - what is trying to be shuffled is not an array");
			}

			var counter = this.length;
			var temp = undefined;
			var index = undefined;

			while (counter--) {
				// Pick a random index
				index = (Math.random() * counter) | 0;

				// And swap the last element with it
				temp = this[counter];
				this[counter] = this[index];
				this[index] = temp;
			}	

			return this;	
		};
	}
})();