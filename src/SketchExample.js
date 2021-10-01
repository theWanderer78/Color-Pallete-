"use strict";
// A project by Priyank Deep Singh
import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import html2canvas from "html2canvas";
import RenderAsImage from "react-render-as-image";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import $ from "jquery";

class Color extends React.Component {
  render() {
    let style = {
      backgroundColor: this.props.hexCode
    };
    return (
      <div
        className="color"
        onClick={this.props.update.bind(this, this.props.index)}
        style={style}
      >
        <p className="color__code">{this.props.hexCode}</p>
      </div>
    );
  }
}

class SketchExample extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      displayColorPicker: false,
      displayColorPicker2: false,
      color: {
        r: "241",
        g: "112",
        b: "19",
        a: "1"
      },

      color2: {
        r: "221",
        g: "144",
        b: "25",
        a: "1"
      },
      colorsNum: 5,
      colors: []
    };
    for (let i = 0; i < this.state.colorsNum; i += 1) {
      this.state.colors.push({ hexCode: this.generateColor() });
    }
  }

  generateColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }

  updateColor(index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors: colors
    });
  }
  // state = {

  // };

  componentDidMount() {}

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClick2 = () => {
    this.setState({ displayColorPicker2: !this.state.displayColorPicker2 });
  };

  capture2 = () => {
    console.log("hi");
    // var node = document.getElementById('capture');
    // node.innerHTML = "I'm an image now."

    domtoimage
      .toBlob(document.getElementById("capture2"))
      .then(function (blob) {
        var a = document.createElement("capture2");
        document.body.appendChild(a);
        a.style = "height:200px";
        window.saveAs(blob, "color-palette.png");
      });
  };
  capture = () => {
    console.log("hi");
    // var node = document.getElementById('capture');
    // node.innerHTML = "I'm an image now."

    domtoimage.toBlob(document.getElementById("capture")).then(function (blob) {
      var a = document.createElement("capture");
      document.body.appendChild(a);
      a.style = "height:200px";
      window.saveAs(blob, "color-palette.png");
    });
    // domToImage.toBlob(document.getElementById("#capture")).then(function (blob) {
    //   saveBlobAsFile(blob, "XX.png");
    // });
    // // this function is to convert blob to base64 img
    // function saveBlobAsFile(blob, fileName) {
    //   var reader = new FileReader();
    //   reader.onloadend = function () {
    //     var base64 = reader.result;
    //     var img = document.createElement("img");
    //     img.classList.add("me-img");
    //     img.setAttribute("src", base64);
    //     // insert the img to dom
    //     document.getElementById("bar").appendChild(img);
    //   };
    //   reader.readAsDataURL(blob);
    // }
    // var node = document.getElementById('capture');
    // var btn = document.getElementById('foo');

    // btn.onClick = function() {
    // node.innerHTML = "I'm an image now."
    //   domtoimage.toBlob(document.getElementById('capture'))
    //     .then(function(blob) {
    //       window.saveAs(blob, 'capture.png');
    //     });
    // }

    // html2canvas(document.querySelector("#capture")).then((canvas) => {
    //   // document.body.appendChild(canvas)
    //   var img = canvas.toDataURL("image/png");
    //   document.write('<img src="' + img + '"/>');
    // });

    // console.log("hi")
    // $("#save_image_locally").click(function () {
    //   html2canvas($("#capture"), {
    //     onrendered: function (canvas) {
    //       var a = document.createElement("a");
    //       // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
    //       a.href = canvas
    //         .toDataURL("image/jpeg")
    //         .replace("image/jpeg", "image/octet-stream");
    //       a.download = "somefilename.jpg";
    //       a.click();
    //     }
    //   });
    // });

    //     var node = document.getElementById('capture');

    // domtoimage.toPng(node)
    //     .then(function (dataUrl) {
    //         var img = new Image();
    //         img.src = dataUrl;
    //         document.body.appendChild(img);
    //     })
    //     .catch(function (error) {
    //         console.error('oops, something went wrong!', error);
    //     });

    // domtoimage.toBlob(document.getElementById('capture'))
    // .then(function (blob) {
    //     window.saveAs(blob, 'my-node.png');
    // });

    // domtoimage.toJpeg(document.getElementById('#capture'), { quality: 0.95 })
    // .then(function (dataUrl) {
    //     var link = document.createElement('#capture');
    //     link.download = 'my-image-name.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    // });

    // let btnDownload = document.querySelector('button');
    // let img = document.querySelector('img');

    // // Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
    // btnDownload.addEventListener('click', () => {
    //     let imagePath = img.getAttribute('src');
    //     let fileName = getFileName(imagePath);
    //     saveAs(imagePath, fileName);
    // });

    // function getFileName(str) {
    //     return str.substring(str.lastIndexOf('/') + 1)
    // }
  };

  colorChange = (color) => {
    this.setState({ show: true });
    console.log(this.state.color);
    console.log(this.state.color2);
    const abc = { ...this.state.color };
    const abc2 = { ...this.state.color2 };
    console.log("Color 1", abc);
    console.log("Color 2", abc2);

    // const abc = this.setState({ color: color.rgb });
    // this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
    this.setState({ displayColorPicker2: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };
  handleChange2 = (color) => {
    this.setState({ color2: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "100px",
          height: "100px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
        },
        color2: {
          width: "100px",
          height: "100px",
          borderRadius: "2px",
          background: `rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a})`
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
          #aaa
        </div>

        <div style={styles.swatch} onClick={this.handleClick2}>
          <div style={styles.color2} />
          #bbb
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : this.state.displayColorPicker2 ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color2}
              onChange={this.handleChange2}
            />
          </div>
        ) : null}

        <div>
          <button id="save_image_locally" onClick={this.colorChange}>
            Create Palette
          </button>
        </div>
        <br />
        <br />
        {this.state.show && (
          <div style={styles.swatch}>
            <div id="capture" onClick={this.capture2}>
              <div
                style={{
                  height: "50px",
                  width: "100px",
                  background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
                }}
              ></div>
              <div
                style={{
                  height: "50px",
                  width: "100px",
                  background: `rgba(${this.state.color2.r}, ${this.state.color2.g}, ${this.state.color2.b}, ${this.state.color2.a})`
                }}
              ></div>
            </div>
            <button onClick={this.capture} id="foo">
              download img
            </button>
          </div>
        )}

        <div>
          <div id="capture2" className="color-container">
            {this.state.colors.map((color, index) => (
              <Color
                key={`color-${index}`}
                index={index}
                update={this.updateColor.bind(this)}
                hexCode={color.hexCode}
              ></Color>
            ))}
          </div>
          <button onClick={this.capture2}>download img</button>
        </div>
      </div>
    );
  }
}

export default SketchExample;
