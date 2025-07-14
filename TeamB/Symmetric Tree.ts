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

/**
 * 노드의 대칭이 맞는지 확인하는 문제입니다
 * compareNode는 비교할 노드고, 처음 호출할 때는 비교할 노드가 없기 때문에 undefined일 때 탐색 할 수 있게 짰습니다
 * 이후 왼쪽 오른쪽이 null 이면 true를 반환하게 했습니다. 첫 번째 케이스 부터 깨지더군요
 * 그리고 둘 중 하나는 null 이면 false를 반환하게 했습니다.
 * 후에 return 값으로  AND 연산자로 root와 비교할 노드가 같은지 확인하고, 같으면 왼쪽 오른쪽 노드를 비교해서 대칭인지 확인하게 했습니다.
 */

function isSymmetric(root: TreeNode | null, compareNode?: TreeNode | null): boolean {
  if (compareNode === undefined) {
    if (!root) return true;
    return isSymmetric(root.left, root.right);
  }

  if (!root && !compareNode) return true; // 둘 다 null이면 대칭
  if (!root || !compareNode) return false; // 하나만 null이면 비대칭

  return (
    root.val === compareNode.val &&
    isSymmetric(root.left, compareNode.right) &&
    isSymmetric(root.right, compareNode.left)
  );
}

// const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
//   if (!left && !right) return true;
//   if (!left || !right) return false;
//   return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
// };

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root) return true;

//   return isMirror(root.left, root.right);
// }

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
