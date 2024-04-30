import Image from 'next/image';

export default function Footer() {
  return (
    <div className="pt-8 px-8 flex flex-col items-center gap-4 lg:gap-6">
      <h1 className="flex flex-row items-center text-zinc-200 text-5xl lg:text-8xl font-black">
        <div className="w-16 h-16 md:w-16 md:h-16 lg:w-28 lg:h-28">
          <Image
            height={1024}
            width={1024}
            alt="The golden eboo"
            className="rounded-xl object-contain"
            src="/images/logo_eboos.png"
          />
        </div>
        Eboos NFT
      </h1>
      <div className="text-zinc-400 text-2xl lg:text-3xl text-center max-w-md lg:max-w-xl">
        Ce sera probablement ton premier NFT mais certainement pas ton
        dernier...
      </div>
      <a href="https://opensea.io/collection/eboos" className="text-xl scale-110 rounded-lg px-4 py-2 bg-blue-500 text-white">Acheter un Eboo</a>
    </div>
  );
}
