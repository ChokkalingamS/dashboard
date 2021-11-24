
import './App.css';
import './media.css';


import { InputGroup,Button,FormControl,ProgressBar,Card,Dropdown } from 'react-bootstrap';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';

import {Line,Doughnut } from 'react-chartjs-2';



export default function App() {
  return (
    <div className="App">
    <Dashboard/>
    </div>
  );
}

function Dashboard()
{
  return <div>
          <Navigationbar/>

          <div className="dashboard">
            <p style={{fontWeight:"350",fontSize:"36px"}}>Dashboard</p>
            <Button> <i className="fas fa-download"></i>Generate Report</Button>
          </div>
          
          <Remainder/>
          
          <div className="chart">
          <Linechart/>
          <Doughnutchart/>
          </div>
          
          <Fab variant="extended"  id="float-button" onClick={()=>window.scroll(-500,0)}>
           <NavigationIcon sx={{ mr: 1 }} />Navigate</Fab> 
          
          <div className="project-illustration">
          <Projects/>
          <Illustrations/>
          </div>
        
          <div className="color-dev">
          <ColorPallet/>
          <Development/>
          </div>
          
          <div className="footer"><p>Copyright © Your Website 2021</p></div>
  </div>
}


function Navigationbar()
{
  return <div className="container" >
         
         <div className="search-button">
         
         <InputGroup id="search-field" ><FormControl 
          placeholder="Search for..."aria-label="search" aria-describedby="basic-addon2"/>            
          <Button variant="primary" id="button-addon2" ><SearchRoundedIcon></SearchRoundedIcon></Button></InputGroup>
         </div>

          <div className="profile">
            <div>
         <Badge badgeContent={"3+"} color="error"><NotificationsIcon color="action" /></Badge></div>
         
        <div><Badge badgeContent={7} className="mailbadge" color="error"><MailIcon color="action" /></Badge></div> 
         

        <div>  <label>Douglas McGee</label></div> 
            <div>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">D</Avatar> </div> 
            </div>
         
</div>
}


function Remainder()
{
  let calendar_icon=<i className="fas fa-calendar"></i>
  let dollar_icon=<i className="fas fa-dollar-sign"></i>
  let clipboard_icon=<i className="fas fa-clipboard-list" style={{marginLeft:"2rem"}}></i>
  let comments=<i className="fas fa-comments"></i>
  let task_comp= <ProgressBar id="pbar"  variant="info" now={50} ></ProgressBar>
    let data=[
    {
        name:"EARNINGS (MONTHLY)", value:"$40,000", progress:"",icon:calendar_icon,color:"blue"
    },
    {
        name:"EARNINGS (ANNUAL)", value:"$215,000", progress:"",icon:dollar_icon,color:"#0fab4e"
    },
    {
      name:"TASKS", value:"50%", progress:task_comp,icon:clipboard_icon,color:"skyblue"
    },
    {
      name:"PENDING REQUESTS", value:"18", progress:"",icon:comments,color:"gold"
    },

  ] 
  
  return <div className="remainder">{data.map(({name,value,progress,icon,color},i)=>{
    return (
            <div key={i} className="remainder-content" style={{borderLeftColor:color}}>

            <div className="left">
            <p style={{color:color}}>{name}</p>
            <p>{value}</p>
            </div>  

            <div className="bar">{progress}</div>
           <div className="right"> 
           <p className="icon">{icon}</p>
           </div>

    </div>)
  })}
  </div>
}


function Projects() 
{
  let p1= <ProgressBar  variant="server-migration" now={20} />
  let p2= <ProgressBar  variant="sales-tracking" now={40} />
  let p3= <ProgressBar  variant="customer-database" now={60} />
  let p4= <ProgressBar  variant="payout-details" now={80} />
  let p5= <ProgressBar  variant="account-setup" now={100} />
  
    let data=[
                {
                  name:"Server Migration",percentage:"20%",progress:p1
                },
                {
                  name:"Sales Tracking",percentage:"40%",progress:p2
                },
                {
                  name:"Customer Database",percentage:"60%",progress:p3
                },
                {
                  name:"Payout Details",percentage:"80%",progress:p4
                },
                {
                  name:"Account Setup",percentage:"Complete!",progress:p5
                },
             ]  

             return( <div className="projects">
              
               <div  className="container-head"  >
               <p style={{color:"#4e73df",fontWeight:"bolder",fontSize:"20px"}}>Projects</p>
               </div>
               {data.map(({name,percentage,progress},i)=>{ return(
                 <div key ={i} className="individual-status">
                   <div className="name-percentage">
                   <p style={{marginLeft:"0.5rem",marginRight:"0.5rem"}}>{name}</p>
                   <p style={{margin:"0.5rem",marginRight:"0.5rem"}}>{percentage}</p>
                   </div>
                   <div style={{margin:"0.5rem",marginRight:"0.5rem",marginTop:"-0.5rem"}}>{progress}</div>
                 </div>
               )})}
             </div>)
}

function ColorPallet()
{
  let colorlist=[{name:"Primary",code:"#4e73df"},{name:"Success",code:"#1cc88a"},
                 {name:"Info",code:"#36b9cc"},{name:"Warning",code:"#f6c23e"},
                 {name:"Danger",code:"#e74a3b"},{name:"Secondary",code:"#858796"},
                 {name:"Light",code:"#f8f9fc"},{name:"Dark",code:"#5a5c69"},
  ]
  return <div className="color-container">
    {colorlist.map(({name,code},i)=>{ return (
      <div className="colors" key={i} style={{backgroundColor:code}}>
        <p style={{margin:"0.5rem",color:(name==="Light")?"rgb(68 66 66)":"White"}}>{name}</p>
        <p style={{margin:"0.5rem",color:"rgb(68 66 66)"}}>{code}</p>
      </div>
    )})}
  </div>
}


function Illustrations()
{
  return <div className="illustration">
    <div className="container-head">
    <p style={{color:"#4e73df",fontWeight:"bolder",fontSize:"20px"}}>Illustrations</p>
    </div> 
    
    <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="Img"></img>
    <p style={{alignText:"justify",padding:"15px"}}>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images
       that you can use completely free and without attribution!</p>
      <a href="https://undraw.co/" ><p style={{color:"#4e73df",marginTop:"-1rem",marginLeft:"1rem"}}>Browse Illustrations on unDraw →</p></a>
  </div>
  
}

function Development()
{
return (<div className="development">
        
        <div className="container-head">
        <p style={{color:"#4e73df",fontWeight:"bolder",fontSize:"20px"}}>Development Approach</p>
        </div> 

        <p style={{alignText:"justify",padding:"5px",marginLeft:"10px"}}>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance.
           Custom CSS classes are used to create custom components and custom utility classes.</p>
        <p style={{alignText:"justify",marginLeft:"10px"}}>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>

</div>)  
}


function Linechart()
{
  const data = {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
    datasets: [
      {
        label: '',
        data:[0, 10000, 5000, 15000,10000,20000,15000,25000,20000,30000,25000,40000],
        fill: true,
        backgroundColor: '#dbe1eb',
        borderColor: '#4e73df',
        tension: 0.5,
        display:false
      }
    ],
  };
  
  const options = {
    scales: {
      y: { beginAtZero: true},
      }
  };
  return(<div className="linechart">
   <Card>
    <Card.Header as="h5" style={{color:"#4e73df",fontWeight:"bold"}}>Earnings Overview <i className="fas fa-ellipsis-v licon" ></i></Card.Header>
     <Card.Body> 
  <Line data={data} options={options}  height={250} options={{ maintainAspectRatio:false }} 
 
/>
   </Card.Body>
</Card>

</div>)
}



function Doughnutchart()
{
  const data = {
    labels: ['Direct','Social','Referral'],
    datasets: [
      {
        label: '',
        data:[55,30,15],
        fill: true,
        backgroundColor: ['#4e73df','#1cc88a','#36b9cc'],
        tension: 0.5,
      }
    ],
  };

 
  const options = {
    scales: {
      y: { beginAtZero: true},
    },
    
  };

  let Drop=()=>
  {
    return(<Dropdown>
    
     <Dropdown.Menu>
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Divider/>
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     </Dropdown.Menu>
   </Dropdown>)
  }


  return(<div className="dchart">
   <Card>
    <Card.Header as="h5" style={{color:"#4e73df",fontWeight:"bold"}}>Revenue Sources
    
    <i className="fas fa-ellipsis-v dcicon" onClick={()=> {return Drop()}} style={{cursor:"pointer"}}></i>
    </Card.Header>
    
     <Card.Body> 
  < Doughnut data={data} options={options}  height={250} options={{ maintainAspectRatio:false }} 
/>
   </Card.Body>
</Card>

</div>)
}




