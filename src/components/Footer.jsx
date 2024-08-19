import facebook from "../assets/icon-facebook.svg"
import twitter from "../assets/icon-twitter.svg"
import pinterest from "../assets/icon-pinterest.svg"
import instagram from "../assets/icon-instagram.svg"
import logo from "../assets/footer-logo.svg"


export default function Footer() {
  return (
    <footer className="bg-slate-800 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 justify-items-center md:grid-cols-3 lg:grid-cols-5">
            <article>
                <img src={logo} alt=""/>
            </article>

            <article>
                <h3 className="text-white text-lg font-bold tracking-wide">Features</h3>
                <ul>
                    <li><button className="but">Link Shortening</button></li>
                    <li><button className="but">Branded Links</button></li>
                    <li><button className="but">Analytics</button></li>
                </ul>
            </article>

            <article>
                <h3 className="text-white text-lg font-bold tracking-wide">Resources</h3>
                <ul>
                    <li><button className="but">Blog</button></li>
                    <li><button className="but">Developers</button></li>
                    <li><button className="but">Support</button></li>
                </ul>
            </article>

            <article>
                <h3 className="text-white text-lg font-bold tracking-wide">Company</h3>
                <ul>
                    <li><button className="but">About</button></li>
                    <li><button className="but">Our Team</button></li>
                    <li><button className="but">Careers</button></li>
                    <li><button className="but">Contact</button></li>
                </ul>
            </article>

            <article>
                <ul className="flex items-center">
                    <li><img src={facebook} alt="" /></li>
                    <li className="ml-4"><img src={twitter} alt="" /></li>
                    <li className="mx-5"><img src={pinterest} alt="" /></li>
                    <li><img src={instagram} alt="" /></li>
                </ul>
            </article>


        </div>
    </footer>
  )
}
