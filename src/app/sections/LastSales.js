import Image from "next/image";
import getSales from "../../components/getSales";
import tokens from "../../tokens.json";

const getLastSales = async () => {
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': process.env.SIMPLEHASH_API}
  };

  try {
    const res = await fetch('https://api.simplehash.com/api/v0/nfts/transfers/ethereum/0xA52863eeF886b51182aBfD8FB2A6Bb96Bbe92699?include_nft_details=1&exclude_self_transfers=0&only_sales=1&order_by=timestamp_desc&limit=16', options)
    const json = await res.json();
    return json.transfers
  } catch (error) {
    console.log(error)
    return error
  }
};

export default async function LastSales() {
  // const data = await getSales();
  const lastSales = await getLastSales()

  function getHash(tokenId) {
    const START_INDEX = 1336;
    const START_OFFSET = Math.floor((START_INDEX / 8192) * 512) * 16;
    const index = (START_OFFSET + Number(tokenId)) % 8192;
    const eboo = tokens[index];
    return eboo.hash
  }

  // if (!data || !data.nftSales) {
  //   return <div>Données indisponibles.</div>;
  // }

  // const { nftSales } = data;
  return (
    <div>
      <div className="text-center flex items-center flex-col mx-auto mb-8 lg:mb-16 px-8">
        <div className="text-zinc-200 text-4xl lg:text-6xl font-black max-w-sm md:max-w-none">
          Les dernières ventes
        </div>
      </div>
      {/* <div className="w-full flex gap-8 snap-x overflow-x-auto px-8 scrollbar-hide">
        <pre className="text-zinc-300 text-sm">{ JSON.stringify(lastSales, null, 2) }</pre>
      </div> */}
      <div className="w-full flex gap-8 snap-x overflow-x-auto px-8 scrollbar-hide">
        {lastSales.map((node) => (
          <a
            key={`${node.nft_id}`}
            className="h-64 w-64 md:h-72 md:w-72 snap-center md:snap-start md:scroll-ml-16 shrink-0 relative"
            href={`https://opensea.com/assets/ethereum/${process.env.EBOOS_CONTRACT_ADDRESS}/${node.token_id}`}
          >
            <Image
              className="h-full rounded-xl flex-shrink-0 bg-zinc-700"
              width={1024}
              height={1024}
              alt={`Eboo #${node.token_id}`}
              src={`https://ipfs.io/ipfs/${getHash(node.token_id)}`}
            />
            <div className="absolute bottom-4 right-4 bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-sm shadow-lg">
              <div>Eboos #{node.token_id}</div>
              <div className="text-zinc-500 font-bold">
                {(node.sale_details.unit_price / 1e18).toFixed(3)} {node.sale_details.payment_token?.symbol}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
