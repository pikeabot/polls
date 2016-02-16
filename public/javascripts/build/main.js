const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


var Login = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },
  openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  render: function() {
    if (this.state.modalIsOpen) {
      return (
        React.createElement("div", null, 
          React.createElement("Modal", {
            isOpen: this.state.modalIsOpen, 
            onRequestClose: this.closeModal, 
            style: customStyles}, 

            React.createElement("form", {method: "post", action: "login"}, 
                React.createElement("div", null, 
                  React.createElement("h3", null, "Login information"), 
                  React.createElement("label", {for: "username", class: "ui-hidden-accessible"}, "Username:"), 
                  React.createElement("input", {type: "text", name: "user", id: "username", placeholder: "Username"}), 
                  React.createElement("label", {for: "password", class: "ui-hidden-accessible"}, "Password:"), 
                  React.createElement("input", {type: "password", name: "password", id: "pswd", placeholder: "Password"}), 
                  React.createElement("label", {for: "log"}, "Keep me logged in"), 
                  React.createElement("input", {type: "checkbox", name: "login", id: "log", value: "1", "data-mini": "true"}), 
                  React.createElement("input", {type: "submit", "data-inline": "true", value: "Log in"})
                )
              ), 
            React.createElement("button", {onClick: this.closeModal}, "close")

          )
        )
      );
    }
    else {
      return (
        React.createElement("a", {onClick: this.openModal}, " Login")
      );
    }
  }
});
 
ReactDOM.render(
  React.createElement(Login, null),
  document.getElementById('login')
  );