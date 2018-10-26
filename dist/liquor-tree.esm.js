/*!
 * LiquorTree v0.2.39
 * (c) 2018 amsik
 * Released under the MIT License.
 */
var NodeContent={name:"node-content",props:["node"],render:function(e){var t=this,n=this.node,r=this.node.tree.vm;if(n.isEditing){var o=n.text;return this.$nextTick(function(e){t.$refs.editCtrl.focus()}),e("input",{domProps:{value:n.text,type:"text"},class:"tree-input",on:{input:function(e){o=e.target.value},blur:function(){n.stopEditing(o)},keyup:function(e){13===e.keyCode&&n.stopEditing(o)},mouseup:function(e){e.stopPropagation()}},ref:"editCtrl"})}return r.$scopedSlots.default?r.$scopedSlots.default({node:this.node}):e("span",{domProps:{innerHTML:n.text}})}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree-node { white-space: nowrap; display: flex; flex-direction: column; position: relative; box-sizing: border-box; } .tree-content { display: flex; align-items: center; padding: 3px; cursor: pointer; width: 100%; box-sizing: border-box; } .tree-node:not(.selected) > .tree-content:hover { background: #f6f8fb; } .tree-node.selected > .tree-content { background-color: #e7eef7; } .tree-node.disabled > .tree-content:hover { background: inherit; } .tree-arrow { flex-shrink: 0; height: 30px; cursor: pointer; margin-left: 30px; width: 0; } .tree-arrow.has-child { margin-left: 0; width: 30px; position: relative; } .tree-arrow.has-child:after { border: 1.5px solid #494646; position: absolute; border-left: 0; border-top: 0; left: 9px; top: 50%; height: 9px; width: 9px; transform: rotate(-45deg) translateY(-50%) translateX(0); transition: transform 0.25s; transform-origin: center; } .tree-arrow.expanded.has-child:after { transform: rotate(45deg) translateY(-50%) translateX(-5px); } .tree-checkbox { flex-shrink: 0; position: relative; width: 30px; height: 30px; box-sizing: border-box; border: 1px solid #dadada; border-radius: 2px; background: #fff; transition: border-color 0.25s, background-color 0.25s; } .tree-checkbox:after, .tree-arrow:after { position: absolute; display: block; content: ''; } .tree-checkbox.checked, .tree-checkbox.indeterminate { background-color: #3a99fc; border-color: #218eff; } .tree-checkbox.checked:after { box-sizing: content-box; border: 1.5px solid #fff; /* probably width would be rounded in most cases */ border-left: 0; border-top: 0; left: 9px; top: 3px; height: 15px; width: 8px; transform: rotate(45deg) scaleY(0); transition: transform 0.25s; transform-origin: center; } .tree-checkbox.checked:after { transform: rotate(45deg) scaleY(1); } .tree-checkbox.indeterminate:after { background-color: #fff; top: 50%; left: 20%; right: 20%; height: 2px; } .tree-anchor { flex-grow: 2; outline: none; display: flex; text-decoration: none; color: #343434; vertical-align: top; margin-left: 3px; line-height: 24px; padding: 3px 6px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .tree-node.selected .tree-anchor { outline: none; } .tree-node.disabled .tree-anchor { color: #989191; background: #fff; opacity: 0.6; cursor: default; outline: none; } .tree-input { display: block; width: 100%; height: 24px; line-height: 24px; outline: none; border: 1px solid #3498db; padding: 0 4px; } .l-fade-enter-active, .l-fade-leave-active { transition: opacity 0.3s, transform 0.3s; transform: translateX(0); } .l-fade-enter, .l-fade-leave-to { opacity: 0; transform: translateX(-2em); } .tree--small .tree-anchor { line-height: 19px; } .tree--small .tree-checkbox { width: 23px; height: 23px; } .tree--small .tree-arrow { height: 23px; } .tree--small .tree-checkbox.checked:after { left: 7px; top: 3px; height: 11px; width: 5px; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var TreeNode={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"tree-node",class:e.nodeClass,attrs:{"data-id":e.node.id},on:{mousedown:function(t){return t.stopPropagation(),e.handleMouseDown(t)}}},[n("div",{staticClass:"tree-content",style:{"padding-left":e.paddingLeft},on:{contextmenu:function(t){t.preventDefault(),e.ctxMenuOpen(t)},mouseup:function(t){return t.stopPropagation(),e.select(t)}}},[n("v-icon",{on:{mouseup:function(t){return t.stopPropagation(),e.toggleExpand(t)}}},[e._v(e._s(e.typeIcon))]),e._v(" "),e.options.checkbox?n("i",{staticClass:"tree-checkbox",class:{checked:e.node.states.checked,indeterminate:e.node.states.indeterminate},on:{mouseup:function(t){return t.stopPropagation(),e.check(t)}}}):e._e(),e._v(" "),n("span",{ref:"anchor",staticClass:"tree-anchor",attrs:{tabindex:"-1"},on:{focus:e.onNodeFocus,click:function(t){e.tree.$emit("node:click",e.node)},dblclick:function(t){e.tree.$emit("node:dblclick",e.node)}}},[n("node-content",{attrs:{node:e.node}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.node.states.fetching,expression:"node.states.fetching"}],attrs:{width:2,indeterminate:"",size:"14",color:"primary"}})],1)],1),e._v(" "),e.hasChildren()&&e.state.expanded?n("ul",{staticClass:"tree-children"},e._l(e.node.children,function(t){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()})):e._e()])},staticRenderFns:[],name:"Node",inject:["tree"],props:["node","options"],components:{NodeContent:NodeContent},data:function(){return this.node.vm=this,{state:this.node.states}},computed:{paddingLeft:function(){return this.node.depth*this.options.paddingLeft+"px"},nodeClass:function(){var e=this.state,t=this.hasChildren(),n={"has-child":t,expanded:t&&e.expanded,selected:e.selected,disabled:e.disabled,matched:e.matched,dragging:e.dragging};return this.options.checkbox&&(n.checked=e.checked,n.indeterminate=e.indeterminate),n},typeIcon:function(){var e="insert_drive_file";return 0!==this.node.data.type&&(e=this.state.expanded?"folder_open":"folder"),e}},methods:{onNodeFocus:function(){this.tree.activeElement=this.node},focus:function(){this.$refs.anchor.focus(),this.node.select()},check:function(){this.node.checked()?this.node.uncheck():this.node.check()},select:function(e){void 0===e&&(e=!1);var t=e.ctrlKey,n=this.options,r=this.tree,o=this.node;if(!n.editing||!o.isEditing){if(n.editing&&o.editable())return this.startEditing();if(n.checkbox&&n.checkOnSelect)return!n.parentSelect&&this.hasChildren()?this.toggleExpand():this.check(t);!n.parentSelect&&this.hasChildren()&&this.toggleExpand(),n.multiple?o.selected()?t?o.unselect():1!=this.tree.selectedNodes.length&&(r.unselectAll(),o.select()):o.select(t):o.selected()&&t?o.unselect():o.select()}},toggleExpand:function(){this.node.toggleExpand()},hasChildren:function(){return this.node.hasChildren()},startEditing:function(){this.tree._editingNode&&this.tree._editingNode.stopEditing(),this.node.startEditing()},stopEditing:function(){this.node.stopEditing()},handleMouseDown:function(e){this.options.dnd&&this.tree.vm.startDragging(this.node,e)},ctxMenuOpen:function(e){this.$bus.$emit("node:ctxMenuOpen",{event:e,node:this.node})}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree-dragnode { padding: 10px; border: 1px solid #e7eef7; position: fixed; border-radius: 8px; background: #fff; transform: translate(-50%, -110%); z-index: 10; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var DraggableNode={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"tree-dragnode",style:this.style},[this._v(" "+this._s(this.target.node.text)+" ")])},staticRenderFns:[],name:"DragNode",props:{target:{type:Object,default:function(){}}},computed:{style:function(){return void 0===this.target.top?"display: none":"top: "+this.target.top+"px; left: "+this.target.left+"px"}}};function recurseDown(e,t){var n;return Array.isArray(e)?e.map(function(e){return recurseDown(e,t)}):(!1!==(n=t(e))&&e.children&&e.children.length&&(n=recurseDown(e.children,t)),n)}function striptags(e){return!1==!!document?e:(striptags.__element||(striptags.__element=document.createElement("div")),striptags.__element.innerHTML=e,striptags.__element.innerText)}function finder(e){return function(t){return Object.keys(e).every(function(n){if("text"===n){var r=e[n],o=t[n];return o=striptags(o),isRegExp(r)?r.test(o):r===o}var i=e[n];return"state"===n&&(n="states"),Object.keys(i).every(function(e){return t[n][e]===i[e]})})}}function isRegExp(e){return e instanceof RegExp}function getAllChildren(e){var t=[];return e.forEach(function e(n){t.push(n),n.children&&n.children.forEach(e)}),t}function find(e,t,n){if(void 0===n&&(n=!0),!e||!e.length||!t)return null;if(n&&(e=getAllChildren(e)),"number"==typeof t)return e[t]||null;("string"==typeof t||t instanceof RegExp)&&(t={text:t}),"function"!=typeof t&&(t=finder(t));var r=e.filter(t);return r.length?r:null}function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function uuidV4(){return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}function nodeIterator(e,t){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];e.forEach(function(e){return e[t].apply(e,n)})}var Selection=function(e){function t(t,n){var r;void 0===n&&(n=[]),e.call(this),this.tree=t,(r=this).push.apply(r,n)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.remove=function(){return nodeIterator(this,"remove"),this},t.prototype.expand=function(){return nodeIterator(this,"expand"),this},t.prototype.collapse=function(){return nodeIterator(this,"collapse"),this},t.prototype.select=function(e){return nodeIterator(this,"select",e),this},t.prototype.unselect=function(){return nodeIterator(this,"unselect"),this},t.prototype.check=function(){return this.tree.options.checkbox&&nodeIterator(this,"check"),this},t.prototype.uncheck=function(){return this.tree.options.checkbox&&nodeIterator(this,"uncheck"),this},t}(Array),Node=function(e,t){if(!t)throw new Error("Node can not be empty");if(this.id=t.id||uuidV4(),this.states=t.state||{},this.showChildren=!0,this.children=t.children||[],this.parent=t.parent||null,this.isBatch=t.isBatch||!1,this.isEditing=!1,this.data=Object.assign({},{text:t.text},t.data||{}),!e)throw new Error("Node must has a Tree context!");this.tree=e},prototypeAccessors={depth:{configurable:!0},text:{configurable:!0}};Node.prototype.$emit=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.tree).$emit.apply(t,["node:"+e,this].concat(n))},prototypeAccessors.depth.get=function(){var e=0,t=this.parent;if(!t||!1===this.showChildren)return e;do{e++}while(t.parent);return e},prototypeAccessors.text.get=function(){return this.data.text},prototypeAccessors.text.set=function(e){var t=this.text;this.data.text=e,this.$emit("text:changed",e,t)},Node.prototype.state=function(e,t){return void 0===t?this.states[e]:(this.states[e]=t,this)},Node.prototype.recurseUp=function(e,t){if(void 0===t&&(t=this),t.parent)return!1!==e(t.parent)?this.recurseUp(e,t.parent):void 0},Node.prototype.recurseDown=function(e,t){!0!==t&&e(this),this.hasChildren()&&recurseDown(this.children,e)},Node.prototype.refreshIndeterminateState=function(){if(!this.tree.options.autoCheckChildren)return this;if(this.state("indeterminate",!1),this.hasChildren()){var e=this.children.length,t=0,n=0,r=0;this.children.forEach(function(e){e.checked()&&t++,e.disabled()&&r++,e.indeterminate()&&n++}),t===e-r?this.checked()||(this.state("checked",!0),this.tree.check(this),this.$emit("checked")):(this.checked()&&(this.state("checked",!1),this.tree.uncheck(this),this.$emit("unchecked")),this.state("indeterminate",n>0||t>0&&t<e))}this.parent&&this.parent.refreshIndeterminateState()},Node.prototype.indeterminate=function(){return this.state("indeterminate")},Node.prototype.fetching=function(){return this.state("fetching")},Node.prototype.fetched=function(){return this.state("fetched")},Node.prototype.editable=function(){return!this.state("disabled")&&this.state("editable")},Node.prototype.selectable=function(){return!this.state("disabled")&&this.state("selectable")},Node.prototype.selected=function(){return this.state("selected")},Node.prototype.select=function(e){return!this.selectable()||this.selected()?this:(this.tree.select(this,e),this.state("selected",!0),this.$emit("selected"),this)},Node.prototype.unselect=function(){return this.selectable()&&this.selected()?(this.tree.unselect(this),this.state("selected",!1),this.$emit("unselected"),this):this},Node.prototype.checked=function(){return this.state("checked")},Node.prototype.check=function(){var e=this;return this.checked()||this.disabled()?this:this.indeterminate()?this.uncheck():(this.tree.options.autoCheckChildren?(this.recurseDown(function(t){t.state("indeterminate",!1),t.checked()||(e.tree.check(t),t.state("checked",!0),t.$emit("checked"))}),this.parent&&this.parent.refreshIndeterminateState()):(this.tree.check(this),this.state("checked",!0),this.$emit("checked")),this)},Node.prototype.uncheck=function(){var e=this;return!this.indeterminate()&&!this.checked()||this.disabled()?this:(this.tree.options.autoCheckChildren?(this.recurseDown(function(t){t.state("indeterminate",!1),t.checked()&&(e.tree.uncheck(t),t.state("checked",!1),t.$emit("unchecked"))}),this.parent&&this.parent.refreshIndeterminateState()):(this.tree.uncheck(this),this.state("checked",!1),this.$emit("unchecked")),this)},Node.prototype.show=function(){return this.visible()?this:(this.state("visible",!0),this.$emit("shown"),this)},Node.prototype.hide=function(){return this.hidden()?this:(this.state("visible",!1),this.$emit("hidden"),this)},Node.prototype.visible=function(){return this.state("visible")},Node.prototype.hidden=function(){return!this.state("visible")},Node.prototype.enable=function(){return this.enabled()?this:(this.recurseDown(function(e){e.disabled()&&(e.state("disabled",!1),e.$emit("enabled"))}),this)},Node.prototype.enabled=function(){return!this.state("disabled")},Node.prototype.disable=function(){return this.disabled()?this:(this.recurseDown(function(e){e.enabled()&&(e.state("disabled",!0),e.$emit("disabled"))}),this)},Node.prototype.disabled=function(){return this.state("disabled")},Node.prototype.expandTop=function(e){var t=this;this.recurseUp(function(n){n.state("expanded",!0),!0!==e&&t.$emit("expanded",n)})},Node.prototype.expand=function(){var e=this;return this.$emit("expand"),!this.hasChildren()||this.expanded()||this.disabled()?this:(this.isBatch?this.tree.loadChildren(this).then(function(t){e.state("expanded",!0),e.$emit("expanded")}):(this.state("expanded",!0),this.$emit("expanded")),this)},Node.prototype.expanded=function(){return this.state("expanded")},Node.prototype.collapse=function(){return!this.hasChildren()||this.collapsed()||this.disabled()?this:(this.state("expanded",!1),this.$emit("collapsed"),this)},Node.prototype.collapsed=function(){return!this.state("expanded")},Node.prototype.toggleExpand=function(){return this._toggleOpenedState()},Node.prototype.toggleCollapse=function(){return this._toggleOpenedState()},Node.prototype._toggleOpenedState=function(){return this.disabled()||!this.hasChildren()?this:this.expanded()?this.collapse():this.expand()},Node.prototype.startDragging=function(){return!this.disabled()&&!1!==this.state("draggable")&&!this.state("dragging")&&((!this.isRoot()||1!==this.tree.model.length)&&(this.select(),this.state("dragging",!0),this.$emit("dragging:start"),!0))},Node.prototype.finishDragging=function(e,t){var n=this.tree,r=this.clone(),o=this.parent;n.__silence=!0,"drag-on"===t?n.append(e,r):"drag-below"===t?n.after(e,r):"drag-above"===t&&n.before(e,r),r.state("selected")&&(n.selectedNodes.remove(this),n.selectedNodes.add(r)),e.refreshIndeterminateState(),this.remove(),o.refreshIndeterminateState(),n.__silence=!1,this.state("dragging",!1),this.$emit("dragging:finish")},Node.prototype.startEditing=function(){if(this.disabled())return!1;this.isEditing||(this.tree._editingNode=this,this.tree.activeElement=this,this.isEditing=!0,this.$emit("editing:start"))},Node.prototype.stopEditing=function(e){this.isEditing&&(this.isEditing=!1,this.tree._editingNode=null,this.tree.activeElement=null,e&&!1!==e&&this.text!==e&&(this.text=e),this.$emit("editing:stop",this.text===e))},Node.prototype.index=function(e){return this.tree.index(this,e)},Node.prototype.first=function(){return this.hasChildren()?this.children[0]:null},Node.prototype.last=function(){return this.hasChildren()?this.children[this.children.length-1]:null},Node.prototype.next=function(){return this.tree.nextNode(this)},Node.prototype.prev=function(){return this.tree.prevNode(this)},Node.prototype.insertAt=function(e,t){var n=this;if(void 0===t&&(t=this.children.length),e)return e=this.tree.objectToNode(e),Array.isArray(e)?(e.reverse().map(function(e){return n.insertAt(e,t)}),new Selection(this.tree,[].concat(e))):(e.parent=this,this.children.splice(t,0,e),e.disabled()&&e.hasChildren()&&e.recurseDown(function(e){e.state("disabled",!0)}),this.isBatch||this.$emit("added",e),e)},Node.prototype.addChild=function(e){return this.insertAt(e)},Node.prototype.append=function(e){return this.addChild(e)},Node.prototype.prepend=function(e){return this.insertAt(e,0)},Node.prototype.before=function(e){return this.tree.before(this,e)},Node.prototype.after=function(e){return this.tree.after(this,e)},Node.prototype.empty=function(){for(var e;e=this.children.pop();)e.remove();return this},Node.prototype.remove=function(){return this.tree.removeNode(this)},Node.prototype.removeChild=function(e){var t=this.find(e);return t?this.tree.removeNode(t):null},Node.prototype.find=function(e,t){return e instanceof Node?e:find(this.children,e,t)},Node.prototype.focus=function(){this.vm&&this.vm.focus()},Node.prototype.hasChildren=function(){return this.showChildren&&this.isBatch||this.children.length>0},Node.prototype.isRoot=function(){return null===this.parent},Node.prototype.clone=function(){var e=this,t=new Node(this.tree,this.toJSON());return t.children=t.children.map(function(n){var r=new Node(e.tree,n);return r.parent=t,r.children=r.children.map(function(t){return new Node(e.tree,t)}),r}),t},Node.prototype.toJSON=function(){return{text:this.text,data:this.data,state:this.states,children:this.children.map(function(e){return e.toJSON()})}},Object.defineProperties(Node.prototype,prototypeAccessors);var nodeStates={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,visible:!0,indeterminate:!1,matched:!1,editable:!0,dragging:!1,fetching:!1,fetched:!1};function merge(e){return void 0===e&&(e={}),Object.assign({},nodeStates,e)}function getPermissionsArray(e){if(!e.data.userPermissions)return!1;var t=[],n=[],r=[];return["read","write","exec"].forEach(function(o){t.push(e.data.userPermissions[o]),n.push(e.data.groupPermissions[o]),r.push(e.data.otherPermissions[o])}),[t,n,r]}function objectToNode(e,t){var n=null;if(t instanceof Node)return t;if("string"==typeof t)n=new Node(e,{text:t,state:merge(),id:uuidV4()});else{if(Array.isArray(t))return t.map(function(t){return objectToNode(e,t)});(n=new Node(e,t)).states=merge(n.states),n.permissions=getPermissionsArray(n),n.isLeaf=0===n.data.type,n.id||(n.id=uuidV4()),n.children.length&&(n.children=n.children.map(function(t){return(t=objectToNode(e,t)).parent=n,t}))}return n}function List(e){var t=new Array(e);return t.__proto__=List.prototype,t}List.prototype=Object.create(Array.prototype),List.prototype.empty=function(){return this.splice(0,this.length),this},List.prototype.add=function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this).push.apply(e,t),this},List.prototype.remove=function(e){var t=this.indexOf(e);return-1===t?this:(this.splice(t,1),this)},List.prototype.removeAll=function(e){for(;this.includes(e);)this.remove(e);return this},List.prototype.top=function(){return this[this.length-1]};var defaultPropertyNames={id:"id",text:"text",children:"children",state:"state",data:"data",isBatch:"isBatch"};function convertNames(e,t){return{id:e[t.id],text:e[t.text],children:e[t.children],state:e[t.state],data:e[t.data],isBatch:e[t.isBatch]}}var TreeParser={parse:function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[e]);var r=Object.assign({},defaultPropertyNames,n);return e.map(function e(t){var n=convertNames(t,r);return n.children&&!Array.isArray(n.children)&&(n.children=[n.children]),n.children&&(n.children=n.children.map(e)),n}).map(function(e){return objectToNode(t,e)})}};function request(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("GET",e),r.setRequestHeader("Content-Type","application/json"),r.addEventListener("load",function(e){try{var o=JSON.parse(r.response);t(o)}catch(e){n(e)}}),r.send(null)})}function get(e){return request(e)}function createTemplate(e){return function(t){for(var n,r=/{([^}]+)}/,o=e;n=r.exec(o);)o=o.replace(n[0],t[n[1]]);return o}}function orderAsc(e,t){return e.text<t.text?-1:e.text>t.text?1:0}function orderDesc(e,t){return e.text<t.text?1:e.text>t.text?-1:0}function getCompareFunction(e){switch(e.toLowerCase()){case"asc":return orderAsc;case"desc":return orderDesc}}function sort(e,t){"string"==typeof t&&(t=getCompareFunction(t)),Array.isArray(e)&&"function"==typeof t&&e.sort(t)}var Tree=function(e){var t=this;this.vm=e,this.options=e.opts,this.activeElement=null;var n,r=this.options.fetchData;"string"==typeof r&&(this.options.fetchData=(n=createTemplate(r),function(e){return get(n(e)).catch(t.options.onFetchError)}))};Tree.prototype.$on=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$on.apply(t,[e].concat(n))},Tree.prototype.$once=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$once.apply(t,[e].concat(n))},Tree.prototype.$off=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];(t=this.vm).$off.apply(t,[e].concat(n))},Tree.prototype.$emit=function(e){for(var t,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];this.__silence||((t=this.vm).$emit.apply(t,[e].concat(n)),this.options.store&&this.vm.$emit("LIQUOR_NOISE"))},Tree.prototype._sort=function(e,t,n){!1!==n&&this.recurseDown(e,function(e){e.hasChildren()&&sort(e.children,t)}),sort(e,t)},Tree.prototype.sortTree=function(e,t){this._sort(this.model,e,t)},Tree.prototype.sort=function(e,t,n){var r=this,o=this.find(e,!0);o&&t&&o.forEach(function(e){r._sort(e.children,t,n)})},Tree.prototype.clearFilter=function(){this.recurseDown(function(e){e.state("matched",!1),e.state("visible",!0),e.state("expanded",e.__expanded),e.__expanded=void 0,e.showChildren=!0}),this.vm.matches.length=0,this.vm.$emit("tree:filtered",[],"")},Tree.prototype.filter=function(e){if(!e)return this.clearFilter();var t=[],n=this.options.filter.matcher,r=this.options.filter,o=r.showChildren,i=r.plainList;return this.recurseDown(function(r){n(e,r)&&t.push(r),r.showChildren=!0,void 0===r.__expanded&&(r.__expanded=r.state("expanded")),r.state("visible",!1),r.state("matched",!1),r.state("expanded",!0)}),t.reverse().forEach(function(e){e.state("matched",!0),e.state("visible",!0),e.showChildren=!i,e.hasChildren()&&e.recurseDown(function(e){e.state("visible",!!o)},!0),e.recurseUp(function(e){e.state("visible",!0),e.state("expanded",!0)}),e.hasChildren()&&e.state("expanded",!1)}),this.vm.matches=t,this.vm.$emit("tree:filtered",t,e),t},Tree.prototype.selected=function(){return new(Function.prototype.bind.apply(Selection,[null].concat([this],this.selectedNodes)))},Tree.prototype.checked=function(){return this.options.checkbox?new(Function.prototype.bind.apply(Selection,[null].concat([this],this.checkedNodes))):null},Tree.prototype.loadChildren=function(e){var t=this;if(e)return this.$emit("tree:data:fetch",e),this.fetch(e).then(function(n){e.append(n),e.isBatch=!1,e.checked()&&e.recurseDown(function(e){e.state("checked",!0)}),t.$emit("tree:data:received",e)})},Tree.prototype.fetch=function(e){var t=this,n=this.options.fetchData(e);return n.then||(n=get(n).catch(this.options.onFetchError)),n.then(function(e){return e&&t.parse(e,t.options.modelParse)}).catch(this.options.onFetchError),n},Tree.prototype.fetchInitData=function(){return this.fetch({id:"root",name:"root"})},Tree.prototype.setModel=function(e){var t=this;if(this.model=this.parse(e,this.options.modelParse),this.vm.model=this.model,this.selectedNodes=new List,this.checkedNodes=new List,recurseDown(this.model,function(e){e.tree=t,e.selected()&&t.selectedNodes.add(e),e.checked()&&(t.checkedNodes.add(e),e.parent&&e.parent.refreshIndeterminateState()),e.disabled()&&e.recurseDown(function(e){e.state("disabled",!0)})}),!this.options.multiple&&this.selectedNodes.length){var n=this.selectedNodes.top();this.selectedNodes.forEach(function(e){n!==e&&e.state("selected",!1)}),this.selectedNodes.empty().add(n)}this.options.checkOnSelect&&this.options.checkbox&&this.unselectAll()},Tree.prototype.recurseDown=function(e,t){return!t&&e&&(t=e,e=this.model),recurseDown(e,t)},Tree.prototype.select=function(e,t){var n=this.getNode(e);return!!n&&(this.options.multiple&&t?this.selectedNodes.add(n):(this.unselectAll(),this.selectedNodes.empty().add(n)),!0)},Tree.prototype.selectAll=function(){var e=this;return!!this.options.multiple&&(this.selectedNodes.empty(),this.recurseDown(function(t){e.selectedNodes.add(t.select(!0))}),!0)},Tree.prototype.unselect=function(e){var t=this.getNode(e);return!!t&&(this.selectedNodes.remove(t),!0)},Tree.prototype.unselectAll=function(){for(var e;e=this.selectedNodes.pop();)e.unselect();return!0},Tree.prototype.check=function(e){this.checkedNodes.add(e)},Tree.prototype.uncheck=function(e){this.checkedNodes.remove(e)},Tree.prototype.checkAll=function(){this.recurseDown(function(e){0===e.depth&&(e.indeterminate()&&e.state("indeterminate",!1),e.check())})},Tree.prototype.uncheckAll=function(){for(var e;e=this.checkedNodes.pop();)e.uncheck();return!0},Tree.prototype.expand=function(e){return!e.expanded()&&(e.expand(),!0)},Tree.prototype.collapse=function(e){return!e.collapsed()&&(e.collapse(),!0)},Tree.prototype.toggleExpand=function(e){return!!e.hasChildren()&&(e.toggleExpand(),!0)},Tree.prototype.toggleCollapse=function(e){return!!e.hasChildren()&&(e.toggleCollapse(),!0)},Tree.prototype.expandAll=function(){this.recurseDown(function(e){e.hasChildren()&&e.collapsed()&&e.expand()})},Tree.prototype.collapseAll=function(){this.recurseDown(function(e){e.hasChildren()&&e.expanded()&&e.collapse()})},Tree.prototype.index=function(e,t){var n=e.parent,r=(n=n?n.children:this.model).indexOf(e);return t?{index:r,target:n,node:n[r]}:r},Tree.prototype.nextNode=function(e){var t=this.index(e,!0);return t.target[t.index+1]||null},Tree.prototype.nextVisibleNode=function(e){if(e.hasChildren()&&e.expanded())return e.first();var t=this.nextNode(e);return!t&&e.parent?e.parent.next():t},Tree.prototype.prevNode=function(e){var t=this.index(e,!0);return t.target[t.index-1]||null},Tree.prototype.prevVisibleNode=function(e){var t=this.prevNode(e);return t?t.hasChildren()&&t.expanded()?t.last():t:e.parent},Tree.prototype.addToModel=function(e,t){var n=this;void 0===t&&(t=this.model.length),e=this.objectToNode(e),this.model.splice(t,0,e),this.recurseDown(e,function(e){e.tree=n}),this.$emit("node:added",e)},Tree.prototype.append=function(e,t){var n=this.find(e);return!!n&&n.append(t)},Tree.prototype.prepend=function(e,t){var n=this.find(e);return!!n&&n.prepend(t)},Tree.prototype.before=function(e,t){e=this.find(e);var n=this.index(e,!0),r=this.objectToNode(t);return!!~n.index&&(n.target.splice(n.index,0,r),r.parent=e.parent,this.$emit("node:added",r),r)},Tree.prototype.after=function(e,t){e=this.find(e);var n=this.index(e,!0),r=this.objectToNode(t);return!!~n.index&&(n.target.splice(n.index+1,0,r),r.parent=e.parent,this.$emit("node:added",r),r)},Tree.prototype.addNode=function(e){var t=this.model.length;return e=objectToNode(e),this.model.splice(t,0,e),this.$emit("node:added",e),e},Tree.prototype.remove=function(e,t){return this.removeNode(this.find(e,t))},Tree.prototype.removeNode=function(e){if(e instanceof Selection)return e.remove();if(!e)return!1;if(e.parent){var t=e.parent.children;~t.indexOf(e)&&t.splice(t.indexOf(e),1)}else~this.model.indexOf(e)&&this.model.splice(this.model.indexOf(e),1);e.parent&&e.parent.indeterminate()&&!e.parent.hasChildren()&&e.parent.state("indeterminate",!1),e.parent=null,this.$emit("node:removed",e),this.selectedNodes.remove(e),this.checkedNodes.remove(e);var n=this.vm.matches;return n&&n.length&&n.includes(e)&&n.splice(n.indexOf(e),1),e},Tree.prototype.isNode=function(e){return e instanceof Node},Tree.prototype.find=function(e,t){if(e instanceof Node)return e;var n=find(this.model,e);return n&&n.length?new Selection(this,!0===t?n:[n[0]]):null},Tree.prototype.getNodeById=function(e){var t=null;return recurseDown(this.model,function(n){if(n.id===e)return t=n,!1}),t},Tree.prototype.getNode=function(e){return e instanceof Node?e:null},Tree.prototype.objectToNode=function(e){return objectToNode(this,e)},Tree.prototype.parse=function(e,t){t||(t=this.options.propertyNames);try{return TreeParser.parse(e,this,t)}catch(e){return console.error(e),[]}};var keyCodes={ARROW_LEFT:37,ARROW_TOP:38,ARROW_RIGHT:39,ARROW_BOTTOM:40,SPACE:32,DELETE:46,ENTER:13,ESC:27},codesArr=[37,38,39,40,32];function focusUp(e,t){var n=e.prevVisibleNode(t);if(n)return n.disabled()?focusUp(e,n):void n.focus()}function focusdDown(e,t){var n=e.nextVisibleNode(t);if(n)return n.disabled()?focusdDown(e,n):void n.focus()}function checkNode(e,t){e.options.checkbox&&(t.checked()?t.uncheck():t.check())}function leftArrow(e,t){if(t.expanded())t.collapse();else{var n=t.parent;n&&n.focus()}}function rightArrow(e,t){if(t.collapsed())t.expand();else{var n=t.first();n&&n.focus()}}function deleteNode(e,t){var n=e.options.deletion;n&&("function"==typeof n?!0===n(t)&&t.remove():!0===n&&t.remove())}function initKeyboardNavigation(e){e.vm.$el.addEventListener("keydown",function(t){var n=t.keyCode,r=e.activeElement;if(e.isNode(r))if(r.isEditing)switch(n){case keyCodes.ESC:return r.stopEditing(!1)}else switch(codesArr.includes(n)&&(t.preventDefault(),t.stopPropagation()),n){case keyCodes.ARROW_LEFT:return leftArrow(e,r);case keyCodes.ARROW_RIGHT:return rightArrow(e,r);case keyCodes.ARROW_TOP:return focusUp(e,r);case keyCodes.ARROW_BOTTOM:return focusdDown(e,r);case keyCodes.SPACE:case keyCodes.ENTER:return checkNode(e,r);case keyCodes.DELETE:return deleteNode(e,r)}},!0)}function assert(e,t){if(!1===e)throw new Error(t)}function initEvents(e){var t=e.opts,n=t.multiple,r=t.checkbox,o=e.tree,i=function(t){var o=e.selected();r?e.$emit("input",{selected:n?o:o[0]||null,checked:e.checked()}):e.$emit("input",n?o:o[0]||null)};i(),o.$on("node:selected",i),o.$on("node:unselected",i),r&&(o.$on("node:checked",i),o.$on("node:unchecked",i)),o.$on("node:added",function(e,t){r&&(t.state("checked")&&!o.checkedNodes.has(t)&&o.checkedNodes.add(t),t.refreshIndeterminateState()),t.state("selected")&&!o.selectedNodes.has(t)&&o.select(t),i()})}var TreeMixin={mounted:function(){var e,t=this,n=new Tree(this);this.tree=n,this._provided.tree=n,!this.data&&this.opts.fetchData?e=n.fetchInitData():this.data&&this.data.then?(e=this.data,this.loading=!0):e=Promise.resolve(this.data),e.then(function(e){e||(e=[]),t.opts.store?t.connectStore(t.opts.store):t.tree.setModel(e),t.loading&&(t.loading=!1),t.$emit("tree:mounted",t),initEvents(t)}),!1!==this.opts.keyboardNavigation&&initKeyboardNavigation(n)},methods:{connectStore:function(e){var t=this,n=e.store,r=e.mutations,o=e.getter,i=e.dispatcher;assert("function"==typeof o,"`getter` must be a function"),assert("function"==typeof i,"`dispatcher` must be a function"),void 0!==r&&assert(Array.isArray(r),"`mutations` must be an array"),n.subscribe(function(e,n){r?r.includes(e.type)&&t.tree.setModel(o()):t.tree.setModel(o())}),this.tree.setModel(o()),this.$on("LIQUOR_NOISE",function(){t.$nextTick(function(e){i(t.toJSON())})})},recurseDown:function(e){this.tree.recurseDown(e)},selected:function(){return this.tree.selected()},checked:function(){return this.tree.checked()},append:function(e,t){return t?this.tree.append(e,t):this.tree.addToModel(e,this.tree.model.length)},prepend:function(e,t){return t?this.tree.prepend(e,t):this.tree.addToModel(e,0)},addChild:function(e,t){return this.append(e,t)},remove:function(e,t){return this.tree.remove(e,t)},before:function(e,t){return t?this.tree.before(e,t):this.prepend(e)},after:function(e,t){return t?this.tree.after(e,t):this.append(e)},find:function(e,t){return this.tree.find(e,t)},findAll:function(e){return this.tree.find(e,!0)},expandAll:function(){return this.tree.expandAll()},collapseAll:function(){return this.tree.collapseAll()},sortTree:function(e,t){return this.tree.sortTree(e,t)},sort:function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this.tree).sort.apply(e,t)},toJSON:function(){return JSON.parse(JSON.stringify(this.model))},flatten:function(){var e=[];return this.recurseDown(function(t){var n={id:t.id,data:JSON.parse(JSON.stringify(t.data)),permissions:JSON.parse(JSON.stringify(t.permissions))};e.push(n)}),e}}},DropPosition={ABOVE:"drag-above",BELOW:"drag-below",ON:"drag-on"};function isMovingStarted(e,t){return Math.abs(e.clientX-t[0])>5||Math.abs(e.clientY-t[1])>5}function getSelectedNode(e){for(var t,n=e.path,r=0;r<n.length;r++)if(t=n[r].className||"",/tree-node/.test(t))return n[r];return null}function getDropDestination(e){var t=getSelectedNode(e);return t||null}function updateHelperClasses(e,t){if(e){var n=e.className;if(t)new RegExp(t).test(n)||(n+=" "+t);else{for(var r in DropPosition)n=n.replace(DropPosition[r],"");n.replace("dragging","")}e.className=n.replace(/\s+/g," ")}}function highlightDropDestination(e,t){var n=t.getBoundingClientRect(),r=n.height/3,o=DropPosition.ON;return n.top+r>=e.clientY?o=DropPosition.ABOVE:n.top+2*r<=e.clientY&&(o=DropPosition.BELOW),updateHelperClasses(t,o),o}var TreeDnd={methods:{onDragStart:function(e){e.preventDefault()},startDragging:function(e,t){this.$$startDragPosition=[t.clientX,t.clientY],this.$$possibleDragNode=e,this.initDragListeners()},initDragListeners:function(){var e,t=this,n=function(o){t.$$startDragPosition||o.stopPropagation(),t.$$dropDestination&&(updateHelperClasses(t.$$dropDestination.vm.$el,null),t.draggableNode.node.finishDragging(t.$$dropDestination,e),t.$$dropDestination=null),t.$$possibleDragNode=null,t.$set(t,"draggableNode",null),window.removeEventListener("mouseup",n,!0),window.removeEventListener("mousemove",r,!0)},r=function(n){if(!t.$$startDragPosition||isMovingStarted(n,t.$$startDragPosition)){t.$$startDragPosition=null,t.$$possibleDragNode&&(t.$set(t,"draggableNode",{node:t.$$possibleDragNode,left:0,top:0}),t.$$possibleDragNode.startDragging(),t.$$possibleDragNode=null),t.draggableNode.left=n.clientX,t.draggableNode.top=n.clientY;var r=getDropDestination(n);if(t.$$dropDestination&&updateHelperClasses(t.$$dropDestination.vm.$el,null),r){var o=r.getAttribute("data-id");if(t.draggableNode.node.id===o)return;t.$$dropDestination&&t.$$dropDestination.id===o||(t.$$dropDestination=t.tree.getNodeById(o)),e=highlightDropDestination(n,r)}}};window.addEventListener("mouseup",n,!0),window.addEventListener("mousemove",r,!0)}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree { overflow: auto; } .tree-root, .tree-children { list-style: none; padding: 0; } .tree > .tree-root, .tree > .tree-filter-empty { padding: 3px; box-sizing: border-box; } .tree.tree--draggable .tree-node:not(.selected) > .tree-content:hover { background: transparent; } .drag-above, .drag-below, .drag-on { position: relative; z-index: 1; } .drag-on > .tree-content { background: #fafcff; outline: 1px solid #7baff2; } .drag-above > .tree-content::before, .drag-below > .tree-content::after { display: block; content: ''; position: absolute; height: 8px; left: 0; right: 0; z-index: 2; box-sizing: border-box; background-color: #3367d6; border: 3px solid #3367d6; background-clip: padding-box; border-bottom-color: transparent; border-top-color: transparent; border-radius: 0; } .drag-above > .tree-content::before { top: 0; transform: translateY(-50%); } .drag-below > .tree-content::after { bottom: 0; transform: translateY(50%); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var defaults={multiple:!0,checkbox:!1,checkOnSelect:!1,autoCheckChildren:!0,parentSelect:!1,keyboardNavigation:!0,paddingLeft:24,fetchData:null,propertyNames:null,deletion:!1,dnd:!1,onFetchError:function(e){throw e}},filterDefaults={emptyText:"Nothing found!",matcher:function(e,t){return new RegExp(e,"i").test(t.text)},plainList:!1,showChildren:!0},TreeRoot={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{tree:!0,"tree-loading":e.loading,"tree--draggable":!!e.draggableNode},attrs:{role:"tree"}},[e.filter&&0==e.matches.length?[n("div",{staticClass:"tree-filter-empty"},[e._v(e._s(e.opts.filter.emptyText))])]:[n("ul",{staticClass:"tree-root",on:{dragstart:e.onDragStart}},[e.opts.filter.plainList&&e.matches.length>0?e._l(e.matches,function(t){return t.visible()?n("TreeNode",{key:t.id,attrs:{node:t,options:e.opts}}):e._e()}):e._l(e.model,function(t){return t.visible()?n("TreeNode",{key:t.id,attrs:{node:t,options:e.opts}}):e._e()})],2)],e._v(" "),e.draggableNode?n("DraggableNode",{attrs:{target:e.draggableNode}}):e._e()],2)},staticRenderFns:[],name:"Tree",components:{TreeNode:TreeNode,DraggableNode:DraggableNode},mixins:[TreeMixin,TreeDnd],provide:function(e){return{tree:null}},props:{data:{type:Array,default:function(){return[]}},options:{type:Object,default:function(e){return{}}},filter:{type:String,default:""}},data:function(){var e=Object.assign({},defaults,this.options);return e.filter=Object.assign({},filterDefaults,e.filter),{model:null,tree:null,loading:!1,opts:e,matches:[],draggableNode:null}},watch:{filter:function(e){this.tree.filter(e)}}},install=function(e){e.component(TreeRoot.name,TreeRoot)};TreeRoot.install=install,"undefined"!=typeof window&&window.Vue&&window.Vue.use(TreeRoot);export default TreeRoot;
