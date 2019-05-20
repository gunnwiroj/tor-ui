import React, { Component } from 'react';
const mockdata = require('../../src/mockupData/data')
class PrintContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    // console.log(mockdata['Data'])
    this.setState({ data: mockdata['Data'] })
  }
  render() {
    return (
      <div style={{ fontSize: 13, marginLeft: 50, marginTop: 20, marginRight: 50, height: '95vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: "12%" }}>
            <img src="http://www.cusc.chula.ac.th/wordpress/wp-content/uploads/2014/06/Logo-chula-678x1024.jpg" style={{ width: '100%' }} />
          </div>
          <div style={{ paddingLeft: 10, width: "80%" }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>NAME : </p>
              </div>
              <div>
                <p> Tatchanon Kummalue</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', paddingLeft: 150 }}>GENDER</p>
              </div>
              <div>
                <p style={{ paddingLeft: 15 }}>Male</p>
              </div>
              <div>
                <p style={{ fontWeight: 'bold', paddingLeft: 60 }}>STUDENT ID</p>
              </div>
              <div>
                <p style={{ paddingLeft: 15 }}>583 363 0023</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>BIRTHDATE</p>
              </div>
              <div>
                <p style={{ marginLeft: 15, }}>Apr 25, 1997</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>FACULTY</p>
              </div>
              <div>
                <p style={{ marginLeft: 100, paddingTop: 1 }}>Science</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>DEPT/PROGRAM</p>
              </div>
              <div>
                <p style={{ marginLeft: 53, paddingTop: 1 }}>Mathematics and Computer Science</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>FIELD OF STUDY</p>
              </div>
              <div>
                <p style={{ marginLeft: 53, paddingTop: 1 }}>Computer Science</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
              <div>
                <p style={{ fontWeight: 'bold' }}>CHULALONGKORN UNIVERSITY</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* <div style={{display:'flex',flexDirection:'column', flexWrap:'wrap'}}>
      </div> */}
        <div style={{ display: 'flex', flexDirection: 'row', fontSize: 10 }}>
          <div style={{ width: '50%', backgroundColor: '#fff' }}>
            <table style={{ width: '100%', border: '1px solid black', textAlign: 'center' }}>
              <thead style={{ border: '1px solid black' }}>
                <tr>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>COURSE NO.</td>
                  <td scope='col' style={{ border: '1px solid black', width: '55%' }}>NAME</td>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>CREDIT</td>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>GRADE</td>
                </tr>
              </thead>
              {
                this.state.data.map((year, id) => {
                  if(year.year<2559){
                  return (
                    year.semaster.map((semaster, id) => {
                      let semaster_text = ''
                      switch (id) {
                        case 0:
                          semaster_text = '1st Semaster'
                          break;
                        case 1:
                          semaster_text = '2nd Semaster'
                          break;
                        case 2:
                          semaster_text = 'Summer Session'
                      }
                      return (
                        <table style={{width:'100%'}}>
                          <tr key={id}>
                            <td colSpan={4} style={{textAlign:'center'}}>{semaster_text} {year.year}</td>
                          </tr>
                          {semaster.enroll.map((subject, id) => {
                            console.log(subject)
                            return (
                            <tr key={id}>
                              <td style={{width:'15%'}}>{subject.courseId}</td>
                              <td style={{width:'55%'}}>{subject.courseName}</td>
                              <td style={{width:'15%'}}>{subject.credit}</td>
                              <td style={{width:'15%'}}>{subject.grade}</td>
                            </tr>
                            )
                          })}
                        </table>)
                    }))}
                })
            }
          </table>
          </div>
          <div style={{ width: '50%'}}>
          <table style={{ width: '100%', border: '1px solid black', textAlign: 'center' }}>
              <thead style={{ border: '1px solid black' }}>
                <tr>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>COURSE NO.</td>
                  <td scope='col' style={{ border: '1px solid black', width: '55%' }}>NAME</td>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>CREDIT</td>
                  <td scope='col' style={{ border: '1px solid black', width: '15%' }}>GRADE</td>
                </tr>
              </thead>
              {
                this.state.data.map((year, id) => {
                  if(year.year>2558){
                  return (
                    year.semaster.map((semaster, id) => {
                      let semaster_text = ''
                      switch (id) {
                        case 0:
                          semaster_text = '1st Semaster'
                          break;
                        case 1:
                          semaster_text = '2nd Semaster'
                          break;
                        case 2:
                          semaster_text = 'Summer Session'
                      }
                      return (
                        <table style={{width:'100%'}}>
                          <tr key={id}>
                            <td colSpan={4} style={{textAlign:'center'}}>{semaster_text} {year.year}</td>
                          </tr>
                          {semaster.enroll.map((subject, id) => {
                            console.log(subject)
                            return (
                            <tr key={id}>
                              <td style={{width:'15%'}}>{subject.courseId}</td>
                              <td style={{width:'55%'}}>{subject.courseName}</td>
                              <td style={{width:'15%'}}>{subject.credit}</td>
                              <td style={{width:'15%'}}>{subject.grade}</td>
                            </tr>
                            )
                          })}
                        </table>)
                    }))}
                })
              }
          </table>
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