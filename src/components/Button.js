import React from "react";
import LanguageContext from "../contexts/LanguageContext.js";
import ColorContext from "../contexts/ColorContext";

/*contextType and this.context variables are key words for the context system
Whatever value we pass into .Provider <contextNameFile.Consumer> returns the
value in a function. It's another way to get the value of a context object
MIND that this.context object would only work with a single context object
whereas <contextNameFile.Consumer> could work with multiple*/
class Button extends React.Component {
  //static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton = (color) => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    //const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
