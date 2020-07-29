import React from 'react';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';
import { Icon,Popover, Button } from 'antd';
import Papa from 'papaparse';


export default class Index extends React.Component{

  state = {
    startedYear : 2020,
    comiteeMembers : [],
    events : []
  }

  fetchEvent = () =>{
    var data = []
    const uri = process.env.REACT_APP_EVENTS
    Papa.parse(uri, {
      download: true,
      credentials: "same-origin", //include, same-origin
      headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
     complete: function(results) {
         console.log("data", results.data);
         //console.log(results.data[1][6]);
          data =  results.data.map((item,index) => (
            item[0] != "name" ?  <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_service text-center">
          
                <img width="300px" src={"//drive.google.com/uc" + item[1].substring(29)} alt="" />
            
              {/* <h3>{item[0]}</h3> */}
              <p style={{color : "black"}}>{item[0]}</p>
              {/* <a href="#" className="learn_more">Learn More</a> */}
            </div>
          </div>: <div></div>
          ) 
            )
        this.setState({events : data})
        console.log("data", data)
        
     }.bind(this)
 });
 console.log("data", data)
  }

  fetchcomiteeMembers = () =>{
    var data = []
    const uri = process.env.REACT_APP_COMITTEE_MEMBERS
    Papa.parse(uri, {
      download: true,
      credentials: "same-origin", //include, same-origin
      headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
     complete: function(results) {
         console.log("data", results.data);
         //console.log(results.data[1][6]);
          data =  results.data.map((item,index) => (
            item[0] != "name" ? <div style = {{marginTop : "50px"}} className={index < 7 ? "col-xl-2 col-lg-2 col-md-2" : "col-xl-4 col-lg-4 col-md-4"}>
            <img onError={(e)=> {e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src={"//drive.google.com/uc" + item[2].substring(29)}></img>
           <h4>{item[0]}</h4>
           <h5>({item[1]})</h5>
          </div>: <div></div>
          ) 
            )
        this.setState({comiteeMembers : data})
        console.log("data", data)
        
     }.bind(this)
 });
 console.log("data", data)

  }



monitoringCommitee1 = () => {
  const monitoringCommiteeArr1 = process.env.REACT_APP_MONITORING_COMMITEE_1.split(',')
  //const monitoringCommiteeArr = ['Dr.A.Saravanabavan', 'Mr.Sivarooban', 'Mr.C.Thuvaragan','Dr.Ganesh Vasantharaja','Mr.Nesatharshan','Mr.Araniyan Sivanesarajah']
  return monitoringCommiteeArr1.map((item,index) => (
    <div style = {{marginTop : "50px"}} className="col-xl-2 col-lg-2 col-md-2">
    <img onError={(e)=> {e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src={"resources/img/structure/monitoring-comitee/mon"+(index+1)+".jpg"}></img>
     <h4>{item}</h4>
    </div>
  ))
}
monitoringCommitee2 = () => {
  const monitoringCommiteeArr2 = process.env.REACT_APP_MONITORING_COMMITEE_2.split(',')
  //const monitoringCommiteeArr = [ 'Mrs.Saranya Sutharsan','Mr.Bharathinathan','Mr.Sritharan']
  return monitoringCommiteeArr2.map((item,index) => (
    <div style = {{marginTop : "50px"}} className="col-xl-4 col-lg-4 col-md-4">
    <img onError={(e)=> {e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src={"resources/img/structure/monitoring-comitee/mon"+(index+7)+".jpg"}></img>
     <h4>{item}</h4>
    </div>
  ))
}


  isTop(el) {
    return el.getBoundingClientRect().top <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('count');
    if (this.isTop(wrappedElement)) {
      console.log('count top reached');
      this.setState({startedYear : 1995});
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  componentDidMount() {
    this.fetchcomiteeMembers();  
    this.fetchEvent();
    document.addEventListener('scroll', this.trackScrolling);
  }

    render(){
      const {startedYear, comiteeMembers,events} = this.state
      const History = process.env.REACT_APP_HIST
      const excelllence_25 = process.env.REACT_APP_25_YEAR
      const executive_year = process.env.REACT_APP_EXECUTIVE_YEAR
      const patronsArr = process.env.REACT_APP_PATRONS.split(',')
      const auditor = process.env.REACT_APP_AUDITOR
      const legal_advisor = process.env.REACT_APP_LEGAL_ADVISOR
      const subdomain = process.env.REACT_APP_SUBDOMAIN
        return( 
        <div>
              {/*[if lte IE 9]>
                  <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
              <![endif]*/}
              {/* header-start */}
              <header>
                <div className="header-area ">
                  <div className="header-top_area d-none d-lg-block">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-5 col-md-5 ">
                          <div className="header_left">
                            <p>Welcome to TDUSA</p>
                          </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                          <div className="header_right d-flex">
                            <div className="short_contact_list">
                              <ul>
                                <li><a href="#"> <i className="fa fa-envelope" /> tdusa.sl@gmail.com </a></li>
                                <li><a href="#"> <i className="fa fa-phone" />   {process.env.REACT_APP_MOBILE}</a></li>
                              </ul>
                            </div>
                            <div className="social_media_links">
                          
                              <a href="https://www.facebook.com/tdusa">
                                <i className="fa fa-facebook" />
                              </a>
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="sticky-header" className="main-header-area">
                    <div className="container">
                      <div className="header_bottom_border">
                        <div className="row align-items-center">
                          <div className="col-xl-3 col-lg-2">
                            <div className="logo">
                              <a href="index.html">
                              <i style={{color : "white"}} className="fas fa-graduation-cap"> TDUSA</i>
                                {/* <img src="/resources/img/logo.png" alt="" /> */}
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-7">
                            <div className="main-menu  d-none d-lg-block">
                              <nav>
                                <ul id="navigation">
                                  <li><a className="active" href="index.html">Home</a></li>
                                  <li><a href="#events">Events</a>
                              
                                  </li>
                                  <li><a href="#structure">Structure</a></li>
                                  <li><a href="study.html"></a></li>
                                  <li><a href="#tdusa-papers">TDUSA papers <i className="ti-angle-down" /></a>
                                    <ul className="submenu">
                                      <li><a href="blog.html">Maths</a></li>
                                      <li><a href="single-blog.html">Bio</a></li>
                                      <li><a href="blog.html">Arts</a></li>
                                      <li><a href="single-blog.html">Commers</a></li>
                                      <li><a href="blog.html">Technology</a></li>
                                
                                    </ul>
                                  </li>
              
                                  <li><a href="#contact">Contact</a></li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div className="Appointment">
                              <div className="book_btn d-none d-lg-block">
                                <a href={process.env.REACT_APP_DONATE}>Donate</a>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              {/* header-end */}
              {/* slider_area_start */}






              <div className="slider_area">
                <div className="slider_active owl-carousel">
                  <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slider_text ">
                            <h3>Trincomalee District University Students' Association</h3>
                            <div className="video_service_btn">
                              <a href="#history" className="boxed-btn3">Our History</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slider_text ">
                            <h3>Trincomalee District University Students' Association</h3>
                            <div className="video_service_btn">
                              <a href="#excellence_25" className="boxed-btn3">25 Years of Excellence</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slider_text ">
                            <h3>Trincomalee District University Students' Association</h3>
                            <div className="video_service_btn">
                              <a href="#history" className="boxed-btn3">Our History</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="slider_text ">
                            <h3>Trincomalee District University Students' Association</h3>
                            <div className="video_service_btn">
                              <a href="#excellence_25" className="boxed-btn3">25 Years of Excellence</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slider_area_end */}






              {/* history */}


              <div id="history" className="testimonial_area overlay ">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="testmonial_active owl-carousel">
                        <div className="single_carousel">
                          <div className="single_testmonial text-center">
                            <div>
                              <h2 style={{color : 'white'}}>Our History</h2>
                            </div>
                            <p style = {{textAlign : 'justify'}}>{History} </p>
                            <div className="testmonial_author">
                            </div>
                          </div>
                        </div>
                    
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div id="excellence_25" className="testimonial_area overlay ">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="testmonial_active owl-carousel">
                        <div className="single_carousel">
                         
                          <div className="single_testmonial text-center">
                            <div>
                              <h2 style={{color : 'white'}}>25 Years of Excellence</h2>
                            </div>
                            <p style = {{textAlign : 'justify'}}>{excelllence_25} </p>
              
                  
                          </div>
                        </div>
                    
                  
                      </div>
                    </div>
                    <div className="col-xl-2">
                    <div>
                       <img class="excel_25" width="100px" src={"resources/img/25.gif"}></img>
                    </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* service_area_start */}
              <div id="events" className="service_area">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section_title text-center mb-50">
                        <h3>Our Events</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    
                
                  {events}
                  </div>
                </div>
              </div>
              {/* service_area_end */}
              {/* about_info_area start  */}
             
              {/* /about_info_area end  */}
              {/* counter_area  */}
              <div id="count" className="counter_area  overlay_03">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="single_counter text-center">
                        <div className="counter_icon">
                          <img src={"resources/img/svg_icon/group.svg" } alt="" />
                        </div>
                        <h3> <span className="counter">600</span> <span> +</span> </h3>
                        <p>Members</p>
                      </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-3 col-md-3">
                      <div className="single_counter text-center">
                        <div className="counter_icon">
                          <img src="/resources/img/svg_icon/cart.svg" alt="" />
                        </div>
                        <h3> <span className="counter">97</span> <span>%</span> </h3>
                        <p>Events</p>
                      </div>
                    </div> */}
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="single_counter text-center">
                        <div className="counter_icon">
                          <img src={"resources/img/svg_icon/heart.svg"} alt="" />
                        </div>
                        <h3> <span className="counter">25</span></h3>
                        <p>Events</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="single_counter text-center">
                        <div className="counter_icon">
                          <img src={"resources/img/svg_icon/respect.svg"} alt="" />
                        </div>
                        <h3> <span className="counter_down"><CountUp start = {2019} end={startedYear} duration ={20} />
                          </span> </h3>
                        <p>Since</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /counter_area  */}




 {/* team_area  */}
 <div id="structure" className="team_area">
                <div className="container">
                  <div className="border_bottom">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="section_title mb-40 text-center">
                          <h3>
                            Structure
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div style={{marginTop : "50px"}}>
                    <h2 className = "text-center">Patrons</h2>
                    <div className="row">
                      
                      <div style = {{marginTop : "50px"}} className="col-xl-6 col-lg-6 col-md-6">
                        <img onError={(e)=>{e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/patrons/patron1.jpg"></img>
                       <h4>{patronsArr[0]}</h4>
                      </div>
                      <div style = {{marginTop : "50px"}} className="col-xl-6 col-lg-6 col-md-6">
                      <img onError={(e)=> {e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/patrons/patron2.jpg"></img>
                       <h4>{patronsArr[1]}</h4>
                      </div>
                    
                    </div>
                   


                    <div style={{marginTop : "50px"}}></div>
                    <h2 className = "text-center">Executive Commitee <span>{executive_year}</span></h2>
                    <div className="row">
                     {comiteeMembers}
                      {/* <div className="col-xl-6 col-lg-6 col-md-6">
                        <img width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/patrons/patron1.jpg"></img>
                       <h4>Mr. Vijay</h4>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                      <img width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/patrons/patron2.jpg"></img>
                       <h4>Mr. Ajith</h4>
                      </div>
                      */}
                    </div>
                    </div>

                    <div style={{marginTop : "50px"}}>
                    <h2 className = "text-center">Monitoring Commitee</h2>
                    <div className="row">
                    
                      {this.monitoringCommitee1()}
                      
                      
                      {this.monitoringCommitee2()}
                  
                    
                    </div>
                    </div>
                    <div style={{marginTop : "50px"}}>
                    <h2 className = "text-center">Auditor</h2>
                    <div className="row">
                      
                      <div  style = {{marginTop : "50px"}} className="col-xl-12 col-lg-12 col-md-12">
                        <img onError={(e)=> {e.target.onerror = null; e.target.src = 'resources/img/team/3.jpg'}} width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/auditor/auditor.jpg"></img>
                       <h4>{auditor}</h4>
                      </div>
                      
                     
                    </div>
                    </div>


<div style={{marginTop : "50px"}}>
                    <h2 className = "text-center">Legal Advisor</h2>
                    <div className="row">
                      
                      <div style = {{marginTop : "50px"}} className="col-xl-12 col-lg-12 col-md-12">
                        <img  onError={(e)=>  e.target.src = 'resources/img/team/3.jpg'} width="80px" height="80px" style={{borderRadius:"50px"}} src="resources/img/structure/patrons/patron.jpg"></img>
                       <h4>{legal_advisor}</h4>
                      </div>
               
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /team_area  */}







              {/* case_study_area  */}
              <div id="tdusa-papers" className="service_area" >
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                      <div className="section_title text-center mb-50">
                        <h3>TDUSA Papers</h3>
                      </div>
                    </div>
                  </div>
<div className="d-flex justify-content-center">
                      

  <div onClick={()=> window.open(process.env.REACT_APP_BIO, "_blank")} className="card-card card">
    <h3 className="title-card title">Bio</h3>
    <div className="bar-card bar">
      <div className="emptybar-card emptybar"></div>
      <div className="filledbar-card filledbar"></div>
    </div>
    <div className="circle-card circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke-card stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  <div onClick={()=> window.open(process.env.REACT_APP_ARTS, "_blank")} className="card-card card">
    <h3 className="title-card title">Arts</h3>
    <div className="bar-card bar">
      <div className="emptybar-card emptybar"></div>
      <div className="filledbar-card filledbar"></div>
    </div>
    <div className="circle-card circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke-card stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
  
  <div onClick={()=> window.open(process.env.REACT_APP_MATHS, "_blank")} className="card-card card">
    <h3 className="title-card title">Maths</h3>
    <div className="bar-card bar">
      <div className="emptybar-card emptybar"></div>
      <div className="filledbar-card filledbar"></div>
    </div>
    <div className="circle-card circle">
               
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke-card stroke" cx="60" cy="60" r="50"/>
    
    </svg>
    </div>
  </div>
  <div onClick={()=> window.open(process.env.REACT_APP_COMMERCE, "_blank")} className="card-card card">
    <h3 className="title-card title">Commerce</h3>
    <div className="bar-card bar">
      <div className="emptybar-card emptybar"></div>
      <div className="filledbar-card filledbar"></div>
    </div>
    <div className="circle-card circle">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
 
     <circle className="stroke-card stroke" cx="60" cy="60" r="50" ></circle>
    
    
     </svg>
    </div>
  </div>
  <div onClick={()=> window.open(process.env.REACT_APP_TECHNOLOGY, "_blank")} className="card-card card">
    <h3 className="title-card title">Technology</h3>
    <div className="bar-card bar">
      <div className="emptybar-card emptybar"></div>
      <div className="filledbar-card filledbar"></div>
    </div>
    <div className="circle-card circle">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle className="stroke-card stroke" cx="60" cy="60" r="50"/>
    </svg>
    </div>
  </div>
</div>
</div>
</div>









              {/* <div id="tdusa-papers" className="case_study_area">
                <div className="container">
                  <div className="border_bottom">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="section_title text-center mb-40">
                          <h3>TDUSA Papers</h3>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="case_active owl-carousel">
                          <div className="single_case">
                            <div className="case_thumb">
                              <img src="/resources/img/case/1.png" alt="" />
                            </div>
                            <div className="case_heading">
                              <span>Maths</span>
                              <h3><a href="#">Consumer Products Consulting</a></h3>
                            </div>
                          </div>
                          <div className="single_case">
                            <div className="case_thumb">
                              <img src="/resources/img/case/2.png" alt="" />
                            </div>
                            <div className="case_heading">
                              <span>Bio</span>
                              <h3><a href="#">Consumer Products Consulting</a></h3>
                            </div>
                          </div>
                          <div className="single_case">
                            <div className="case_thumb">
                              <img src="/resources/img/case/3.png" alt="" />
                            </div>
                            <div className="case_heading">
                              <span>Commerce</span>
                              <h3><a href="#">Consumer Products Consulting</a></h3>
                            </div>
                          </div>
                          <div className="single_case">
                            <div className="case_thumb">
                              <img src="/resources/img/case/1.png" alt="" />
                            </div>
                            <div className="case_heading">
                              <span>Finance Solution</span>
                              <h3><a href="#">Consumer Products Consulting</a></h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        
                     
                          <div className="single_case">
                            <div className="case_thumb">
                              <img src="/resources/img/case/1.png" alt="" />
                            </div>
                            <div className="case_heading">
                              <span>Maths</span>
                              <h3><a href="#">Consumer Products Consulting</a></h3>
                            </div>
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* /case_study_area  */}
            
              {/* <div className="testimonial_area overlay ">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="testmonial_active owl-carousel">
                        <div className="single_carousel">
                          <div className="single_testmonial text-center">
                            <div className="quote">
                              <img src="/resources/img/svg_icon/quote.svg" alt="" />
                            </div>
                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                              Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                            <div className="testmonial_author">
                              <div className="thumb">
                                <img src="/resources/img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                            </div>
                          </div>
                        </div>
                        <div className="single_carousel">
                          <div className="single_testmonial text-center">
                            <div className="quote">
                              <img src="/resources/img/svg_icon/quote.svg" alt="" />
                            </div>
                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                              Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                            <div className="testmonial_author">
                              <div className="thumb">
                                <img src="/resources/img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                            </div>
                          </div>
                        </div>
                        <div className="single_carousel">
                          <div className="single_testmonial text-center">
                            <div className="quote">
                              <img src="/resources/img/svg_icon/quote.svg" alt="" />
                            </div>
                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br /> 
                              sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br />
                              Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                            <div className="testmonial_author">
                              <div className="thumb">
                                <img src="/resources/img/case/testmonial.png" alt="" />
                              </div>
                              <h3>Robert Thomson</h3>
                              <span>Business Owner</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
             
             
              {/* /Information_area  end */}
              {/* footer start */}
              <footer id="contact" className="footer">
                <div className="footer_top">
                  <div className="container">
                    <div className="row">
                    <div className="col-xl-2 col-md-6 col-lg-3">
                        <div className="footer_widget">
                       
                       </div>
                        </div>
                      <div className="col-xl-2 col-md-6 col-lg-3">
                        <div className="footer_widget">
                          

                        <div className="footer_logo">
                            <a href="#">
                             <h2>TDUSA</h2>
                            </a>
                          </div>
                          <p>
                            <div>
                            <a href="#">tdusa.sl@gmail.com</a></div> <br />
                          <div>
                            {process.env.REACT_APP_MOBILE} </div> <br />
                          <div>
                           Town Hall Premises, Docyard road, Trincomalee, Sri Lanka
                           </div>
                          </p>
                          <div className="socail_links">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/tdusa">
                                  <i className="ti-facebook" />
                                </a>
                              </li>
                              {/* <li>
                                <a href="#">
                                  <i className="ti-twitter-alt" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-instagram" />
                                </a>
                              </li> */}
                            </ul>
                          </div>
                        <div>


                        </div>
                      </div>
                    
                      </div>
                      <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget">
                       
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6 col-lg-4">
                        
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.3143514408323!2d81.2371723880607!3d8.571230125739723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbdf1f26d198d%3A0xb4f38c84620701f8!2sTDUSA%20(Trincomalee%20District%20University%20Students&#39;%20Association)!5e0!3m2!1sen!2slk!4v1577296276699!5m2!1sen!2slk" width="450" height="300" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>            
                        </div>
    
                    </div>
                  </div>
                </div>
                <div className="copy-right_text">
                  <div className="container">
                    <div className="footer_border" />
                    <div className="row">
                      <div className="col-xl-12">
                        <p className="copy_right text-center">
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                          Copyright © All rights reserved by Trincomalee District University Students' Association
                          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          );
        
    }
}
