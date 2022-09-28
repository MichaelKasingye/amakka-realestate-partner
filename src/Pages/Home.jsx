import React from "react";

// import Services from "../Components/Services";
// import Sidebar from "../Components/Sidebar";
import { CardWidgetMini } from "../Components/Widget/Cards";
import BodyTitle from "../Components/BodyTitle";
import { useSelector } from "react-redux";
import { ClientInterestSelector } from "../redux/features/ClientInterest/ClientInterestSlice";
import { UserCodeSelector } from "../redux/features/userCode/UserCodeSlice";
import ErrorMessage from "../Components/ErrorMessage";

function Home() {
  const { ClientInterest, loading } = useSelector(ClientInterestSelector);
  const { UserCode } = useSelector(UserCodeSelector);
  console.log(UserCode);
  const ClientInterestCodeData = ClientInterest.filter(
    (filteredCodeData) => filteredCodeData.unit.developerCODE === UserCode.code
  );
  // console.log(ClientInterestCodeData);

  return (
    <>
      {ClientInterestCodeData.length === 0 && <ErrorMessage />}

      <BodyTitle title="Dashboard" />
      <section className="section dashboard">
        <div className="row">
          <CardWidgetMini
            ClientData={ClientInterestCodeData}
            loading={loading}
          />
          {/* <RightSideColumn/> */}
        </div>
      </section>
    </>
  );
}

export default Home;
