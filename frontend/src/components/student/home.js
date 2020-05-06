import React, { Component,Fragment} from 'react'
import axios from 'axios'
import {Link,Redirect} from 'react-router-dom'
export default class home extends Component {
    state = {
        categories: [],
        category_id:"",
        catname:"",
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
         
        const res = await axios.get(`http://localhost:3000/api/v1/category`, config);   
        this.setState({
            categories: res.data.data,
        });        
        
               
      };
      getCatId = async (id,catname, e) => {
         e.preventDefault();
         this.setState({
             category_id: id,
             catname:catname,
             view:true,
         });
         console.log(id)
     }
   render() {
     return (
         <Fragment>
         {this.state.view ?
         ( 
             (<Redirect view={this.state.view} 
               to={{pathname:'/student/catevents',
                       state:{category_id:this.state.category_id,
                              catname:this.state.catname}
                   }} 
               />) 
            )
         : 
         (
    
            <div>
              
                 <form method="post">
                     <div className="container">
                                        
                          <div className="row">    
                              <div className="col-md-9">
                                  <div className="row ml-4">
                                 
                                  {this.state.categories.map((cat) => (  
                                     <a className="card  ml-2 mt-4 "  
                                      onClick={(e) =>this.getCatId(cat._id, cat.catname,e)}>
                                        <img src={cat.file} alt="cs" style={{width:'300px'}}/>
                                       <button className='text-blue mb-3 mx-auto btn btn-info mt-3'>{cat.catname}</button>
                                      </a>
                                       ))}   
                                                                       
                                  </div>
  
                               </div>
                          </div>
                      </div>
                  </form>
              </div> 
               )}
           </Fragment> 
          )
      }
  
  }