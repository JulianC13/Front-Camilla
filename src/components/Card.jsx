import Sun from '../assets/giphy.gif'
import Rain from '../assets/Rain.gif'
// Reusable component that will handle weather information for each record that comes in the fetched data.
function Card(props){
    let item = props.data
    return (
        <div className={parseFloat(item.Chanceofrainfall)<50?'widgetSun':'widgetRain'} key={item.Date}>
            <div className="left-panel panel">
                <div className="date">
                    {item.Date}
                </div>
                <div className="city">
                    Sydney
                </div>
                <div className="temp">
                   {item.Min}&deg;- {item.Max}&deg;
                   {parseFloat(item.Chanceofrainfall)<50?<img className="sunImg"  src={Sun} />:""}
                </div>
                <div className="hum">
                   Humidity: {item.Humdidity} | Chance of rain: {item.Chanceofrainfall}
                </div>
            </div>
        </div>
    )
}

export default Card