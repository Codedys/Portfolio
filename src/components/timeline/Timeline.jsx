import "./timeline.css";
import { timelineData } from "../../binding/timeline_bind";

const Timeline = () => {
  return (
    <div className="timeline-main">
      <h1>⏳ Timeline</h1>
      <p>Here's a Chronological list of updates on what i've been upto</p>

      <div className="timeline-card">
        {timelineData.map((data,index)=>(

          <div key={index} className="t-card">
           <span>{data.title}</span> 
          <p className="naim">{data.name}</p>
          <p>{data.description}</p>
          <p className="date">{data.date}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
