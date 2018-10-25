import Node from '../lib/Node'
import uuidV4 from './uuidV4'

/**
* Default Node's states
*/
const nodeStates = {
  selected: false,
  selectable: true,
  checked: false,
  expanded: false,
  disabled: false,
  visible: true,
  indeterminate: false,
  matched: false,
  editable: true,
  dragging: false,
  fetching: false,
  fetched: false
}

function merge (state = {}) {
  return Object.assign({}, nodeStates, state)
}

function getPermissionsArray (node) {
  if (!node.data.userPermissions) {
    return false
  }
  let names = ['read', 'write', 'exec'];
  let user = [];
  let group = [];
  let other = [];
  let permissions = [];

  names.forEach(name => {
    user.push(node.data.userPermissions[name]);
    group.push(node.data.groupPermissions[name]);
    other.push(node.data.otherPermissions[name]);
  });

  permissions = [user, group, other];
  return permissions;
}

export default function objectToNode (tree, obj) {
  let node = null

  if (obj instanceof Node) {
    return obj
  }

  if (typeof obj === 'string') {
    node = new Node(tree, {
      text: obj,
      state: merge(),
      id: uuidV4()
    })
  } else if (Array.isArray(obj)) {
    return obj.map(o => objectToNode(tree, o))
  } else {
    node = new Node(tree, obj)
    node.states = merge(node.states)
    node.permissions = getPermissionsArray(node) 
    node.isLeaf = node.data.type === 0

    if (!node.id) {
      node.id = uuidV4()
    }

    if (node.children.length) {
      node.children = node.children.map(child => {
        child = objectToNode(tree, child)
        child.parent = node

        return child
      })
    }
  }

  return node
}
