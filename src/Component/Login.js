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
      <div className="col-md-12" style={{height:'100vh', }}>
        <div className='col-md-2 offset-md-5' style={{justifyContent:'center', marginTop:10}}>
          <img src='https://yt3.ggpht.com/a/AGF-l79KhH56kPFNZTcEsTL92FvHEcLlQtUIVaFvRQ=s900-mo-c-c0xffffffff-rj-k-no' style={{width:'20vh'}}/>
        </div>
        <div className="col-md-4 offset-md-4" style={{backgroundColor:'#e5e5e5', borderRadius:2}}>
          <div>
            <h6 style={{textAlign:'center', paddingTop:25}}>Login</h6>
          </div>
          <div className="form-group">
            <p style={{textAlign:'left'}}>Email</p>
            <input className="form-control" onChange={(e) => this.setState({username:e.target.value})}/>
          </div>
          <div className='form-group'>
            <p style={{textAlign:'left'}}>Password</p>
            <input className="form-control" type="password" onChange={(e) => this.setState({password:e.target.value})}/>
          </div>
          <div style={{paddingTop:0,paddingBottom:20}}>
            <button className="col-md-12 btn" style={{backgroundColor:'#fe3573'}} onClick={this._handleLogin}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;