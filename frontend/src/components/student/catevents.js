import React, { Component,Fragment } from 'react'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'

export default class catevents extends Component {
    state = {
        events: [],
        category_id:this.props.location.state.category_id,
        catname:this.props.location.state.catname,
        event_id:"",
        // student:{},
        view:false
     };
     
     componentDidMount = async () => {
       const token = sessionStorage.getItem("token");
       const config = {
         headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
           },
         };
  
       const res = await axios.get(`http://localhost:3000/api/v1/category/${this.state.category_id}/events`, config);   
       this.setState({
           events: res.data.data,
          //  student:res.data.data.student,
       });        
        
      //  console.log(this.state.student);
       console.log(this.state.events);
              
     };
     getEventId = async (id,student,e) => {
        e.preventDefault();
        this.setState({
           event_id: id,
          //  student:student,
            view:true,
        });
        // console.log(this.state.student)
    }
    render() {
        return (
            
                <Fragment>
         {this.state.view ?
         ( 
             (<Redirect view={this.state.view} 
               to={{pathname:'/student/desc',
                       state:{event_id:this.state.event_id,
                        student_id:this.state.student_id}
                   }} 
               />) 
            )
         : 
         (
          <div>
              
               {/* <form method="post">
                   <div className="container">
                         <div className="row"> 
                        
                        
                           
                             <div className="col-md-9">
                          
                                <div className="card ">
                               <h4 className='text-muted mb-3 mx-auto'>{this.state.catname}</h4><hr/> */}
                                {/* {this.state.events.map((event) => ( 
                                    <div>
                                    <div className="row ml-2">
                                       
                                          <div className='col-md-10'>
                                             <h5 className='text-blue mb-3'>{event.title}</h5>
                                             <h6 className='text-muted ml-2'>Technology : {project.technology}</h6>     */}
                                              {/* <h6 className='text-muted ml-2'>price : {project.price}</h6>  
                                          </div> */} 
                                          {/* <div className="">
                                             <a className='btn btn-blue text-white'
                                              onClick={(e) =>this.getEventId(event._id,event.student,e)}>View</a><br/>
                                          </div>
                                       </div><hr/>
                                     </div>
                                  ))}   */}
                                      
                         {/* </div>
                    </div>
                    </div>
                    </div>
                </form> */}

                <form>
                <div className="container">
                <div class="title-box">
                    <h2>{this.state.catname}</h2>
                </div>
                
                        <div className='row'>
                        {this.state.events.map((event) => (
                            <div className="col-md-3">
                            <div className="card mt-3">
                                <img src={event.file} className=" mt-3" alt="img" style={{width:"100%"}}></img>

                                <h5>{event.title}</h5>
                                <input type="submit" className="btn btn-info btn-md" name="submit" value="View"
                                    onClick={(e) =>this.getEventId(event._id,event.student,e)}
                                />
                            </div>
                        </div>
                   
                ))}
                </div>
                    </div>
                </form>



            </div>  
                )}
                </Fragment>  
          
        )
    }
}
