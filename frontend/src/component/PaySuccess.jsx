import data from "./data.json";
import "./style.css"
const PaySuccess = () => {
  return (
    <div className="pay_container">
      <div>
        <h2> Bạn đã thanh toán thành công</h2>
      </div>
      <div>
        <a href={data.link_data}>DOWNLOAD</a>
      </div>
    </div>
  );
};

export default PaySuccess;
