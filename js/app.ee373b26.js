(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},2244:function(e,t,a){e.exports=a.p+"img/splogo.fd020ecb.jpg"},"2b97":function(e,t,a){"use strict";var n=a("5e85"),o=a.n(n);o.a},"35a4":function(e,t,a){e.exports=a.p+"img/ntc_standRack.0df009d9.jpg"},4111:function(e,t,a){"use strict";var n=a("89a7"),o=a.n(n);o.a},4926:function(e,t,a){e.exports=a.p+"img/sps.d559fbd4.jpeg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=(a("f9e3"),a("2dd8"),a("5f5b")),i=a("8c4f"),r=a("ecee"),s=a("c074"),l=a("f2d1"),c=a("b702"),u=a("ad3d"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"mr-lg-5",attrs:{"align-h":"start",id:"contentRow"}},[a("b-col",{attrs:{lg:""}},[a("b-navbar",{attrs:{type:"light",toggleable:"lg",fixed:"top"}},[a("b-navbar-brand",{attrs:{id:"navBrand",disabled:""}},[a("h4",[e._v("Kyle Wei")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"about"}},[e._v("About Kyle")]),a("b-nav-item",{attrs:{to:"experience"}},[e._v("Experience")]),a("b-nav-item",{attrs:{to:"projects"}},[e._v("Projects")]),a("b-nav-item",{attrs:{id:"resumeLink",href:"https://1drv.ms/b/s!AmQ7QGGJ_UIEo2WVC2Da2W-B9noD?e=o7xHQe",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Resume ")]),a("b-nav-form",{attrs:{id:"contactForm"}},[a("b-nav-item",{attrs:{href:"mailto:wei.kyle@gmail.com",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"contactIcon",attrs:{id:"emailIcon",icon:["far","envelope"]}})],1),a("b-nav-item",{attrs:{href:"https://www.linkedin.com/in/kyle-wei/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"contactIcon",attrs:{id:"linkedinIcon",icon:["fab","linkedin"]}})],1)],1)],1),a("b-navbar-nav",{staticClass:"ml-auto"})],1)],1),a("transition",{attrs:{name:"content-fade",mode:"out-in"}},[a("router-view",{attrs:{id:"routerContent"}})],1)],1)],1)},p=[],v={name:"app",data:function(){return{showMain:!0,showResume:!1,showProjects:!1,propOne:"",propTwo:""}},methods:{openEducation:function(){this.$router.push("education")},openExperience:function(){this.$router.push("experience")},openProjects:function(){this.$router.push("projects")}},watch:{$route:function(e,t){document.title=e.meta.title||"Profile"}},mounted:function(){document.title="Kyle Wei"}},b=v,m=(a("034f"),a("2877")),h=Object(m["a"])(b,d,p,!1,null,null,null),g=h.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-card",{attrs:{title:"Projects"}},[n("b-row",[n("b-col",{attrs:{lg:""}},[n("h3",[e._v("Cans4Cosmo Recycling Application")]),n("b-row",[n("b-col",[n("ul",[n("li",[e._v("A web application developed for Cosmopolitan Industries")]),n("li",[e._v("Subscriber interface aimed to allow clients to subscribe for scheduled recycling pickups from Cosmopolitan")]),n("li",[e._v("Administrative interface used to manage route table generation, location groupings, and subscriber information")]),n("li",[e._v("Front-end developed using the Vue.js and Bootstrap frameworks")]),n("li",[e._v("Back-end database and API developed using .NET Core and Entity Framework in C#")])])])],1)],1),n("b-col",{attrs:{id:"cosmoImage",sm:"8",md:"6",lg:"4"}},[n("b-img",{staticClass:"img-fluid w-100",attrs:{center:"",thumbnail:"",src:a("9403")}})],1)],1)],1),n("b-card",[n("b-row",[n("b-col",[n("h3",[e._v("Saskatoon Public Schools Staff Laptop Refresh")]),n("b-row",[n("b-col",{attrs:{lg:""}},[n("ul",[n("li",[e._v("Worked with SPS Information Services to replace teacher laptops throughout the school division during June, 2019")]),n("li",[e._v("Met with teachers to help transfer existing data onto their new laptops, provide information on laptop usage, and address any concerns")]),n("li",[e._v("Repackaged old laptop computers in preparation for recycling")])])])],1)],1),n("b-col",{attrs:{id:"spsLogo",lg:""}},[n("b-img",{staticClass:"img-fluid",attrs:{center:"",thumbnail:"",src:a("4926")}})],1)],1)],1),n("b-card",[n("b-row",{attrs:{"align-h":"between"}},[n("b-col",[n("h3",[e._v("Nutana Collegiate Server Rack and VoIP Upgrade "),n("a",{attrs:{href:"https://twitter.com/SPSD_IT/status/1165011962163605504"}},[n("font-awesome-icon",{attrs:{id:"twitterIcon",icon:["fab","twitter-square"]}})],1)]),n("b-row",[n("b-col",{attrs:{lg:""}},[n("ul",[n("li",[e._v("Installed new server racking in the network room, and replaced Avaya and Nortel VoIP phones with Cisco phones")]),n("li",[e._v("Routed network cabling from old server cabinetry to new server room through walls and drop ceilings")]),n("li",[e._v("Reinstalled server hardware into new standing rack and terminated network cabling onto patch panels")]),n("li",[e._v("Configured Cisco VoIP phones to replace old Avaya and Nortel phones throughout the school")]),n("li",[e._v("Worked with Charter technicians to set up phone functionality and test functions such as 911 dialing, failover modes, and cross-site operations")])])])],1)],1),n("b-col",{attrs:{id:"ntcImage",lg:""}},[n("b-img",{staticClass:"img-fluid",attrs:{thumbnail:"",center:"",src:a("35a4")}})],1)],1)],1),n("b-card",[n("h3",[e._v("North Park Wilson School Network Upgrade")]),n("b-row",[n("b-col",{attrs:{lg:""}},[n("ul",[n("li",[e._v("Prepared library within North Park Wilson Elementary School for its transition to a computer lab")]),n("li",[e._v("Hauled and mounted new network cabinet")]),n("li",[e._v("Cut and assembled CAT6 network cabling, network drops, and cable channels")]),n("li",[e._v("Installed new network switches and connected the new hardware to the existing school network")])])]),n("b-col",{attrs:{lg:""}},[n("b-img",{staticClass:"img-fluid",attrs:{id:"npwImage",shadow:"",thumbnail:"",center:"",rounded:"",src:a("7ecc")}})],1)],1)],1)],1)},_=[],w={name:"Projects",data:function(){return{}},methods:{}},y=w,C=(a("7293"),Object(m["a"])(y,f,_,!1,null,"57390e3e",null)),S=C.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-card",{attrs:{title:"About Kyle"}},[n("b-row",[n("b-col",[n("p",[e._v("A second-year Computer Systems Technology student aiming to graduate in June 2020. He has had an interest in computers since childhood, has built several computer systems and networks, and looks forward to entering into the IT industry upon graduation.")]),n("p",[e._v("Ecletic in his hobbies, Kyle participates in a number of activities ranging from musical performance, with over 13 combined years of study between the piano, violin, and banjo, to sports such as baseball, badminton, football, and snowboarding, for which he makes an annual trip to Marmot Basin. He has travelled around Canada, the United States, China in 2008, and Japan in 2018.")])])],1)],1),n("b-card",{attrs:{title:"Skills"}},[n("b-row",[n("b-col",{staticClass:"mt-sm-3",attrs:{md:""}},[n("b-list-group",[n("b-list-group-item",[n("h3",[e._v("Systems")]),n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("h3",[e._v("Domain and System Management")]),n("ul",[n("li",[e._v("Microsoft Active Directory")]),n("li",[e._v("System Center Configuration Manager (SCCM)")]),n("li",[e._v("LDAP in Linux environments")])])]),n("b-list-group-item",[n("h3",[e._v("Machine Virtualization")]),n("ul",[n("li",[e._v("Microsoft Azure Cloud Services")]),n("li",[e._v("VMWare ESXi")])])]),n("b-list-group-item",[n("h3",[e._v("Networking and Hardware")]),n("ul",[n("li",[e._v("Setup and configuration of network devices")]),n("li",[e._v("Assembly and installation of network wiring")]),n("li",[e._v("Planning and assembly of computer hardware")]),n("li",[e._v("Setup and usage of Windows and Linux systems")])])])],1)],1)],1)],1),n("b-col",{staticClass:"mt-sm-3",attrs:{md:""}},[n("b-list-group",[n("b-list-group-item",[n("h3",[e._v("Development Languages")]),n("b-list-group",{attrs:{flush:""}},[n("b-list-group-item",[n("h3",[e._v("Programming")]),n("ul",[n("li",[e._v("C#")]),n("ul",[n("li",[e._v(".NET Core Framework")])]),n("li",[e._v("C++")]),n("li",[e._v("C")]),n("li",[e._v("Java")]),n("li",[e._v("Xamarin")]),n("li",[e._v("Swift")]),n("li",[e._v("Bash & Perl Script")]),n("li",[e._v("VBA")])])]),n("b-list-group-item",[n("h3",[e._v("Web Development")]),n("ul",[n("li",[e._v("HTML & CSS")]),n("li",[e._v("JavaScript")]),n("ul",[n("li",[e._v("Bootstrap")]),n("li",[e._v("Vue.js")])]),n("li",[e._v("PHP")])])]),n("b-list-group-item",[n("h3",[e._v("Database Mangement")]),n("ul",[n("li",[e._v("SQL")]),n("ul",[n("li",[e._v("Microsoft SQL Server")]),n("li",[e._v("SQLite")])]),n("li",[e._v("PSQL")])])])],1)],1)],1)],1)],1)],1),n("b-card",{attrs:{title:"Education"}},[n("b-row",[n("b-col",{attrs:{lg:""}},[n("h3",{staticClass:"edTitle"},[e._v("Saskatchewan Polytechnic")]),n("ul",{attrs:{id:"spEd"}},[n("li",{attrs:{id:"spProg"}},[e._v("Computer Systems Technology, Diploma")]),n("li",[e._v("September 2018 - June 2020")]),n("ul",[n("li",[e._v("A broad program covering topics in Application and Database Programming, Web Design, System Administration, and Hardware Design")]),n("li",[e._v("Excelled in Systems and Network Administration, and Programming areas")])])])]),n("b-col",{attrs:{lg:""}},[n("b-img",{staticClass:"img-fluid w-75",attrs:{id:"spImg",shadow:"",thumbnail:"",center:"",rounded:"",src:a("2244")}})],1)],1),n("b-row",{staticClass:"mt-5"},[n("b-col",{attrs:{lg:""}},[n("h3",{staticClass:"edTitle"},[e._v("University of Saskatchewan")]),n("ul",{attrs:{id:"uosEd"}},[n("li",{attrs:{id:"uosProg"}},[e._v("Computer Science, BSc. (Incomplete)")]),n("li",[e._v("September 2011 - June 2017")]),n("ul",[n("li",[e._v("Took a wide range of courses in computer sciences, natural and social sciences, and linguistics")]),n("li",[e._v("Studied German to the A2 Level for German Language Proficiency")])])])]),n("b-col",{attrs:{lg:""}},[n("b-img",{staticClass:"img-fluid",attrs:{id:"uofsImg",shadow:"",thumbnail:"",center:"",rounded:"",src:a("bad6")}})],1)],1)],1)],1)},j=[],P={name:"Skills"},T=P,x=(a("2b97"),Object(m["a"])(T,k,j,!1,null,"bad4a48e",null)),A=x.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",[a("b-card",{attrs:{title:"Related Experience"}},[a("b-row",[a("b-col",[a("h3",{staticClass:"jobTitle"},[e._v("Systems Technician (Freelance)")]),a("p",{staticClass:"jobTime"},[e._v("February 2020 -> Present ")]),a("ul",[a("li",[e._v("Working with small business clients to provide network and technical support")]),a("li",[e._v("Supporting "),a("em",[e._v("Blakley RG Chartered Accountant")]),e._v(" with server and network solutions")]),a("ul",[a("li",[e._v("Identified and resolved "),a("em",[e._v("Microsoft Exchange")]),e._v(" issues stemming from improper DNS configurations")]),a("li",[e._v("Setup and installed new server back up schedule, and Uninterruptible Power Supply (UPS) with monitoring software")]),a("li",[e._v("Assisted with transitioning select personnel to remote operations due to COVID-19 Pandemic")])])]),a("h3",{staticClass:"jobTitle"},[e._v("System Support Technician (Summer Student) | "),a("span",{staticClass:"jobLoc"},[e._v(" Saskatoon Public Schools")])]),a("p",{staticClass:"jobTime"},[e._v("June 2019 -> August 2019")]),a("ul",[a("li",[e._v("Collaborated with other SPS Information Services staff to provide technical support for the Saskatoon Public School Division")]),a("li",[e._v("Assisted teachers and support staff via phone, email, support ticketing software, remote desktop, and in-person meetings")]),a("li",[e._v("Managing domain users and objects through Active Directory and System Center Configuration Manager")]),a("li",[e._v("Maintaining and replacing network hardware throughout elementary and high schools")])]),a("h3",{staticClass:"jobTitle"},[e._v("Product Process Specialist | "),a("span",{staticClass:"jobLoc"},[e._v(" Best Buy Canada")])]),a("p",{staticClass:"jobTime"},[e._v("July 2015 -> Present")]),a("ul",[a("li",[e._v("Product Process team has been recognized for consistently the best warehouse in Western Canada")]),a("li",[e._v("Shipping and receiving store stock and high value goods")]),a("li",[e._v("Operating work machinery safely within enclosed spaces")]),a("li",[e._v("Working with other store staff to rotate and maintain hardware")])]),a("h3",{staticClass:"jobTitle"},[e._v("Home Solutions/Gaming Specialist |"),a("span",{staticClass:"jobLoc"},[e._v(" Best Buy Canada")])]),a("p",{staticClass:"jobTime"},[e._v("November 2011 -> August 2014")]),a("ul",[a("li",[e._v("Showcased and provide consult to with customers on video game consoles, games, televisions, and relevant accessories")]),a("li",[e._v("Meeting with brand representatives to learn about new products, features, and benefits offered")])])])],1)],1),a("b-card",{attrs:{title:"Volunteer Work"}},[a("b-row",[a("b-col",[a("h3",{staticClass:"jobTitle"},[e._v("Technical Mentor | "),a("span",{staticClass:"jobLoc"},[e._v("Canada Learning Code")])]),a("p",{staticClass:"jobTime"},[e._v("February 29, 2020")]),a("ul",[a("li",[e._v("Volunteered as a Technical Mentor at the Teens Learning Code: HTML & CSS workshop")]),a("li",[e._v("Assisted children and teenagers with constructing a personalized web resume")]),a("li",[e._v("Worked with other mentors and session organizers to provide a safe, learning environment")])]),a("h3",{staticClass:"jobTitle"},[e._v("Instructor Aide/Tutor | "),a("span",{staticClass:"jobLoc"},[e._v("Saskatchewan Polytechnic")])]),a("p",{staticClass:"jobTime"},[e._v("Winter 2020")]),a("ul",[a("li",[e._v("Tutoring two first year Computer Systems Technology students")]),a("li",[e._v("Providing assistance and clarification about lecture topics and programming concepts")]),a("li",[e._v("Creating a weekly meeting schedule that fit both students' schedules")])]),a("h3",{staticClass:"jobTitle"},[e._v("Junior Football Coach | "),a("span",{staticClass:"jobLoc"},[e._v("Centennial Collegiate")])]),a("p",{staticClass:"jobTime"},[e._v("Fall 2012, Fall 2013")]),a("ul",[a("li",[e._v("Coached the Defensive Line unit comprised of Grade 9 and 10 students")]),a("li",[e._v("Taught theory, tactics, and skills associated with Defensive Line positions and Defense as a whole")]),a("li",[e._v("Worked with other coaches to incorporate different player positions in drills")]),a("li",[e._v("Conduct and supervised physical conditioning drills during practice days")])])])],1)],1)],1)},L=[],M={name:"Experience"},W=M,E=(a("4111"),Object(m["a"])(W,I,L,!1,null,"fdebca30",null)),D=E.exports;r["c"].add(s["b"],l["a"],c["a"],c["c"],l["b"],c["b"],l["c"],s["a"]),n["default"].use(o["a"]),n["default"].use(i["a"]),n["default"].component("font-awesome-icon",u["a"]),n["default"].config.productionTip=!1;var O=[{path:"/",component:A,meta:{title:"Kyle Wei - About"}},{path:"/projects",component:S,meta:{title:"Kyle Wei - Projects"}},{path:"/about",component:A,meta:{title:"Kyle Wei - About"}},{path:"/experience",component:D,meta:{title:"Kyle Wei - Experience"}}],B=new i["a"]({routes:O});new n["default"]({render:function(e){return e(g)},router:B}).$mount("#app")},"5e85":function(e,t,a){},7293:function(e,t,a){"use strict";var n=a("d46c"),o=a.n(n);o.a},"7ecc":function(e,t,a){e.exports=a.p+"img/npw_channelCabinet.1bc5df65.jpg"},"85ec":function(e,t,a){},"89a7":function(e,t,a){},9403:function(e,t,a){e.exports=a.p+"img/cans4cosmo_logo.432615ba.png"},bad6:function(e,t,a){e.exports=a.p+"img/uofslogo.158c3838.jpg"},d46c:function(e,t,a){}});
//# sourceMappingURL=app.ee373b26.js.map