import { useEffect } from "react";
import { BsStar } from "react-icons/bs";
import "./style.css";
import axios from "axios";
import data from './data.json';
const Product = () => {
  // const data = {
  //   id: 1,
  //   name: "Bí mật của may mắn",
  //   price: 10000,
  //   img: "https://th.bing.com/th/id/R.1e8e7f66cbee6c6fab94d8fada8daf7c?rik=%2fW4nkjVfcECZ8w&pid=ImgRaw&r=0",
  //   link_data: "https://truyenfull.vn/bi-mat-cua-may-man-good-luck/"
  // };

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
              Hai tác giả Hoàng Anh Đức và Tô Thụy Diễm Quyên muốn đưa ra cách
              tiếp cận nhẹ nhàng và trực quan cho cả các giáo viên lẫn học sinh
              đối với Học tập qua dự án; sử dụng các dự án để làm những ví dụ đa
              dạng, đa chiều và gắn liền với thực tế nhất, qua đó giúp người đọc
              tự xây dựng nên kho tàng kiến thức và kỹ năng của chính bản thân
              mình.
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
