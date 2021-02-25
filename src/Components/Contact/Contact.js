
import React from "react";



const defaultState = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: ""
};

class Form extends React.Component {
  state = defaultState;

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      //T operator
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  //  set up to make sure requirements are met in form and set up the error message
  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "Name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email. Must contain @";
    }

    if (!this.state.message) {
      messageError = "Message required";
    }

    if (nameError || emailError || messageError) {
      this.setState({ nameError, emailError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      
      //will allow form to cler
    // this.setState(defaultState);
    } else {
      event.preventDefault();
    }
  };
  render() {
    return (
      <main className="rek">
        <section id="contact-form" className="py-3">
          <div className="container">
            <h1 className="l-heading">Contact Us</h1>
            <form onSubmit={this.handleSubmit} action="https://formsubmit.co/thompsontyerek5@gmail.com" method="POST">
            <div class="home-logo">
          <img src="./imgs/bon-logo.png" alt="webiste logo"/>
 </div>
              <div className="form-group">
                <label for="name">Name</label>
                <div className="validate">{this.state.nameError}</div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <div className="validate">{this.state.emailError}</div>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="validate" style={{ color: "#e4428e", width: "50%" }}>{this.state.messageError}</div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  placeholder=" would love to hear your feedback!"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      


    );
  }
}


export default Form;
