import { Button, Result } from "antd";
import { LocalizationTypes } from "../../../Types"
import "./NotFound.scss"
import { useNavigate } from "react-router";
const NotFound = ({t} : LocalizationTypes ) => {
    const navigate = useNavigate();
  return (
    <div className="not-found">
      <Result
        status="404"
        title="404"
        subTitle={t.notFound}
        extra={
          <>
            <div className="not-titleTwo">
              <p>{t.notDesc1}</p>
            </div>
            <div className="description">
              <p>{t.notDesc2}</p>
            </div>
            <Button type="primary" onClick={() => navigate('/')}>
              {t.notBtn}
            </Button>
          </>
        }
      />
    </div>
  );
}

export default NotFound