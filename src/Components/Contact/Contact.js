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
    );
  }
}

export default Contact;
