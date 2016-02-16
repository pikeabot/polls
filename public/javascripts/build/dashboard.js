var changeToRepPollLink = React.createClass({
  getInitialState: function() {
    return {showRepPoll: false};
  },
	onClick : function() {
       this.setState({ showRepPoll : true} );
    },
  render: function() {
  	if(this.state.showRepPoll) { 
	    return (
        ReactDOM.render(
          React.createElement("div", {id: "rep-poll"}, 
          React.createElement("h3", null, "Who do you think will get the Republican nomination?"), 
            React.createElement("form", {action: "/users/vote/Rep", method: "post"}, 
              React.createElement("div", {class: "radio"}, 
                React.createElement("input", {type: "radio", name: "candidate", id: "optionsTrump", value: "Trump"}), 
                  React.createElement("label", null, "Trump")
              ), 
              React.createElement("div", {class: "radio"}, 
                React.createElement("input", {type: "radio", name: "candidate", id: "optionsCruz", value: "Cruz"}), 
                  React.createElement("label", null, "Cruz")
              )
            )
          ),
          document.getElementById('poll')
        )
        )
		}
		else { 
      return (
      	React.createElement("a", {onClick: this.onClick}, " Republican ")
      	);
     } 
  	}
	});



var RepPollLink = React.createClass({
  render: function() {
    React.createElement("div", {id: "rep-poll"}, 
    React.createElement("h3", null, "Who do you think will get the Republican nomination?"), 
      React.createElement("form", {action: "/users/vote/Rep", method: "post"}, 
        React.createElement("div", {class: "radio"}, 
          React.createElement("input", {type: "radio", name: "candidate", id: "optionsTrump", value: "Trump"}), 
            React.createElement("label", null, "Trump")
        ), 
        React.createElement("div", {class: "radio"}, 
          React.createElement("input", {type: "radio", name: "candidate", id: "optionsCruz", value: "Cruz"}), 
            React.createElement("label", null, "Cruz")
        )
      )
    )
  }
});

ReactDOM.render(
  React.createElement(changeToRepPollLink, null),
  document.getElementById('rep-poll-link')
);