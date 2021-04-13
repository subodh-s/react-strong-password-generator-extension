import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import logo from './assets/img/copy.png';

class Extension extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: null,
      isHidden:true
    };
  }
  render() {  
    return(
    <div>
      <button className="btn btn-primary" onClick={() => this.setState({pwd: generatePassword(12),isHidden: false})}> Click to generate secure Password </button>
      <div class={this.state.isHidden ? 'pwdbox hide' : 'pwdbox' }>
        <p className="pwd" id="pwdBox">{this.state.pwd ? this.state.pwd : 'Click' }</p><img src={logo} alt="Copy to clipboard" onClick={() => selectText('pwdBox')}/><span>(Copy to clipboard)</span>
        </div>
    </div>
    );
  }
}


function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
  } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
  } else {
      console.warn("Could not select text in node: Unsupported browser.");
  }
}


function generatePassword(length){
  var pass = '';
  var finalPass='';

  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
          'abcdefghijklmnopqrstuvwxyz';
  var specialstr='@#$';
  var numbers='0123456789';
    
  for (let i = 1; i <= length*3; i++) {
      let rndm_idx = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(rndm_idx)

      rndm_idx = Math.floor(Math.random()
                  * specialstr.length + 1);

      pass += specialstr.charAt(rndm_idx)

      rndm_idx = Math.floor(Math.random()
                  * numbers.length + 1);
      
      pass += numbers.charAt(rndm_idx)      
  }

  for (let i = 1; i <= length; i++){

    let rndm_idx = Math.floor(Math.random()
                  * pass.length + 1);

    finalPass += pass.charAt(rndm_idx)   

  } 

  return finalPass;
}



// ========================================

ReactDOM.render(
  <Extension />,
  document.getElementById('root')
);
