(this.webpackJsonptdusa=this.webpackJsonptdusa||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},17:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},18:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),r=t(2),n=t.n(r),s=(t(16),t(17),t(18),t(5)),m=t(6),i=t(9),o=t(7),d=t(1),E=t(10),v=t(8),u=t.n(v),N=t(3),g=t.n(N),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={startedYear:2019,comiteeMembers:[],events:[]},t.fetchEvent=function(){var e=[];g.a.parse("https://docs.google.com/spreadsheets/u/1/d/1mBz008DcVABl2EyVw7PTKFErjHD_rASRA_WRvKh7zJY/export?format=csv&id=1mBz008DcVABl2EyVw7PTKFErjHD_rASRA_WRvKh7zJY&gid=0",{download:!0,credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},complete:function(a){console.log("data",a.data),e=a.data.map((function(e,a){return"name"!=e[0]?c.a.createElement("div",{className:"col-xl-4 col-md-6 col-lg-4"},c.a.createElement("div",{className:"single_service text-center"},c.a.createElement("img",{width:"300px",src:"//drive.google.com/uc"+e[1].substring(29),alt:""}),c.a.createElement("p",{style:{color:"black"}},e[0]))):c.a.createElement("div",null)})),this.setState({events:e}),console.log("data",e)}.bind(Object(d.a)(t))}),console.log("data",e)},t.fetchcomiteeMembers=function(){var e=[];g.a.parse("https://docs.google.com/spreadsheets/u/1/d/1JXILljRHCBQs487c19RLSlfDQMx3DBXsQPTZVPqYj6M/export?format=csv&id=1JXILljRHCBQs487c19RLSlfDQMx3DBXsQPTZVPqYj6M&gid=0",{download:!0,credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},complete:function(a){console.log("data",a.data),e=a.data.map((function(e,a){return"name"!=e[0]?c.a.createElement("div",{style:{marginTop:"50px"},className:a<7?"col-xl-2 col-lg-2 col-md-2":"col-xl-4 col-lg-4 col-md-4"},c.a.createElement("h4",null,e[0]),c.a.createElement("h5",null,"(",e[1],")")):c.a.createElement("div",null)})),this.setState({comiteeMembers:e}),console.log("data",e)}.bind(Object(d.a)(t))}),console.log("data",e)},t.monitoringCommitee1=function(){return["Dr.A.Saravanabavan","Mr.Sivarooban","Mr.C.Thuvaragan","Dr.Ganesh Vasantharaja","Mr.Nesatharshan","Mr.Araniyan Sivanesarajah"].map((function(e,a){return c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-2 col-lg-2 col-md-2"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/monitoring-comitee/mon"+a+".jpg"}),c.a.createElement("h4",null,e))}))},t.monitoringCommitee2=function(){return["Mrs.Saranya Sutharsan","Mr.Bharathinathan","Mr.Sritharan"].map((function(e,a){return c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-4 col-lg-4 col-md-4"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/monitoring-comitee/mon"+a+"1.jpg"}),c.a.createElement("h4",null,e))}))},t.trackScrolling=function(){var e=document.getElementById("count");t.isTop(e)&&(console.log("count top reached"),t.setState({startedYear:1995}),document.removeEventListener("scroll",t.trackScrolling))},t}return Object(E.a)(a,e),Object(m.a)(a,[{key:"isTop",value:function(e){return e.getBoundingClientRect().top<=window.innerHeight}},{key:"componentDidMount",value:function(){this.fetchcomiteeMembers(),this.fetchEvent(),document.addEventListener("scroll",this.trackScrolling)}},{key:"render",value:function(){var e=this.state,a=e.startedYear,t=e.comiteeMembers,l=e.events,r="Mr.M.Rajaretnam,Dr.R.Ratnaranjith".split(",");return c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("div",{className:"header-area "},c.a.createElement("div",{className:"header-top_area d-none d-lg-block"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-5 col-md-5 "},c.a.createElement("div",{className:"header_left"},c.a.createElement("p",null,"Welcome to TDUSA"))),c.a.createElement("div",{className:"col-xl-7 col-md-7"},c.a.createElement("div",{className:"header_right d-flex"},c.a.createElement("div",{className:"short_contact_list"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#"}," ",c.a.createElement("i",{className:"fa fa-envelope"})," tdusa@gmail.com ")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"}," ",c.a.createElement("i",{className:"fa fa-phone"})," 0756761432")))),c.a.createElement("div",{className:"social_media_links"},c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-linkedin"})),c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-facebook"})),c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-google-plus"})))))))),c.a.createElement("div",{id:"sticky-header",className:"main-header-area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header_bottom_border"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-xl-3 col-lg-2"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"index.html"},c.a.createElement("i",{style:{color:"white"},className:"fas fa-graduation-cap"}," TDUSA")))),c.a.createElement("div",{className:"col-xl-6 col-lg-7"},c.a.createElement("div",{className:"main-menu  d-none d-lg-block"},c.a.createElement("nav",null,c.a.createElement("ul",{id:"navigation"},c.a.createElement("li",null,c.a.createElement("a",{className:"active",href:"index.html"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"#events"},"Events")),c.a.createElement("li",null,c.a.createElement("a",{href:"#structure"},"Structure")),c.a.createElement("li",null,c.a.createElement("a",{href:"study.html"})),c.a.createElement("li",null,c.a.createElement("a",{href:"#tdusa-papers"},"TDUSA papers ",c.a.createElement("i",{className:"ti-angle-down"})),c.a.createElement("ul",{className:"submenu"},c.a.createElement("li",null,c.a.createElement("a",{href:"blog.html"},"Maths")),c.a.createElement("li",null,c.a.createElement("a",{href:"single-blog.html"},"Bio")),c.a.createElement("li",null,c.a.createElement("a",{href:"blog.html"},"Arts")),c.a.createElement("li",null,c.a.createElement("a",{href:"single-blog.html"},"Commers")),c.a.createElement("li",null,c.a.createElement("a",{href:"blog.html"},"Technology")))),c.a.createElement("li",null,c.a.createElement("a",{href:"#contact"},"Contact")))))),c.a.createElement("div",{className:"col-xl-3 col-lg-3 d-none d-lg-block"},c.a.createElement("div",{className:"Appointment"},c.a.createElement("div",{className:"book_btn d-none d-lg-block"},c.a.createElement("a",{href:"#"},"Donate")))),c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"mobile_menu d-block d-lg-none"})))))))),c.a.createElement("div",{className:"slider_area"},c.a.createElement("div",{className:"slider_active owl-carousel"},c.a.createElement("div",{className:"single_slider  d-flex align-items-center slider_bg_1 overlay2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"slider_text "},c.a.createElement("h3",null,"Trincomalee District University Students' Association"),c.a.createElement("div",{className:"video_service_btn"},c.a.createElement("a",{href:"#history",className:"boxed-btn3"},"Our History"))))))),c.a.createElement("div",{className:"single_slider  d-flex align-items-center slider_bg_2 overlay2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"slider_text "},c.a.createElement("h3",null,"Trincomalee District University Students' Association"),c.a.createElement("div",{className:"video_service_btn"},c.a.createElement("a",{href:"#excellence_25",className:"boxed-btn3"},"25 Years of Excellency"))))))),c.a.createElement("div",{className:"single_slider  d-flex align-items-center slider_bg_1 overlay2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"slider_text "},c.a.createElement("h3",null,"Trincomalee District University Students' Association"),c.a.createElement("div",{className:"video_service_btn"},c.a.createElement("a",{href:"#history",className:"boxed-btn3"},"Our History"))))))),c.a.createElement("div",{className:"single_slider  d-flex align-items-center slider_bg_2 overlay2"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"slider_text "},c.a.createElement("h3",null,"Trincomalee District University Students Association"),c.a.createElement("div",{className:"video_service_btn"},c.a.createElement("a",{href:"#",className:"boxed-btn3"},"Our Services"))))))))),c.a.createElement("div",{id:"history",className:"testimonial_area overlay "},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"testmonial_active owl-carousel"},c.a.createElement("div",{className:"single_carousel"},c.a.createElement("div",{className:"single_testmonial text-center"},c.a.createElement("div",null,c.a.createElement("h2",{style:{color:"white"}},"Our History")),c.a.createElement("p",{style:{textAlign:"justify"}},"TDUSA(Trincomalee District University Students' Association) is the collaboration of the University students Who were elected from Trincomalee District"," "),c.a.createElement("div",{className:"testmonial_author"})))))))),c.a.createElement("div",{id:"excellence_25",className:"testimonial_area overlay "},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-10"},c.a.createElement("div",{className:"testmonial_active owl-carousel"},c.a.createElement("div",{className:"single_carousel"},c.a.createElement("div",{className:"single_testmonial text-center"},c.a.createElement("div",null,c.a.createElement("h2",{style:{color:"white"}},"25 Years of Excellency")),c.a.createElement("p",{style:{textAlign:"justify"}},"14.09.1995 \u0b85\u0ba9\u0bcd\u0bb1\u0bc1 \u0b89\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bcb\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd\u0bb5\u0bae\u0bbe\u0b95 \u0baa\u0ba4\u0bbf\u0bb5\u0bc1\u0b9a\u0bcd\u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0baa\u0bcd\u0b9f\u0bcd\u0b9f \u0b8e\u0bae\u0ba4\u0bc1 \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bcb\u0ba3\u0bae\u0bb2\u0bc8 \u0bae\u0bbe\u0bb5\u0b9f\u0bcd\u0b9f\u0baa\u0bcd\u0baa\u0bb2\u0bcd\u0b95\u0bb2\u0bc8\u0b95\u0bcd\u0b95\u0bb4\u0b95 \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0b92\u0ba9\u0bcd\u0bb1\u0bbf\u0baf\u0bae\u0bbe\u0ba9\u0ba4\u0bc1 \u0b95\u0b9f\u0ba8\u0bcd\u0ba4 14.09.2019 \u0b85\u0ba9\u0bcd\u0bb1\u0bc1 \u0ba4\u0ba9\u0bcd\u0ba9\u0bc1\u0b9f\u0bc8\u0baf \u0b95\u0bbe\u0bb2\u0bcd \u0ba8\u0bc2\u0bb1\u0bcd\u0bb1\u0bbe\u0ba3\u0bcd\u0b9f\u0bbf\u0bb2\u0bcd \u0ba4\u0b9f\u0bae\u0bcd \u0baa\u0ba4\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bbe\u0b95 \u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bcb\u0ba3\u0bae\u0bb2\u0bc8 \u0bae\u0bbe\u0bb5\u0b9f\u0bcd\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b9a\u0bae\u0bc1\u0b95\u0bae\u0bcd \u0b9a\u0bbe\u0bb0\u0bcd \u0b9a\u0bc6\u0baf\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0b9a\u0bcd\u0b9a\u0bbf\u0baf\u0bbe\u0b95 25 \u0bb5\u0bb0\u0bc1\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bbe\u0b95 \u0bae\u0b95\u0ba4\u0bcd\u0ba4\u0bbe\u0ba9 \u0b9a\u0bc7\u0bb5\u0bc8\u0baf\u0bbf\u0ba9\u0bc8 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bbf \u0bb5\u0bb0\u0bc1\u0b95\u0bbf\u0ba9\u0bcd\u0bb1\u0ba4\u0bc1"," "))))),c.a.createElement("div",{className:"col-xl-2"},c.a.createElement("div",null,c.a.createElement("img",{width:"100px",src:"tdusa/resources/img/25.gif"})))))),c.a.createElement("div",{id:"events",className:"service_area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"section_title text-center mb-50"},c.a.createElement("h3",null,"Our Events")))),c.a.createElement("div",{className:"row"},l))),c.a.createElement("div",{id:"count",className:"counter_area  overlay_03"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4"},c.a.createElement("div",{className:"single_counter text-center"},c.a.createElement("div",{className:"counter_icon"},c.a.createElement("img",{src:"tdusa/resources/img/svg_icon/group.svg",alt:""})),c.a.createElement("h3",null," ",c.a.createElement("span",{className:"counter"},"600")," ",c.a.createElement("span",null," +")," "),c.a.createElement("p",null,"Members"))),c.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4"},c.a.createElement("div",{className:"single_counter text-center"},c.a.createElement("div",{className:"counter_icon"},c.a.createElement("img",{src:"tdusa/resources/img/svg_icon/heart.svg",alt:""})),c.a.createElement("h3",null," ",c.a.createElement("span",{className:"counter"},"25")),c.a.createElement("p",null,"Events"))),c.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-4"},c.a.createElement("div",{className:"single_counter text-center"},c.a.createElement("div",{className:"counter_icon"},c.a.createElement("img",{src:"tdusa/resources/img/svg_icon/respect.svg",alt:""})),c.a.createElement("h3",null," ",c.a.createElement("span",{className:"counter_down"},c.a.createElement(u.a,{start:2019,end:a,duration:20}))," "),c.a.createElement("p",null,"Since")))))),c.a.createElement("div",{id:"structure",className:"team_area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"border_bottom"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"section_title mb-40 text-center"},c.a.createElement("h3",null,"Structure")))),c.a.createElement("div",{style:{marginTop:"50px"}},c.a.createElement("h2",{className:"text-center"},"Patrons"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-6 col-lg-6 col-md-6"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/patrons/patron.jpg"}),c.a.createElement("h4",null,r[0])),c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-6 col-lg-6 col-md-6"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/patrons/patron.jpg"}),c.a.createElement("h4",null,r[1]))),c.a.createElement("div",{style:{marginTop:"50px"}}),c.a.createElement("h2",{className:"text-center"},"Executive Commitee ",c.a.createElement("span",null,"2019")),c.a.createElement("div",{className:"row"},t)),c.a.createElement("div",{style:{marginTop:"50px"}},c.a.createElement("h2",{className:"text-center"},"Monitoring Commitee"),c.a.createElement("div",{className:"row"},this.monitoringCommitee1(),this.monitoringCommitee2())),c.a.createElement("div",{style:{marginTop:"50px"}},c.a.createElement("h2",{className:"text-center"},"Auditor"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-12 col-lg-12 col-md-12"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/patrons/patron.jpg"}),c.a.createElement("h4",null,"Mr.Pratheepan")))),c.a.createElement("div",{style:{marginTop:"50px"}},c.a.createElement("h2",{className:"text-center"},"Legal Advisor"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{style:{marginTop:"50px"},className:"col-xl-12 col-lg-12 col-md-12"},c.a.createElement("img",{width:"80px",height:"80px",style:{borderRadius:"50px"},src:"resources/img/structure/patrons/patron.jpg"}),c.a.createElement("h4",null,"Mr.P.Krishanth"))))))),c.a.createElement("div",{id:"tdusa-papers",className:"service_area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("div",{className:"section_title text-center mb-50"},c.a.createElement("h3",null,"TDUSA Papers")))),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"card-card card"},c.a.createElement("h3",{className:"title-card title"},"Bio"),c.a.createElement("div",{className:"bar-card bar"},c.a.createElement("div",{className:"emptybar-card emptybar"}),c.a.createElement("div",{className:"filledbar-card filledbar"})),c.a.createElement("div",{className:"circle-card circle"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"stroke-card stroke",cx:"60",cy:"60",r:"50"})))),c.a.createElement("div",{className:"card-card card"},c.a.createElement("h3",{className:"title-card title"},"Arts"),c.a.createElement("div",{className:"bar-card bar"},c.a.createElement("div",{className:"emptybar-card emptybar"}),c.a.createElement("div",{className:"filledbar-card filledbar"})),c.a.createElement("div",{className:"circle-card circle"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"stroke-card stroke",cx:"60",cy:"60",r:"50"})))),c.a.createElement("div",{className:"card-card card"},c.a.createElement("h3",{className:"title-card title"},"Maths"),c.a.createElement("div",{className:"bar-card bar"},c.a.createElement("div",{className:"emptybar-card emptybar"}),c.a.createElement("div",{className:"filledbar-card filledbar"})),c.a.createElement("div",{className:"circle-card circle"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"stroke-card stroke",cx:"60",cy:"60",r:"50"})))),c.a.createElement("div",{className:"card-card card"},c.a.createElement("h3",{className:"title-card title"},"Commerce"),c.a.createElement("div",{className:"bar-card bar"},c.a.createElement("div",{className:"emptybar-card emptybar"}),c.a.createElement("div",{className:"filledbar-card filledbar"})),c.a.createElement("div",{className:"circle-card circle"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"stroke-card stroke",cx:"60",cy:"60",r:"50"})))),c.a.createElement("div",{className:"card-card card"},c.a.createElement("h3",{className:"title-card title"},"Technology"),c.a.createElement("div",{className:"bar-card bar"},c.a.createElement("div",{className:"emptybar-card emptybar"}),c.a.createElement("div",{className:"filledbar-card filledbar"})),c.a.createElement("div",{className:"circle-card circle"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"stroke-card stroke",cx:"60",cy:"60",r:"50"}))))))),c.a.createElement("footer",{id:"contact",className:"footer"},c.a.createElement("div",{className:"footer_top"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-2 col-md-6 col-lg-3"},c.a.createElement("div",{className:"footer_widget"})),c.a.createElement("div",{className:"col-xl-2 col-md-6 col-lg-3"},c.a.createElement("div",{className:"footer_widget"},c.a.createElement("div",{className:"footer_logo"},c.a.createElement("a",{href:"#"},c.a.createElement("h2",null,"TDUSA"))),c.a.createElement("p",null,c.a.createElement("a",{href:"#"},"tdusa@gmail.com")," ",c.a.createElement("br",null),"0756761432 ",c.a.createElement("br",null),"Trincomalee"),c.a.createElement("div",{className:"socail_links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ti-facebook"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"ti-twitter-alt"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},c.a.createElement("i",{className:"fa fa-instagram"}))))),c.a.createElement("div",null))),c.a.createElement("div",{className:"col-xl-2 col-md-6 col-lg-2"},c.a.createElement("div",{className:"footer_widget"})),c.a.createElement("div",{className:"col-xl-4 col-md-6 col-lg-4"},c.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d599.2068762458875!2d81.23724270514043!3d8.570989397586656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbbcb09daedd4f%3A0xc15f86723e7443fd!2z4K6k4K6_4K6w4K-B4K6V4K-L4K6j4K6u4K6y4K-IIOCuqOCuleCusOCumuCuquCviCBUcmluY29tYWxlZSBVcmJhbiBDb3VuY2ls!5e0!3m2!1sen!2slk!4v1577126417427!5m2!1sen!2slk",width:"450",height:"300",frameborder:"0",style:{border:"0"},allowfullscreen:""}))))),c.a.createElement("div",{className:"copy-right_text"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer_border"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12"},c.a.createElement("p",{className:"copy_right text-center"},"Copyright \xa9 All rights reserved by Trincomalee District University Students Association")))))))}}]),a}(c.a.Component);var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.bd644c68.chunk.js.map