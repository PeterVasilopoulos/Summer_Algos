// BINARY SEARCH TREE ALGORITHMS

// Node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Node Class
class Node {
    constructor(data) {
        this.data = data

        this.left = null
        this.right = null
    }
}

// BST Class
class BST {
    constructor() {
        this.root = null
    }

    // Insert Node Function
    insert(data) {
        // create a new node 
        const newNode = new Node(data)

        // create a runner variable
        let runner = this.head
        // create a runner to hold previous node
        let previous = null

        // run through loop to find out where to put node
        while(runner) {
            // set previous to current runner
            previous = runner

            // if new data is smaller than current, move runner left
            if(newNode.data < runner.data) {
                runner = runner.left
            }
            // if new data is larger than current, move runner right
            if(newNode.data > runner.data) {
                runner = runner.right
            }
        }

        // set the left or right of previous node to the new node

        // if value is smaller than current, set left
        if(newNode.data < previous.data) {
            previous.left = newNode
        }

        // if value is larger than current, set right
        if(newNode.data > previous.data) {
            previous.right = newNode
        }
    }

    // Given an integer array nums where 
    // the elements are sorted in ascending 
    // order, convert it to a height-balanced 
    // binary search tree
    sortedArrayToBTS(nums) {

    }
}

// ------------------------------
// TESTING
// ------------------------------

