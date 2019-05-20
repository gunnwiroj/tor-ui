import React,{Component} from 'react'
import Select from 'react-select'
const choice = require('../mockupData/data')
const _ = require('lodash')
class Course extends Component{

  constructor(props){
    super(props)
    this.state = {
      value:{},
      detailobj:[],
      subdetailobj:[]
    }
  }

  onSelect = (e) => {
    let findobj =  _.find( choice['CourseDetail'] ,function(o) {return(o.value === e.value)})
    this.setState({value:e,detailobj:findobj.detail, subdetailobj:findobj.subdetail})
  }
  render(){
    return(
      <div>
         <div style={{height:'10vh', backgroundColor:'#dfaea9', justifyContent:'center', alignItems:'center', display:'flex'}}>
          <p style={{textAlign:'center', verticalAlign:'center', color:'#fff'}}>Chulalongkorn University</p>
        </div>
        <div className="container">
          <div className="row" style={{marginTop:30}}>
            <div className="col-md-2" style={{textAlign:'center'}}>
              <h6 style={{marginTop:8}}>ค้นหารายวิชา</h6>
            </div>
            <div className="col-md-4" >
              <Select
                value={this.state.value}
                onChange={(e) => this.onSelect(e)}
                options={choice['Course']}
              />
            </div>
          </div>
          {
          this.state.detailobj.length < 1 ? <div/> :
          <div className="col-md-10 offset-md-1" style={{backgroundColor:'#f6f6f6', marginTop:27, borderRadius:10}}>
            <div className="offset-md-1" style={{paddingTop:8}}>
              <div className="row" >
                <p style={{fontWeight:'bold'}}>Course</p>
                <p style={{marginLeft:40}}>{this.state.value.label}</p>
              </div>
              <div className="row">
                <p style={{fontWeight:'bold'}}>Topics</p>
                <div style={{paddingLeft:45}}>
                  {
                    this.state.detailobj.map((topic,id) => {
                      return(<p key={id}>{topic}</p>)
                    })
                  }
                </div>
              </div>
              <div className="row">
                <p style={{fontWeight:'bold'}}>Sub-Topics</p>
                <div style={{paddingLeft:7}}>
                  {
                    this.state.subdetailobj.map((topic,id) => {
                      return(<p key={id}>{topic}</p>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default Course;