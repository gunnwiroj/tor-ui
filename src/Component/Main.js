import React,{Component} from 'react'
import PrintContent from './PrintContent'
import ReactToPrint from 'react-to-print';
const mockdata = require('../mockupData/data')

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }
  
  componentDidMount = () => {
    this.setState({data:mockdata['Data']})
  }
  
  render(){
    
    return(
      <div style={{height:'100vh'}}>
        {/* Start Navbar */}
        <div style={{height:'10vh', backgroundColor:'#dfaea9', justifyContent:'center', alignItems:'center', display:'flex'}}>
          <p style={{textAlign:'center', verticalAlign:'center', color:'#fff'}}>Chulalongkorn University</p>
        </div>
        {/* End Navbar */}
        <div className="row">
          <div className="col-md-6">
            <p style={{textAlign:'right'}}>Name - Surname : Kuy Tor</p>
          </div>
          <div className="col-md-6">
            <p>Student Id : 55555555</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p style={{textAlign:'right'}}>Faculty : Science</p>
          </div>
          <div className="col-md-3">
            <p>Major : Computer Science</p>
          </div>
          <div>
            <ReactToPrint
              trigger={() => <button className="btn btn-info" style={{borderRadius:15}}>Request Transcript</button>}
              content={() => this.printComponent}
            />
            
            </div>
        </div>
        <div className='row'>
        {
          this.state.data.map((year,id) => {
            return(
              <div className="col-md-3 offset-md-2" style={{backgroundColor:'#fff'}}key={id}>
                <h4 style={{textAlign:'center'}}>{year.year}</h4>
                {
                  year.semaster.map((semaster,id) => {
                    let semaster_text = ''
                    switch(id){
                      case 0:
                        semaster_text = '1st Semaster'
                        break;
                      case 1:
                        semaster_text = '2nd Semaster'
                        break;
                      case 2:
                        semaster_text = 'Summer Session'
                    }
                    return(
                      <div>
                        <h6 key={id} style={{textAlign:'center'}}>{semaster_text}</h6>
                        <table className='table table-sm' style={{fontSize:10,textAlign:'center'}}>
                          <thead>
                            <tr>
                              <th scope='col'>Course No</th>
                              <th scope='col'>Course Name</th>
                              <th scope='col'>Credit</th>
                              <th scope='col'>Grade</th>
                            </tr>
                          </thead>
                        {
                          semaster.enroll.map((subject,id) => {
                            return(
                             <tr key={id}>
                               <td style={{textAlign:'left', paddingLeft:10}}>{subject.courseId}</td>
                               <td style={{textAlign:'left', paddingLeft:10}}>{subject.courseName}</td>
                               <td>{subject.credit+".0"}</td>
                               <td>{subject.grade}</td>
                             </tr>
                            )
                          })
                        }
                        </table>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
        </div>
        <div style={{display:'none'}}>
          <PrintContent ref={el => (this.printComponent = el)}/>
        </div>
      </div>
    )
  }
}

export default Main;