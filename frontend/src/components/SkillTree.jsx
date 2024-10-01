import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network/standalone';
import '../CSS Files/SkillTree.css';

const SkillsTree = () => {
    const containerRef = useRef(null);
    const [network, setNetwork] = useState(null);
  
    useEffect(() => {
      const nodes = [
        { id: 0, label: '', shape: 'circle', color: '#64748b', size: 30, font: { size: 20 } },
        { id: 1, label: 'Programming Skills', shape: 'circle', color: '#3b82f6', size: 25, hidden: true },
        { id: 2, label: 'JavaScript', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 3, label: 'Python', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 4, label: 'React', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 5, label: 'D3.js', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 6, label: 'Node.js', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 7, label: 'Technical Skills', shape: 'circle', color: '#3b82f6', size: 25, hidden: true },
        { id: 8, label: 'Networking', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 9, label: 'Databases', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 10, label: 'Soft Skills', shape: 'circle', color: '#3b82f6', size: 25, hidden: true },
        { id: 11, label: 'Communication', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
        { id: 12, label: 'Teamwork', shape: 'circle', color: '#93c5fd', size: 20, hidden: true },
      ];
  
      const edges = [
        // Root to main branches
        { id: '0-1', from: 0, to: 1, hidden: true },
        { id: '0-7', from: 0, to: 7, hidden: true },
        { id: '0-10', from: 0, to: 10, hidden: true },
        
        // Programming skills branch
        { id: '1-2', from: 1, to: 2, hidden: true },
        { id: '1-3', from: 1, to: 3, hidden: true },
        { id: '1-4', from: 1, to: 4, hidden: true },
        { id: '1-5', from: 1, to: 5, hidden: true },
        { id: '1-6', from: 1, to: 6, hidden: true },
        
        // Technical skills branch
        { id: '7-8', from: 7, to: 8, hidden: true },
        { id: '7-9', from: 7, to: 9, hidden: true },
        
        // Soft skills branch
        { id: '10-11', from: 10, to: 11, hidden: true },
        { id: '10-12', from: 10, to: 12, hidden: true },
      ];
  
      const options = {
        autoResize: true,
        nodes: {
          shape: 'dot',
          font: { color: '#ffffff' },
          borderWidth: 2,
        },
        edges: {
          width: 2,
          color: { color: '#64748b' },
        },
        layout: {
          hierarchical: {
            enabled: true,
            direction: 'UD',
            sortMethod: 'directed',
            nodeSpacing: 150,
            levelSeparation: 100,
          },
        },
        interaction: {
          hover: true,
          zoomView: false,
          dragView: false,
        },
        physics: {
          enabled: false, // Disable physics for strict control
        },
      };
  
      const networkInstance = new Network(containerRef.current, { nodes, edges }, options);
      setNetwork(networkInstance);
  
      // Reveal only the first layer (root node to its direct children)
      setTimeout(() => {
        networkInstance.clustering.updateEdge('0-1', { hidden: false });
        networkInstance.clustering.updateEdge('0-7', { hidden: false });
        networkInstance.clustering.updateEdge('0-10', { hidden: false });
  
        networkInstance.body.data.nodes.update({ id: 1, hidden: false });
        networkInstance.body.data.nodes.update({ id: 7, hidden: false });
        networkInstance.body.data.nodes.update({ id: 10, hidden: false });
      }, 100);
  
      networkInstance.redraw();
    }, []);
  
    // Function to reveal next nodes upon clicking
    const revealNodes = (clickedNodeId) => {
      // Get all edges connected to the clicked node
      const connectedEdges = network.body.data.edges.get({
        filter: (edge) => edge.from === clickedNodeId && edge.hidden,
      });
  
      connectedEdges.forEach((edge) => {
        // Reveal the edge
        network.clustering.updateEdge(edge.id, { hidden: false });
  
        // Reveal the target node
        network.body.data.nodes.update({ id: edge.to, hidden: false });
      });
  
      network.redraw();
    };
  
    // Set up the click event listener to reveal nodes step by step
    useEffect(() => {
      if (network) {
        network.on('click', (params) => {
          if (params.nodes.length > 0) {
            const clickedNode = params.nodes[0];
            revealNodes(clickedNode);
          }
        });
      }
    }, [network]);
  
    return (
      <div className="skills-container">
        <div ref={containerRef} className="skills-network" />
      </div>
    );
  };
  
  export default SkillsTree;