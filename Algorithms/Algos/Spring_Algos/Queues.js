/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item)
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }

    /**
    * Compares this queue to another given queue to see if they are equal.
    * Avoid indexing the queue items directly via bracket notation, use the
    * queue methods instead for practice.
    * Use no extra array or objects.
    * The queues should be returned to their original order when done.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Queue} q2 The queue to be compared against this queue.
    * @returns {boolean} Whether all the items of the two queues are equal and
    *    in the same order.
    */
    compareQueues(q2) {
        if (this.isEmpty() && q2.isEmpty()) return true

        if (this.size() !== q2.size()) return false

        if (this.isEmpty()) return false

        if (q2.isEmpty()) return false

        let count = this.size();
        let isEqual = true

        while(count > 0) {
            let queue1 = this.dequeue()
            let queue2 = q2.dequeue()

            if (queue1 != queue2) isEqual = false

            this.enqueue(queue1)
            q2.enqueue(queue2)
            count--;
        }
        return isEqual
    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
        let isPalin = true;
        const stack = new Stack(),
        len = this.size();

        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            stack.push(dequeued);
            // add it back so the queue items and order is restored at the end
            this.enqueue(dequeued);
        }

        for (let i = 0; i < len; i++) {
            let dequeued = this.dequeue();
            let popped = stack.pop();

            if (popped !== dequeued) {
                isPalin = false;
            }

            // add it back so the queue items and order is restored at the end
            this.enqueue(dequeued);
        }
        return isPalin;
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Whether the sum of the left and right halves is equal.
     */
    isSumOfHalvesEqual() {
        let leftHalf = 0;
        let rightHalf = 0;
        let count = this.size();
        let halfway = Math.floor(this.size() / 2)

        while (count > 0) {
            let dequeueNum = this.dequeue();
            console.log("Dequeue: ", dequeueNum);

            if (count > halfway) {
                leftHalf += dequeueNum;
            console.log("Left: ", leftHalf);
            }
            else {
                rightHalf += dequeueNum;
            console.log("Right: ", rightHalf);
            }
            this.enqueue(dequeueNum);
            count--;
        }
        return leftHalf === rightHalf;
    }
}

/* Rebuild the above class using a linked list instead of an array. */
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null ? true : false
    }

    enqueue(item) {
        const newNode = new ListNode(item);

        if (this.isEmpty()) this.head = newNode;

        else {
            let runner = this.head;
            while (runner.next) {
            runner = runner.next;
            }
            runner.next = newNode;
        }
        return this.size();
    }

    front(item) {
        const newNode = new QueueNode(item)
        
        if (this.isEmpty()) return this.size();
        
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    
    dequeue() {
        if (this.isEmpty()) return this.size();
        
        const oldhead = this.head
        this.head = oldhead.next
        return oldhead.data
    }
    

    size() {
        return this.data.length;
    }
}

const list = new Queue();
list.enqueue(1)
list.enqueue(1)
list.enqueue(5)
list.enqueue(3)
list.enqueue(2)
list.enqueue(2)

console.log(list.isSumOfHalvesEqual())