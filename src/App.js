import { useState } from "react";
import Banner from "./components/Banner/Banner";
import TopCategories from "./components/TopCategories/TopCategories";
import Deals from "./components/Deals/Deals";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Brands from "./components/Brands/Brands";
import Essentials from "./components/Essentials/Essentials";
import Footer from "./components/Footer/Footer";
const INITAIL_DEALS = [{
  img:'',
  mean:'Galaxy S22 Ultra',
  cost:32999,
  oldcost: 74999,
  bonus:32999,
  id:1
},
{
  mean:'Galaxy M13 (4GB | 64 GB )',
  cost:10499,
  oldcost: 14999,
  bonus:4500,
  id:2
},
{
  mean:'Galaxy M33 (4GB | 64 GB )',
  cost:16999,
  oldcost: 24999,
  bonus:8000,
  id:3
},
{
  mean:'Galaxy M53 (4GB | 64 GB )',
  cost:31999,
  oldcost: 40999,
  bonus:9000,
  id:4
},
{
  mean:'Galaxy S22 Ultra',
  cost:67999,
  oldcost: 85999,
  bonus:18000,
  id:5
}
]
function App() {
  const [deals,setDeals] = useState(INITAIL_DEALS);
  return (
    <>
      <Nav/>
      <Header/>
      <Banner/>
      <Deals deals={deals} />
      <TopCategories/>
      <Brands/>
      <Essentials/>
      <Footer/>
    </>
  );
}
export default App;
