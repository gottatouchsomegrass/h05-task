export default function Footer(){
    return(
        <>
    <footer className="bg-[#F0F0F0] text-gray-700">
      {/* Newsletter Section */}
      <div className='mb-[50px] sm:mb-20'>
        <div className='px-4 xl:px-0'>
          <div className='bg-[linear-gradient(to_bottom,white_0%,white_50%,#F0F0F0_50%,#F0F0F0_100%)]'>
            <div className="bg-black text-white rounded-3xl px-6 py-8 md:flex md:items-center md:justify-between m-auto max-w-7xl z-10">
              <h2 className="text-3xl font-extrabold uppercase leading-tight md:w-1/2 md:text-left text-center">
                Stay upto date about<br />our latest offers
              </h2>
              <div className="mt-6 md:mt-0 md:w-1/2 flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full flex-1 px-4 py-3 rounded-full text-black focus:outline-black bg-white"
                />
                <button className="w-full mt-4 px-6 py-3 bg-white hover:bg-gray-300 text-black rounded-full font-medium cursor-pointer">
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <img src="/SHOP.CO-logo.svg" alt="Shop.co Logo" className="h-8 mb-4" />
          <p className="mb-6">
            We have clothes that suits your style and<br />which you’re proud to wear. From women to men.
          </p>
          <div className="flex space-x-4">
            <img src="/twitter.svg" alt="Twitter" className="h-6 w-6 cursor-pointer" />
            <img src="/facebook.svg" alt="Facebook" className="h-6 w-6 cursor-pointer" />
            <img src="/instagram.svg" alt="Instagram" className="h-6 w-6 cursor-pointer" />
            <img src="/github.svg" alt="Github" className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:col-span-4">
          <div>
            <h3 className="font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase">FAQ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
              <li><a href="#" className="hover:underline">Orders</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 uppercase">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <img src="/visa.svg" alt="Visa" className="h-8 cursor-pointer" />
            <img src="/mastercard.svg" alt="Mastercard" className="h-8 cursor-pointer" />
            <img src="/paypal.png" alt="PayPal" className="h-8 cursor-pointer" />
            <img src="/applepay.svg" alt="Apple Pay" className="h-8 cursor-pointer" />
            <img src="/googlepay.svg" alt="Google Pay" className="h-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
        </>
    );
}