import { Network, Alchemy } from "alchemy-sdk";
import { cache } from "react";

const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

const getLatestSalesDataWithMetadata = cache(async () => {
    try {
        const contractAddress = "0xA52863eeF886b51182aBfD8FB2A6Bb96Bbe92699";

        let salesData = await alchemy.nft.getNftSales({
            contractAddress,
            limit: 16,
            order: 'desc',
            taker: 'BUYER',
            fromBlock: '0',
            toBlock: 'latest',
        });

        let enrichedSalesData = [];

        for (const sale of salesData.nftSales) {
          if (!sale.contractAddress || !sale.tokenId) {
            console.error("Vente invalide: contractAddress ou tokenId manquant", sale);
            continue;
          }

          let metadata;
          try {
            metadata = await alchemy.nft.getNftMetadata(
                sale.contractAddress,
                sale.tokenId
              );
          } catch (error) {
            console.error(`Erreur lors de la récupération des métadonnées pour tokenId ${sale.tokenId}:`, error);
            metadata = null;
          }

          enrichedSalesData.push({
            ...sale,
            metadata: metadata,
          });
        }

        return { nftSales: enrichedSalesData };
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de vente avec métadonnées:", error);
        throw error;
    }
});

export default getLatestSalesDataWithMetadata;
