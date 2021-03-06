'use strict'

const cytoscape = require('cytoscape')
const graphStyle = require('../../config/graphStyle.js')

module.exports = function cyOptions (cy, file) {
  let model = require(file)
  cy.out = cytoscape({
    container: document.getElementById('graph-container'),
    autounselectify: true,
    elements: model.elements, // loads the elements object of the graph
    style: graphStyle.style,
    zoom: 1,
    wheelSensitivity: 0.1,
    minZoom: 0.1,
    maxZoom: 5,
    pan: { x: 800, y: 400 }

  })
  // graph layout
  const layout = cy.out.layout({
    name: 'breadthfirst'
  })
  layout.run()
}
