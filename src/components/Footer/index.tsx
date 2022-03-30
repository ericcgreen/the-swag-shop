const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="container mx-auto px-8">
        <div className="table w-full">
          <div className="block sm:table-cell">
            <p className="text-sm uppercase text-gray-700 sm:mb-6">Links</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Help
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-sm uppercase text-gray-700 sm:mb-6">Legal</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Terms
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-sm uppercase text-gray-700 sm:mb-6">Social</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Linkedin
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-sm uppercase text-gray-700 sm:mb-6">
              The Swag Shop
            </p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Official Blog
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  About Us
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-gray-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
