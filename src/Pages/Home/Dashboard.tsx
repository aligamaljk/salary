import { LocalizationTypes } from "../../Types";

const Dashboard = ({ t }: LocalizationTypes) => {
  return (
    <>
      <div className="home">
        <h1>{t.home}</h1>
      </div>
    </>
  );
};

export default Dashboard;