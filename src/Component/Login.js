import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    }
  }
  _handleLogin = (e) => {
    console.log(this.state.password)
    if( this.state.username === 'tontor69@mail.com' && this.state.password === 'password'){
      console.log('here')
      this.props.history.push('/Main')
    }
  }
  render(){
    return(
      <div className="col-md-12" style={{height:'100vh', backgroundColor:'#dfaea9'}}>
        <h4 style={{textAlign:'center'}}>Kuy TOR</h4>
        <div className="col-md-4 offset-md-4" style={{backgroundColor:'#fefefe', borderRadius:2}}>
          <div>
            <p style={{justifyContent:'center'}}>Login</p>
          </div>
          <div>
            <p style={{textAlign:'left'}}>Email</p>
            <input className="form-control" onChange={(e) => this.setState({username:e.target.value})}/>
          </div>
          <div>
            <p style={{textAlign:'left'}}>Password</p>
            <input className="form-control" type="password" onChange={(e) => this.setState({password:e.target.value})}/>
          </div>
          <div style={{paddingTop:40,paddingBottom:20}}>
            <button className="col-md-12 btn" style={{backgroundColor:'#fe3573'}} onClick={this._handleLogin}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;