import Guild from "./sections/Guild";
import Treasuries from "./sections/Treasuries";
import Snapshots from "./sections/Snapshots";
import LastSales from "./sections/LastSales";
import History from "./sections/History";
import EschatologyOfDeath from "./sections/EschatologyOfDeath";
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Description from "./sections/Description"
import PrivateClub from "./sections/PrivateClub"

export default async function Home() {
  return (
    <div>
      <div className="flex flex-col gap-16 lg:gap-32">
        <Header/>
        <Description/>
        <PrivateClub/>
        <LastSales />
        <Treasuries />
        <History />
        <Snapshots />
        <EschatologyOfDeath />
        {/* <Guild /> */}
      </div>
      <Footer />
    </div>
  );
}
