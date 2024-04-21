import { useEffect } from "react";
import { BsStar } from "react-icons/bs";
import "./style.css";
import axios from "axios";
import data from './data.json';
const Product = () => {

  const handleadd = (idbook) => {
    const domain = window.location.origin;
    console.log(domain);
    const data = {
      name: "Bí mật của may mắn",
      quantity: 1,
      price: 10000,
      YOUR_DOMAIN: domain,
    };
    axios
      .post("http://localhost:8000/createlink", data)
      .then((response) => {
        window.location.href = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="container_home1">
      <div className="home1_main">
        <div className="main_img">
          <img className="main_img_img" src={data.img} alt="" />
        </div>
        <div className="main_info">
          <div classs="main_info_head">
            <p className="main_info_head"> Thông tin sản phẩm: </p>
          </div>
          <div classs="main_info_name">
            <p className="main_info_name">{data.name}</p>
          </div>
          <div className="main_info_rate">
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <div classs="main_info_price">
            <p className="main_info_price">{data.price} vnđ</p>
          </div>
          <div className="main_descripts">
            <p className="main_descripts">
            Câu chuyện trong Bí mật của May mắn hấp dẫn như câu chuyện thần thoại với những chân lý thực tế 
            và vĩnh hằng của cuộc sống, mang lại cho người đọc, niềm tin, hy vọng, những trải nghiệm quý báu, 
            đồng thời lý giải tại sao một số người luôn gặp được may mắn trong khi những người khác lại không gặp. 
            Cuốn sách đã mang đến cho độc giả một cái nhìn thú vị và sâu sắc về thay đổi những điều kiện cần thiết
             để tạo ra và duy trì sự may mắn trong cuộc đời chúng ta. Độc giả khắp mọi nơi đã chú tâm thưởng thức, 
             chuyền tay cho bè bạn và mỗi người đều mua nhiều bản để tặng cho gia đình, người thân, đồng nghiệp như 
             những món quà đặc biệt của sự may mắn
            </p>
          </div>
          <div classs="main_info_add">
            <button
              className="main_info_adddetail"
              onClick={() => handleadd(data.id)}
            >
              {" "}
              Mua sản phẩm{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
