import React, { Component } from "react";

class Confirmation extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.getElementsByClassName("path-outer")[0].style.display = "block";
      document.getElementsByClassName("loader-img")[0].style.display = "none";
    }, 2000);
  }
  xNodesCount = 0;
  yNodesCount = 0;

  elbow = d => {
    return (
      "M" + d.source.x + "," + d.source.y + "H" + d.target.x + "V" + d.target.y
    );
  };

  updateTree = (root, tree, svg, i, diagonal) => {
    // Compute the new tree layout
    const nodes = tree.nodes(root).reverse();
    const links = tree.links(nodes);

    // Normalize for fixed-depth
    nodes.forEach(function(d) {
      d.y = d.depth * 150;
    });

    // Declare the nodes…
    const node = svg.selectAll("g.node").data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

    // Enter the nodes
    const nodeEnter = node
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    nodeEnter
      .append("image")
      .attr("xlink:href", function(d) {
        return d.icon;
      })
      .attr("x", "-12px")
      .attr("y", "-12px")
      .attr("width", "24px")
      .attr("height", "24px");

    nodeEnter
      .append("text")
      .attr("y", function(d) {
        return -18;
      })
      .attr("dy", "5.2em")
      .attr("text-anchor", "middle")
      .text(function(d) {
        return d.name;
      })
      .style("fill-opacity", 1);

    // Declare the links
    const link = svg.selectAll("path.link").data(links, function(d) {
      return d.target.id;
    });

    // Enter the links
    link
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      // .attr("d", this.elbow);
      .attr("d", diagonal);
  };

  calcNodesCount = answerResult => {
    for (var j = 0; j < answerResult.length; j++) {
      this.yNodesCount = this.yNodesCount + 1;
      if (answerResult.length > this.xNodesCount) {
        this.xNodesCount = answerResult.length;
      }
      if (answerResult[j].select === true) {
        if (typeof answerResult[j].children !== "undefined") {
          this.calcNodesCount(answerResult[j].children);
        }
        break;
      }
    }
  };

  render() {
    let answerResult = JSON.parse(localStorage["answerArr"]);

    this.calcNodesCount(answerResult);
    const width = this.xNodesCount * 100 + 440;
    const height = (this.yNodesCount - this.xNodesCount) * 100 + 620;
    const i = 0;
    const tree = window.d3.layout.tree().size([950, 950]);
    const diagonal = window.d3.svg.diagonal().projection(function(d) {
      return [d.x, d.y];
    });
    const svg = window.d3
      .select("div#ds-root")
      .attr("class", "ds-root-outer")
      .html("<img src='/images/loader.gif' class='loader-img'>")
      .append("div")
      .attr("class", "path-outer")
      .append("div")
      .html("<span class='title'>Your Learning Path</span>")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    const root = answerResult[0];
    this.updateTree(root, tree, svg, i, diagonal);

    return <div />;
  }
}

export default Confirmation;
