import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faBuildingColumns
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialsMedia = [
    {
      label: "Twitter/X",
      src: "https://twitter.com/eboosnft",
      icon: faXTwitter
    },
    {
      label: "Instagram",
      src: "https://www.instagram.com/eboosnft",
      icon: faInstagram
    },
    {
      label: "Discord",
      src: "https://discord.gg/eboosnft",
      icon: faDiscord
    },
    {
      label: "Snapshot",
      src: "https://snapshot.org/#/eboos.eth",
      icon: faBolt
    },
    {
      label: "Eboos Museum",
      src: "https://opensea.io/0xCe4a69B7Bf70C803e47E54D5E805ff4DbF954864",
      icon: faBuildingColumns
    }
  ]
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="https://eboos.fr/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/images/logo_eboos.png" class="h-8" alt="Eboos Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eboos NFT</span>
          </a>
          <div class="flex gap-6 mt-4 items-center sm:justify-center sm:mt-0">
            {socialsMedia.map((media) => (
              <a key={media.label} href={media.src} target={"_blank"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <div className="w-8 text-white flex-shrink-0">
                  <FontAwesomeIcon icon={media.icon} />
                </div>
                <span class="sr-only">{media.label}</span>
              </a>
            ))}
            <a href="https://opensea.io/collection/eboos" target={"_blank"} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <div className="w-8 text-white flex-shrink-0">
                <img alt="Opensea" className="text-white" src='svg/opensea.svg'></img>
              </div>
            </a>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021-2024 <a href="https://eboos.fr/" class="hover:underline">Eboos NFT</a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
