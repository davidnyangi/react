import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import { FaCalendarAlt } from "react-icons/fa";

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}

const calcGoalProgress = (total,goal) => {
    return percentToDecimal(total/goal)
}
export const SkiDayCount = ({total,powder,backcountry,goal}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span><FaCalendarAlt/>
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span><TiWeatherSnow/>
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
                <MdTerrain/>
            <span>hiking day</span>
        </div>
        <div>
            <span>{calcGoalProgress(
                total,goal
            )}
            </span>
        </div>
    </div>
)