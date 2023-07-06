// Given an integer array nums where 
// the elements are sorted in ascending 
// order, convert it to a height-balanced 
// binary search tree.

// Node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}