import React from "react";
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined,
      successMessage: undefined,
    };
  }
  handleAddContactFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();

    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (response.status == "success") {
      this.setState(() => {
        return {
          errorMessage: undefined,
          successMessage: response.msg,
        };
      });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState(() => {
        return {
          errorMessage: response.msg,
          successMessage: undefined,
        };
      });
    }
  };

  render() {
    return (
      <div className=" border col-12 text-white p-2">
        <form
          onSubmit={this.handleAddContactFormSubmit}
          className="contact-form"
        >
          <div className="row p-2">
            <div className="col-12 text-white-50">Add a new Contact</div>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Name..."
                className="form-control form-control-sm"
                name="contactName"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Email..."
                className="form-control form-control-sm"
                name="contactEmail"
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Phone..."
                className="form-control form-control-sm"
                name="contactPhone"
              ></input>
            </div>
            {this.state.errorMessage == undefined ? (
              <div></div>
            ) : (
              <div className="text-success text-center col-12">
                {this.state.errorMessage}
              </div>
            )}
            {this.state.successMessage == undefined ? (
              <div></div>
            ) : (
              <div className="text-danger text-center col-12">
                {this.state.successMessage}
              </div>
            )}
            <div className="col-12 col-md-6 offset-md-3 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
