import "./popup.css";
import { Link } from "react-router-dom";
const Popup = ({ clickToggler }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/jacksonobere.pdf";
    link.download = "ObereCv.pdf";
    link.click();
    clickToggler();
  };

  return (
    <div className="popup-main">
      <div onClick={handleDownload}>
        <img src="/cv.png" alt="" />
        <span>My CV</span>
      </div>
      <Link  onClick={()=>{clickToggler()}} className="lis" to="/bucketlist">
        <img src="/bucket.png" alt="" />
        <span>Bucket List</span>
      </Link>

      <Link onClick={()=>{clickToggler()}}  className="lis" to="bookmarks">
        <img src="/bookmark.png" alt="" />
        <span>Bookmarks</span>
      </Link>
    </div>
  );
};

export default Popup;
