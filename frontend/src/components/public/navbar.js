import React, { Component } from 'react'
// import Events from './events'
import { Link } from 'react-router-dom'
export default class navbar extends Component {
    render() {
        return (
            <>
            <div class="top-nav-bar">
                    <nav>
        
        <div id="search-box">
        <div id="logo">Your Logo here</div>
        {/* <input type="text" class="form-control"/>
            <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span> */}
        </div>

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/registration'>Let's Start</Link></li>
                <li>
                    
                    <label for="drop-1" class="toggle"> Login</label>
                    <Link>Login</Link>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li><Link to="/slogin">Student</Link></li>
                        <li><Link to="/clogin">College</Link></li>
                        <li><Link to="/alogin">Admin</Link></li>
                        
                    </ul>  

               </li>
                {/* <li>

              
                <label for="drop-2" class="toggle">Web Design +</label>
                <a href="#">Web Design</a>
                <input type="checkbox" id="drop-2"/>
                <ul>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Links</a></li>
                    <li>
                       
                  
                    <label for="drop-3" class="toggle">Tutorials +</label>
                    <a href="#">Tutorials</a>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><a href="#">HTML/CSS</a></li>
                        <li><a href="#">jQuery</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                    </li>
                </ul>
                </li> */}
                {/* <li><a href="#">Graphic Design</a></li> */}
                {/* <li><a href="#">Inspiration</a></li> */}
                {/* <li><Link to='/'>Signup</Link></li> */}
                {/* <li><Link to='/plogin'>Login</Link></li> */}
                {/* <li><img id="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSDx687cZntUTVHu-wOcc7L28ikxqI99KfX9Ehn90RFdXNFG7&s" alt="Avatar"/></li> */}

            </ul>
        </nav>
        </div>
        
        {/* <Events/> */}
      
        </>
        )
    }
}


              
     
            
