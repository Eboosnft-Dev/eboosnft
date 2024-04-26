import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-8 flex flex-col items-center gap-4 lg:gap-6">
      <h1 className="flex flex-row items-center text-zinc-200 text-6xl lg:text-8xl font-black">
        <Image
          width={130}
          height={130}
          alt="The golden eboo"
          className="rounded-2xl"
          src="/images/logo_eboos.png"
        />
        Eboos NFT
      </h1>
      <div className="text-zinc-400 text-2xl lg:text-3xl text-center max-w-md lg:max-w-xl">
        Ce sera probablement ton premier NFT mais certainement pas ton
        dernier...
      </div>
      <a href="https://opensea.io/collection/eboos" target={"_blank"} className="text-xl scale-110 rounded-full px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Acheter un Eboo</a>
    </div>
  );
}