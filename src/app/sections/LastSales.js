import Image from "next/image";
import getSales from "../../components/getSales";
import tokens from "../../tokens.json";

export default async function LastSales() {
  const data = await getSales();

  function getHash(tokenId) {
    const START_INDEX = 1336;
    const START_OFFSET = Math.floor((START_INDEX / 8192) * 512) * 16;
    const index = (START_OFFSET + Number(tokenId)) % 8192;
    const eboo = tokens[index];
    return eboo.hash
  }

  if (!data || !data.nftSales) {
    return <div>Données indisponibles.</div>;
  }

  const { nftSales } = data;

  return (
    <div>
      <div className="text-center flex items-center flex-col mx-auto mb-8 lg:mb-16 px-8">
        <div className="text-zinc-200 text-4xl lg:text-6xl font-black max-w-sm md:max-w-none">
          Les dernières ventes
        </div>
      </div>
      <div className="w-full flex gap-8 snap-x overflow-x-auto px-8 scrollbar-hide">
      {/* <pre className="text-zinc-300 text-sm">
          {JSON.stringify(nftSales, null, 2)}
        </pre> */}
        {nftSales.map((node) => (
          <a
            key={`${node.metadata.tokenId}${node.sellerFee.amount}`}
            className="h-64 w-64 md:h-72 md:w-72 snap-center md:snap-start md:scroll-ml-16 shrink-0 relative"
            href={`https://opensea.com/assets/ethereum/${process.env.EBOOS_CONTRACT_ADDRESS}/${node.metadata.tokenId}`}
          >
            <Image
              className="h-full rounded-xl flex-shrink-0 bg-zinc-700"
              width={1024}
              height={1024}
              alt={`Eboo #${node.metadata.tokenId}`}
              src={`https://ipfs.io/ipfs/${getHash(node.metadata.tokenId)}`}
            />
            <div className="absolute bottom-4 right-4 bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-sm shadow-lg">
              <div>Eboos #{node.metadata.tokenId}</div>
              <div className="text-zinc-500 font-bold">
                {(parseInt(node.sellerFee.amount) / 1e18).toFixed(3)} {node.sellerFee.symbol}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
