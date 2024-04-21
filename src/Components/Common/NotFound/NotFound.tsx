import { Button, Image } from "antd";
import { LocalizationTypes } from "../../../Types"
import "./NotFound.scss"
import { useNavigate } from "react-router";
import img from "../../../../public/404.jpg"
const NotFound = ({t} : LocalizationTypes ) => {
    const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="content">
        <Image preview={false} src={img} alt="404" />
        <h2 className="not-title">404</h2>
        <h1 className="not-titleTwo">{t.notFound}</h1>
        <div className="description">
          <p>{t.notDesc1}</p>
          <p>
            {t.notDesc2}
          </p>
        </div>
        <Button size="large" shape="round" block  type="primary" onClick={() => navigate("/")}>
          {t.notBtn}
        </Button>
      </div>
    </div>
  );
}

export default NotFound