import React from "react";
/*a context default value is set to 'english'*/
const Context = React.createContext("english");

/*{this.props.children} represents whatever Component wraps. In the following 
example whatever is wrapped by LanguageStore would get an access to a Context
Mind any Component is created must be announced with a capital letter!*/
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => this.setState({ language });

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
