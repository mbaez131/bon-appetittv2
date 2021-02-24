<<<<<<< HEAD
import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contactbox">
          <div>
            <h2>Connect</h2>
            <p>
              {/* I am always looking for an opportunity to collaborate and have
              open-minded talks about technology, code, or music. I can also
              share my experience, or discuss any sort of potential venture
              where I could bring my technical expertise to the table. Business
              or individual. Please feel free to reach out! */}
            </p>
          </div>
          <div className="row">
            <div className="column2">
              {/* <img src={} width="500" height="400" /> */}
            </div>

            <div className="column1">
              <form
                method="post"
                noValidate
                name="myForm"
                onSubmit={this.validateForm}
              >
                <label for="fname">First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name.."
                />
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder=" Your last name.."
                />
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email.."
                />
                {/* <label for="phone">Your phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                /> */}

                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Your message.."
                  // style="height:170px"
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </>
=======
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
      <div>
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
      </div>
>>>>>>> f0f3713f9de6005ed5801cd1dd90815b9f032878
    );
  }
}

<<<<<<< HEAD
export default Contact;
=======
export default Form;
>>>>>>> f0f3713f9de6005ed5801cd1dd90815b9f032878
