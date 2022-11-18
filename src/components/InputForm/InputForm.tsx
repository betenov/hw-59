import React, {Component} from 'react';
import './InputForm.css'
import {MovieBlog} from "../../types";

interface State {
 movie:string;
 id:string;
}

class InputForm extends Component<{} , State> {
  state = {
    movie:'',
    id:''
  }


  onChange = (event:React.ChangeEvent<HTMLInputElement>) => {


    this.setState({movie:event.target.value})
  }

   onSubmit = (event:React.FormEvent) => {
    event.preventDefault();
     this.setState(prev=> ({
       ...prev,
       movie:prev.movie , id:Math.random().toString()
     }))
console.log(this.state)
  }

  render() {

    return (
      <div>
         <form onSubmit={this.onSubmit}>
           <input className="input-add" type="text" value={this.state.movie} onChange={(e)  => this.onChange(e)}  />
           <button className="btn-add" type="submit" >Add</button>
         </form>
        <div>
        </div>
      </div>
    );
  }
}

export default InputForm;