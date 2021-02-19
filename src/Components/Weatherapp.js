import React,{useState} from 'react';
import './style/style.css';
import snow from './images/snow.jpg';
import drizzle from './images/drizzle.jpg';
import clouds from './images/clouds.jpg';
import mist from './images/mist.jpg';
import rain from './images/rain.jpg';
import thunderstorm from './images/thunderstorm.jpg';
import weather from './images/weather.jpg'
import Ellipse from './Ellipse';

//props data
// icon,description,main,windSpeed ,humidity,pressure,temperature ,temperatureMax ,temperatureMin ,date ,clouds,country

export default function Weatherapp(props) {
    const [input,setInput] = useState("");
    //set background image for different type of weather
    const backgroundImage = props.data.main==='Thunderstorm'?thunderstorm:
                            props.data.main==='Drizzle'?drizzle:
                            props.data.main==='Rain'?rain:
                            props.data.main==='Snow'?snow:
                            props.data.main==='Mist'?mist:
                            props.data.main==='Clouds'?clouds:
                            weather;
                            
    return (
        <div style={{backgroundImage:`url(${props.data.main&&backgroundImage})`}} className="Main">
            <div className={`weather w3-card-2 ${props.error?"w3-red":"w3-blue"}`}>
                <form onSubmit={(e)=>e.preventDefault()} 
                    className="searchBar w3-light-grey" >
                    <input type="text" 
                        style={{outline:"none",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} 
                        value={input} 
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder="Enter city name" 
                        className="w3-input w3-large w3-border" required/>
                    <button 
                        className="w3-input w3-red w3-hover-dark-red" 
                        onClick={()=>input===""||input.length<3?null:props.setCity(input)} 
                        style={{outline:"none",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>Search</button>
                </form>
                {props.loading?
                    <div style={{padding:"80px 20px",fontSize:"30px",textAlign:"center",width:"100%"}}>
                        <Ellipse />
                    </div>:
                    <div className="content">
                        {props.error?
                        <div style={{padding:"80px 20px",fontSize:"30px",textAlign:"center",width:"100%"}}>
                            <span style={{textDecoration:"underline"}}>{props.city}</span> City could not be found
                        </div>:
                        <>
                            <div className="left">
                                <h1 className="w3-xxlarge uppercase">{props.city}, {props.data.country}</h1>
                                <p><DateTimeStamp date={props.data.date}/></p>
                                <hr/>
                                <span className="temperature">{props.data.temperature}°C</span>
                                <p style={{padding:"8px 5px"}}>{props.data.temperatureMax}°C / {props.data.temperatureMin}°C</p>
                                <p  style={{padding:"0px 0px",display:"flex",alignItems:"center",marginLeft:"-8px",marginTop:"-25px"}}>
                                    <img src={`http://openweathermap.org/img/wn/${props.data.icon}.png`} alt={props.data.main}/>
                                    <span className="uppercase">{props.data.description}</span>
                                </p>
                                <hr/>
                                <p className="w3-margin-top">
                                    Wind : {props.data.windSpeed} km/hr 
                                    <span className="w3-right">Pressure : {props.data.pressure} hpa</span>
                                </p>
                                <p style={{marginTop:"0px",marginBottom:"40px"}}>
                                    Humidity : {props.data.humidity} %
                                    <span className="w3-right">Clouds : {props.data.clouds} %</span>
                                </p>
                                

                            </div>
                            <div className="right w3-round-xxlarge">
                                <img src={`http://openweathermap.org/img/wn/${props.data.icon}@4x.png`} className="animate__animated animate__bounce" alt={props.data.main}/>
                            </div>
                    </>
                    }

                </div>
                }
                <div className="w3-padding-medium footer w3-light-grey w3-text-darker w3-small w3-center"><b>DEVELOPED BY KADUM KOMUT</b></div>
                
            </div>
        </div>
    )
}

const DateTimeStamp = ({date}) =>{
    function convert(d){
        // Months array
        var months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        // Convert timestamp to milliseconds
        var date = new Date(d*1000);
        // Year
        var year = date.getFullYear();
        // Month
        var month = months_arr[date.getMonth()];

        // Day
        var day = date.getDate();
        // Display date time in MM-dd-yyyy h:m:s format
        var convdataTime = day+' '+month+', '+year;
        return convdataTime;
       }
       return (
           <>
            {convert(date)}
            </>
       );
}
