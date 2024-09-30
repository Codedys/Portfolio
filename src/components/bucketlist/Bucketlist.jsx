import "./bucketlist.css";
import { bucketListData } from "../../binding/bucketlist_bind";
const Bucketlist = () => {
  return (
    <div className="bucketlist-main">
      <h1>🪣 Bucket List</h1>
      <p>List of Cool Things i'd want to do in life</p>

      <div className="bucketlist-cards">
        {bucketListData.map((data, index) => (
          <div key={index}  className="b-card">
            <h5 style={data.status ? { textDecoration: 'line-through' } : null}>{data.name}</h5>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bucketlist;
