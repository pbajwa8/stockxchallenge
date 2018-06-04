import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Shoe extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      capacity: "empty",
      brand: "",
      style: "",
      size: "",
      upcid: "",
      showEmpty: true,
      showForm: false,
      showOpts: false,
      showInfo: false,
    };

  }

  // displays options when user clicks a container
  handleClick() {
    this.setState({
      showOpts: true,
      showEmpty: false,
      showInfo: false,
      showForm: false
    });
  }

  // displays form to add shoe
  add() {
    this.setState({
      showForm: true,
      showOpts: false,
      showEmpty: false,
      showInfo: false,
      capacity: "empty",
      brand: "",
      style: "",
      size: "",
      upcid: ""
    });
  }

  // deletes shoe, sets state back to empty
  remove() {
    this.setState({
      showEmpty: true,
      showOpts: false,
      showForm: false,
      showInfo: false,
      capacity: "empty",
      brand: "",
      style: "",
      size: "",
      upcid: ""
    });
  }

  // if the container is not empty, shows form to edit shoe
  edit() {
    if (this.state.capacity === "empty") {
      this.setState({
        showEmpty: true,
        showOpts: false,
        showForm: false,
        showInfo: false,
        capacity: "empty",
        brand: "",
        style: "",
        size: "",
        upcid: ""
      });
    } else {
      this.setState({
        showForm: true,
        showOpts: false,
        showEmpty: false,
        showInfo: false
      });
    }
  }

  // handles state of shoe info as form is being filled in
  handleInput(event) {

    this.setState({
      [event.target.name]: event.target.value
    });

  }

  // if the user has not entered an empty shoe, displays the shoes info in that container
  handleSubmit() {
    if (this.state.brand === "" && this.state.style === "" && this.state.size === "" && this.state.upcid === "") {
      this.setState({
        showEmpty: true,
        showOpts: false,
        showForm: false,
        showInfo: false,
        capacity: "empty",
        brand: "",
        style: "",
        size: "",
        upcid: ""
      });
    } else {
      this.setState({
        capacity: "full",
        showInfo: true,
        showForm: false,
        showOpts: false,
        showEmpty: false
      });
    }
  }



render() {

    var displayEmpty; var displayOpts; var displayForm; var displayInfo;

    // says container is empty, provides options upon click
    if (this.state.showEmpty === true) {
      displayEmpty = <div class="empty" onClick={() => this.handleClick()}>
                        <p>{this.state.capacity}</p>
                      </div>;
    }

    // displays the user options to add, edit, remove
    if (this.state.showOpts === true) {
      displayOpts = <div class="buttons">
                        <button type="button" onClick={() => this.add()}>Add</button>
                        <button type="button" onClick={() => this.edit()}>Edit</button>
                        <button type="button" onClick={() => this.remove()}>Remove</button>
                    </div>;
    }

    // displays the form to edit or add a shoe
    if (this.state.showForm === true) {
      displayForm = <form>
                      <label>Brand:<input name ="brand" value={this.state.brand} type="text" onChange={this.handleInput} /></label><br />
                      <label>Style:<input name ="style" value={this.state.style} type="text" onChange={this.handleInput} /></label><br />
                      <label>Size:<input name ="size" value={this.state.size} type="text" onChange={this.handleInput} /></label><br />
                      <label>UPC ID:<input name ="upcid" value={this.state.upcid} type="text" onChange={this.handleInput} /></label><br />
                      <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
                    </form>;
    }

    // simply shows the shoes info
    if (this.state.showInfo === true) {
      displayInfo = <div class="fields" onClick={() => this.handleClick()}>
                        <p>Brand: {this.state.brand}</p>
                        <p>Style: {this.state.style}</p>
                        <p>Size: {this.state.size}</p>
                        <p>UPC ID: {this.state.upcid}</p>
                    </div>;
    }

    return (
      <div class="shoe">
          {displayEmpty}
          {displayOpts}
          {displayForm}
          {displayInfo}
      </div>
    );
  }
}

class Stock extends React.Component {

  renderShoe() {
    return <Shoe />;
  }

  render() {
  	
    return (
      <div>
        <div class="title">StockX Shoe Gallery</div>
        <div class="stock">
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
          {this.renderShoe()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stock />,
  document.getElementById('root')
);
