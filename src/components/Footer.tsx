import Logo from '@/assets/logo.svg'
import { FOOTER_COMPANY, FOOTER_LEARN, FOOTER_MARKETPLACE, FOOTER_MYACCOUNT, FOOTER_RESOURCES, FOOTER_STATS } from '@/consts'
import { SocialIcon } from 'react-social-icons'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="mt-10 bg-[rgb(24,104,183)] pt-10 font-poppins text-white">
      <Container>
        <div className="grid grid-cols-1 gap-x-24 gap-y-10 text-center lg:grid-cols-2 lg:text-left">
          <div>
            <h5 className="text-xl font-medium">Stay in the loop</h5>
            <p className="mt-3 text-gray-100">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for
              navigating OpenSea.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                name="newsletter"
                id="newsletter"
                className="flex-1 rounded-xl border-transparent py-3 text-center font-sans text-black shadow focus:border-gray-500 sm:text-left"
                placeholder="Your email address"
              />
              <button className="flex-none rounded-xl border-footer-button bg-footer-button px-8 py-3 font-sans font-medium text-white shadow hover:brightness-110">
                Sign up
              </button>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-medium">Join the community</h5>

            <div className="mt-4 inline-flex gap-x-2">
              {['twitter', 'instagram', 'reddit', 'youtube', 'email'].map((social) => (
                <SocialIcon
                  key={social}
                  url="#"
                  network={social}
                  className="[&_svg]:!rounded-xl [&_svg]:border [&_svg]:border-footer-button [&_svg]:hover:brightness-110"
                  fgColor="#fff"
                  bgColor="rgb(32,129,226)"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 gap-x-16 border-t border-white/20 py-14 lg:flex">
          <div className="flex flex-col items-center text-center lg:block lg:w-1/4 lg:flex-none lg:items-start lg:text-start">
            <img src={Logo} loading="lazy" className="h-12 w-12" />
            <a href="/" className="my-2 block text-xl font-semibold">
              OpenSea
            </a>
            <p>
              The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell,
              and discover exclusive digital items.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-x-10 gap-y-14 text-center font-sans lg:grid-cols-4 lg:text-start">
              <div>
                <h3 className="mb-5 font-semibold">Marketplace</h3>
                <FooterLinks links={FOOTER_MARKETPLACE} />
              </div>
              <div>
                <h3 className="mb-5 font-semibold">My Account</h3>
                <FooterLinks links={FOOTER_MYACCOUNT} />
                <h3 className="mb-5 mt-14 font-semibold">Stats</h3>
                <FooterLinks links={FOOTER_STATS} />
              </div>
              <div>
                <h3 className="mb-5 font-semibold">Resources</h3>
                <FooterLinks links={FOOTER_RESOURCES} />
              </div>
              <div>
                <h3 className="mb-5 font-semibold">Company</h3>
                <FooterLinks links={FOOTER_COMPANY} />
                <h3 className="mb-5 mt-14 font-semibold">Learn</h3>
                <FooterLinks links={FOOTER_LEARN} />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 py-8">
          <p className="text-center text-xs font-light">
            Cloned by{' '}
            <a href="https://heyley.dev" target="_blank" className="font-normal underline decoration-teal-500">
              heyley.dev
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}

function FooterLinks({ links }: { links: string[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link, i) => (
        <li key={i}>
          <a href="#" className="text-sm hover:font-medium">
            {link}
          </a>
        </li>
      ))}
    </ul>
  )
}
