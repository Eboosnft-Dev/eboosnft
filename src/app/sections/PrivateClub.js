import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckToSlot,
  faLockOpen,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const getContractMetadata = async (contractAddress) => {
  try {
    const res = await fetch(
      `https://eth-mainnet.g.alchemy.com/nft/v2/${process.env.ALCHEMY_API_KEY}/getContractMetadata?contractAddress=${contractAddress}`
    );
    const json = await res.json();
    return json.contractMetadata;
  } catch (e) {
    return {};
  }
};

export default async function Footer() {
  const eboosMetadata = await getContractMetadata(
    process.env.EBOOS_CONTRACT_ADDRESS
  );

  return (
    <div className="px-8 lg:text-center">
      <div className="text-zinc-200 text-4xl lg:text-6xl font-black mb-8 lg:mb-16">
        <div>Un club privé</div>
        <div className="text-indigo-400">pour tout le monde</div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 max-w-screen-xl mx-auto">
        <div className="bg-zinc-900 p-12 lg:p-16 text-left flex flex-col gap-4 lg:gap-8 rounded-2xl">
          <div className="text-zinc-200 text-4xl xl:text-6xl font-black">
            Rejoins la communauté
          </div>
          <div className="text-zinc-400 text-xl lg:text-2xl">
            Pour rejoindre la communauté il suffit de racheter un Eboo sur le
            marché secondaire au prix du marché, celui-ci est fixé par les
            revendeurs.
          </div>
          <div>
            <a href="https://opensea.io/collection/eboos" target={"_blank"} className="text-xl rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300 shadow-lg shadow-blue-500/50">Acheter un Eboo</a>
          </div>
          <div className="text-center flex flex-col items-center pt-8">
            <div className="text-6xl xl:text-8xl font-black text-indigo-400 mb-2">
              {eboosMetadata?.openSea?.floorPrice}Ξ
            </div>
            <div className="text-sm uppercase py-2 px-3 text-indigo-400 border-2 border-indigo-400 rounded-full">
              Prix plancher
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 p-12 lg:p-16 text-left flex flex-col gap-4 lg:gap-8 rounded-2xl justify-center">
          <div className="text-zinc-200 text-4xl xl:text-6xl font-black text-center">
            Bénéficie des avantages
          </div>
          <div className="text-zinc-400 text-xl  flex flex-col divide-y divide-zinc-700 max-w-sm mx-auto">
            <div className="py-4 flex items-center gap-6">
              <div className="w-8  text-green-400 flex-shrink-0">
                <FontAwesomeIcon icon={faCheckToSlot} />
              </div>
              <div>
                Obtiens un droit de vote dans la gestion de la trésorerie
              </div>
            </div>
            <div className="py-4 flex items-center gap-6">
              <div className="w-8  text-green-400 flex-shrink-0">
                <FontAwesomeIcon icon={faLockOpen} />
              </div>
              <div>Accède aux salons privés du serveur Discord des Eboos</div>
            </div>
            <div className="pt-4 flex items-center gap-6">
              <div className="w-8  text-green-400 flex-shrink-0">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </div>
              <div>
                Reçois les droits commerciaux de l&apos;image de ton Eboo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}