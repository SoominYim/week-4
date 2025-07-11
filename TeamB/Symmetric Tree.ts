class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if (!left && !right) return true;
  if (!left || !right) return false;
  return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
};

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  return isMirror(root.left, root.right);
}

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
);
console.log(
  isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))))
);
