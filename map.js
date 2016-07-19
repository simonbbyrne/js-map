(function(window) {
	'use strict';

	var Map = function() {
		this._set = {};
		this._size = 0;
	};

	/**
	 * Associate key k with value v
	 */
	Map.prototype.set = function(k, v) {
		var previous = this.get(k);
		if (!previous) {
			this._size++;
		}
		this._set[k] = v;
		return previous;
	};

	/**
	 * Return the value associated with a key
	 */
	Map.prototype.get = function(k) {
		return this.has(k) ? this._set[k] : undefined;
	};

	/**
	 * Check if a key already exists in the map
	 */
	Map.prototype.has = function(k) {
		return Object.prototype.hasOwnProperty.call(this._set, k);
	};

	/**
	 * Remove the key value pair by key
	 */
	Map.prototype.remove = function(k) {
		var previous = this.get(k);
		if (previous) {
			delete this._set[k];
			this._size--;
			return previous;
		}
		return undefined;
	};

	/**
	 * Return the size
	 */
	Map.prototype.size = function() {
		return this._size;
	};

	/**
	 * Check if the map is empty
	 */
	Map.prototype.isEmpty = function() {
		return this.size() === 0;
	};

	/**
	 * Return the entry values
	 * @return {[type]} [description]
	 */
	Map.prototype.values = function() {
		var values = [],
			k;
		for (k in this._set) {
			if (values.indexOf(this._set[k] === -1 && this.has(k))) {
				values.push(this._set[k]);
			}
		}
		return values;
	};

	/**
	 * Clear/ empty the map
	 * @return {[type]} [description]
	 */
	Map.prototype.clear = function() {
		this._set = {};
		this._size = 0;
	};

	window.SBMap = Map;

})(window);