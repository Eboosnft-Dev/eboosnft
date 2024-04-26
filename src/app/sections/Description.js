import Image from "next/image";

function Eboo({ src }) {
  return (
    <Image
      width={960}
      height={960}
      alt="un eboo sauvage"
      className="rounded-2xl shadow-2xl shadow-amber-400/25"
      src={src}
    />
  );
}

export default function Footer() {
  return (
    <div className="px-8 sm:max-w-screen-sm lg:max-w-screen-lg mx-auto lg:grid grid-cols-12 gap-16">
      <div className="col-span-4 flex flex-col justify-center h-full mb-8">
        <Eboo src="https://i.seadn.io/gae/q6FvF8DXwjgKoBowuXpS3QgLaQ2vBXdGZwwheft05qEmve-7_CFsNpSQTZKI6j33eZNUbyD8SFgJayuVUXTE8EMTt_oF0QTzlJFn?auto=format&w=1000" />
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 col-span-8 justify-center h-full">
        <div className="text-zinc-200 text-4xl lg:text-6xl font-black">
          <div>Une collection pour</div>
          <div className="text-amber-400">découvrir les NFT</div>
        </div>
        <div className="text-zinc-400 text-xl lg:text-2xl">
          Eboos est une collection de{" "}
          <a
            className="text-zinc-200 hover:underline font-black"
            href="https://snapshot.org/#/eboos.eth/proposal/0x2b2568b85153bed1c9aca7170f119c66f7c35838b4d84ceb1136009fd1e94447"
          >
            1 040
          </a>{" "}
          uniques NFT. Cette collection s&apos;adresse aux gens voulant
          découvrir le fabuleux  monde des NFT par le biais d&apos;un projet
          pas trop cher encadré par une communauté bienveillante.
        </div>
        <div>
          <a href="https://opensea.io/collection/eboos" target={"_blank"} className="text-xl mx-auto rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300 shadow-lg shadow-blue-500/50">Acheter un Eboo</a>
        </div>
      </div>
    </div>
  );
}