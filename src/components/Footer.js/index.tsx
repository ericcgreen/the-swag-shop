const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="container mx-auto px-8">
        <div className="table w-full">
          <div className="block sm:table-cell">
            <p className="text-grey text-sm uppercase sm:mb-6">Links</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  FAQ
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Help
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-grey text-sm uppercase sm:mb-6">Legal</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Terms
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-grey text-sm uppercase sm:mb-6">Social</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Facebook
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Linkedin
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="block sm:table-cell">
            <p className="text-grey text-sm uppercase sm:mb-6">Company</p>
            <ul className="list-reset mb-6 text-xs">
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  Official Blog
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
                  About Us
                </a>
              </li>
              <li className="mt-2 mr-2 inline-block sm:mr-0 sm:block">
                <a href="#" className="text-grey hover:text-grey-dark">
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
