import React from "react";
import Info from "./components/info"
import Weather from "./components/weather"
import Form from "./components/form"

const API_KEY="7086c3c1867aa31e0d4ffd1ba0fb6157";

class App extends React.Component{
    gettingWeather=async(e)=>{
       e.preventDefault();
       const city=e.target.elements.city.value;
       const apiUrl=await
       fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
       const data=await apiUrl.json;
       console.log(data);
    }
    render(){
        return(
        <div>
         <Info/>
         <Form weatherMethod={this.gettingWeather}/>
         <Weather/>
        </div>
        );
    }
}

export default App;