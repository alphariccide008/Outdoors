import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {  Home, OrderForDeployment, OrderForInstallation, RadioAndTv, OrderForPrinting, PaidOutdoors, CampaignMonitoring, AdvertisingAgency, DigitalMarketing,CreativeCommunication, MediaPlanning , ExpoMarketing} from "./pages";


export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="orderfordeployent" element={<OrderForDeployment />} />
        <Route path="orderforinstallation" element={<OrderForInstallation />} />
        <Route path="radioandtv" element={<RadioAndTv />} />
        <Route path="orderforprinting" element={<OrderForPrinting />} />
        <Route path="paidoutdoors" element={<PaidOutdoors />} />
        <Route path="campaignmonitoring" element={<CampaignMonitoring />} />
        <Route path="advertisingagency" element={<AdvertisingAgency/>} />
        <Route path="digitalmarketing" element={<DigitalMarketing/>} />
        <Route path="creativecommunication" element={<CreativeCommunication/>} />
        <Route path="mediaplanning" element={<MediaPlanning/>} />
        <Route path="expomarketing" element={<ExpoMarketing/>} />

        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
