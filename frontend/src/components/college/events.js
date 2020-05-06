import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
export default class events extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        //   category: [],
          events:[],
          event_id:"",
          view:false,
          me:"",
        };
        // this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
        async componentDidMount() {

            const token = sessionStorage.getItem("token");

        const config1 = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const result=await axios.get(`http://localhost:3000/api/v1/auth/me`,config1);
        this.setState({
            me:result.data.data._id,
            // user:result.data.data.name,
        })
        console.log(this.state.me)
        const res = await axios.get(`http://localhost:3000/api/v1/colleges/${this.state.me}/events`, config1);
        this.setState({
          events: res.data.data,
        });
        
        console.log(this.state.events)

            // const config = {
            //     headers: {
            //     //   Authorization: `Bearer ${token}`,
            //       "Content-Type": "application/json",
            //     },
            //   };
            //   try{
            //   const result = await axios.get(
            //     `http://localhost:3000/api/v1/category`,
            //     config
            //   );
            //   this.setState({category:result.data.data});
            //   console.log(result.data.data);
            // //   alert(`Product Addred ${result.data.data.title}`);
            //   }
            //   catch(err){
            //       console.log("cannot load events")
            //   }
            }
            onClick=async(id,e)=>{
                e.preventDefault();
                this.setState({
                    view:true,
                    event_id:id
                })
            }
            
            // handleDropdownChange(e) {
            //     this.setState({ cat: e.target.value });
            //     console.log(this.state.cat)
            //   }
          
    render() {
        return (
            <Fragment>
            {this.state.view?((<Redirect view={this.state.view} to={{
                pathname:'/college/desc',
                state:{event_id:this.state.event_id}
            }}
            />)
            ):(
            <div >
                <section class="featured-categories ">
                <div class="container ">
                        <div class="row ">
                            
                            {this.state.events.map((event)=>(
                            <div class="col-md-3"  >
                            <div class="product-top ">
                                <img id="catimg" src={event.file} style={{width:"250px"}}/>
                                <div class="overlay-right">
                                {/* <Link to="/student/desc"> */}
                                <button type="button" class="btn btn-secondary" title="Description"
                                   onClick={(e)=>
                                    this.onClick(event._id,e)} >
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    {/* </Link> */}
                                    {/* <button type="button" class="btn btn-secondary" title="Like">
                                        <i class="fa fa-registered"></i>
                                    </button> */}
                                </div>
                                {/* <div className="">
                                    
                            </div> */}
                            </div>
                            <div class="card-footer product-bottom text-center">
                                <h5>{event.name}</h5>
                            </div>
                            
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            )}
            </Fragment>
        )
    }
}
