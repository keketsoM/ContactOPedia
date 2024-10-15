import React from "react";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import AddContact from "./AddContact";
import AddRandomComponent from "./AddRandomComponent";
import FavouriteContact from "./FavoriteContacts";
import GeneralContact from "./GeneralContacts";
import RemoveAllContact from "./RemoveAllContact";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "ben@dotnetmastery",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Kathy Patrick",
          phone: "111-222-0000",
          email: "kathy@dotnetmastery.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Paul Show",
          phone: "999-222-111",
          email: "paul@dotnetmastery.com",
          isFavorite: true,
        },
      ],
    };
  }
  handleAddContact = (newContact) => {
    if (newContact.name == "") {
      return { status: "failure", msg: "Please enter a valid name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please enter a vaild phone number" };
    }

    const duplicateRecord = this.state.contactList.filter((u) => {
      if (u.name == newContact.name && u.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };
  handleToggleFavorite = (Contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == Contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          }
          return obj;
        }),
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomComponent />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className=" row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className=" row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContact
                  contact={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                  favoriteClick={this.handleToggleFavorite}
                />
              </div>
            </div>
            <div className=" row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContact
                  contact={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                  favoriteClick={this.handleToggleFavorite}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
