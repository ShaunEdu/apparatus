'use strict'

module.exports = function nodeInfo (edge) {
  const containerNode = document.getElementById('container-node-id')
  const containerNodeInfo = document.getElementById('container-node-info-id')

  let nodeInfo = ''
  const nodeData = edge.data().info
  Object.keys(nodeData).map(i => {
    // adds the keys of the object to the string
    if (nodeData.hasOwnProperty(i)) {
      nodeInfo = `${nodeInfo} • ${i}:`
    }
    // adds the values of the object to the string
    nodeInfo = `${nodeInfo} ${nodeData[i]}\n`
  })
  // appends info to the div
  containerNode.style.display = 'block'
  containerNodeInfo.textContent = nodeInfo
}
