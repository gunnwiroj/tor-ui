import React, { Component } from 'react';
const mockdata = require('../../src/mockupData/data')
class PrintContent extends Component {

  constructor(props){
    super(props);
    this.state = {
      data:[]
    }
  }

  componentDidMount = () => {
    // console.log(mockdata['Data'])
    this.setState({data:mockdata['Data']})
  }
  render() {
    return (
    <div style={{fontSize:13, marginLeft:30, marginTop:20, marginRight:30}}>
      <div style={{display:'flex', flexDirection:'row', flex:1}}>
        <div style={{display:'flex'}}>
          <p>
            ddddsdfsdf
          </p>
        </div>
        <div style={{display:'flex', paddingLeft:10}}>
          <p>
            ddddsdfsdf
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default PrintContent;

{/* <div style={{fontSize:13}}>
        <div className='col-md-12 row' style={{ marginTop: 25 }}>
          <div className="col-md-2">
            <img src='http://www.cusc.chula.ac.th/wordpress/wp-content/uploads/2014/06/Logo-chula-678x1024.jpg' style={{ width: '80%', marginTop:8}} />
          </div>
          <div className="col-md-10" style={{ textAlign: 'left' }}>
            <div className="row">
              <div className="col-md-6">
                <p>Name : Kuy Tor</p>
              </div>
              <div className='col-md-3'>
                <p>Gender : Male</p>
              </div>
              <div className="col-md-3">
                <p>Student ID : 5555555</p>
              </div>
            </div>
            <div className="col-md-6 row" style={{ marginTop: 1 }}>
              <p>Birthdate : 01 January 1996</p>
            </div>
            <div className="row" style={{ marginTop: 1 }}>
              <div className="col-md-2">
                <p>FACULTY</p>
              </div>
              <div className="col-md-4">
                <p>Science</p>
              </div>
            </div>
            <div className="row" style={{ marginTop: 1 }}>
              <div className="col-md-2">
                <p>Department</p>
              </div>
              <div className="col-md-4">
                <p>Mathematics And Computer Science</p>
              </div>
            </div>
            <div className="row" style={{ marginTop: 1 }}>
              <div className="col-md-2">
                <p>Field Of Study</p>
              </div>
              <div className="col-md-4">
                <p>Computer Science</p>
              </div>
            </div>
            <p style={{fontWeight:'bold'}}>CHULALONGKORN UNIVERSITY</p>
          </div>
        </div>
        {/* table */}
      //   <div className="col-md-6">
      //     <table className="table table-bordered table-sm" style={{textAlign:'center',fontSize:10}}>
      //       <thead>
      //         <tr>
      //           <td scope='col'>COURSE NO.</td>
      //           <td scope="col">NAME</td>
      //           <td scope='col'>CREDIT</td>
      //           <td scope='col'>GRADE</td>
      //         </tr>
      //       </thead>
      //       {
      //         this.state.data.map((year,id) => {
      //           return(
      //             <tr>
      //               <td colSpan={4}>{year.year}</td>
      //             </tr>
      //         )
      //           year.semaster.map((subject,id) => {
      //             console.log(id)
      //             let semaster_text = ''
      //             switch(id){
      //               case 0:
      //                 semaster_text = '1st Semaster'
      //                 break;
      //               case 1:
      //                 semaster_text = '2nd Semaster'
      //                 break;
      //               case 2:
      //                 semaster_text = 'Summer Session'
      //                 break;
      //             }
                  
      //           })
      //         })
      //       }
      //     </table>
      //   </div>
      // </div> */}