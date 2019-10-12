const Node = require('./node');

class LinkedList {
    constructor() {
		this._head = null;
		this._tail = null;
		this.length = 0;
	}

    append(data) {
		let node = new Node( data );
		if(this._head) {
			node.prev = this._tail;
			this._tail.next = node;
			this._tail = node
		} else {
			this._head = node;
			this._tail = node;
		}
		this.length += 1;
		return this;
	}

    head() {
		 return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		let current = this._head;
    	for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current.data;
	}

    insertAt(index, data) {
		let current = this._head;
		let counter = 1;
		let node = new Node( data );
		if( index == 0 ) {
			this._head.prev = node;
			node.next = this._head;
			this._head = node;
		} else {
			while(current) {
				current = current.next;
				if( counter == index ) {
					node.prev = current.prev;
					current.prev.next = node;
					node.next = current;
					current.prev = node;
			}
			counter++;
			}
		}
		return this;
	}

    isEmpty() {
		if( this._head == null && this._tail == null){
			return true;
		} else {
			return false;
		}
	}

    clear() {
		if (this._tail && this._head) {
			this._head.data = null;
			this._tail.data = null;
		}
		this.length = 0;
		return this;
	}

    deleteAt(index) {
		let current = this._head;
		while( current ) {
			if( current.data == index ) {
				if( current == this._head && current == this._tail ) {
					this._head = null;
					this._tail = null;
				} else if ( current == this._head ) {
					this._head = this._head.next;
					this._head.prev = null;
				} else if ( current == this._tail ) {
					this._tail = this._tail.prev;
					this._tail.next = null;
				} else {
					current.prev.next = current.next;
					current.next.prev = current.prev;
			}
			}
		current = current.next;
		}
		return this;
	}

    reverse() {
		let current = this._head;
		let prev = null;
		while( current ){
			let next = current.next;
			current.next = prev;
			current.prev = next;
			prev = current;
			current = next;
		}
		this._tail = this._head;
		this._head = prev;
		return this;
	}

    indexOf(data) {
		let current = this._head;
		let index = 0;
		while (current) {
			if (current.data == data) {
				return index;
			}
			current = current.next;
			index += 1;
		}
		return -1;
	}
}

module.exports = LinkedList;
