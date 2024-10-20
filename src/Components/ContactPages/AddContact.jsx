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
    const id = e.target.elements.contactId.value.trim();

    let response = undefined;
    this.props.isUpdating == false
      ? (response = this.props.handleAddContact({
          name: name,
          email: email,
          phone: phone,
        }))
      : (response = this.props.handleAddUpdateContact({
          id: id,
          name: name,
          email: email,
          phone: phone,
        }));

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
            <div className="col-12 text-white-50">
              {this.props.isUpdating == false
                ? "Add a new Contact"
                : "Update Contact"}
            </div>
            <input
              hidden
              name="contactId"
              defaultValue={
                this.props.isUpdating == false ? "" : this.props.selected.id
              }
            ></input>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Name..."
                className="form-control form-control-sm"
                name="contactName"
                defaultValue={
                  this.props.isUpdating == false ? "" : this.props.selected.name
                }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Email..."
                className="form-control form-control-sm"
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating == false
                    ? ""
                    : this.props.selected.email
                }
              ></input>
            </div>
            <div className="col-12 col-md-4 p-1">
              <input
                placeholder="Phone..."
                className="form-control form-control-sm"
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating == false
                    ? ""
                    : this.props.selected.phone
                }
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
            <div className="text-center">
              {this.props.isUpdating == false ? (
                <button className="btn btn-primary btn-sm col-6">Create</button>
              ) : (
                <div className="col-12">
                  <button className="btn btn-primary btn-sm col-5 m-1">
                    Update
                  </button>

                  <button
                    className="btn btn-primary btn-sm col-5 m-1"
                    onClick={() => this.props.handleCancelUpdateContact()}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
