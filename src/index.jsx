import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import logo from './assets/img/copy.png';

class Extension extends React.Component {
  render() {  
    return(
    <div>
      <BlueButton/>
      <PasswordDisplay/>
    </div>
    );
  }
}

class PasswordDisplay extends React.Component{
  render(){
    return (
      <div class="pwdbox">
        <p className="pwd">{generatePassword(12)}</p><img src={logo} alt="Copy to clipboard" onClick={() => alert('click')}/>
        </div>
    )
  }
}

class BlueButton extends React.Component{
  render(){
    return (
      <button className="btn btn-primary"> Generate secure password </button>
    );
  }
}

function copy() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
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
