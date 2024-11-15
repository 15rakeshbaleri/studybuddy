import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
function Footer_below() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            STUDDYBUDDY © 2024 Company
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://twitter.com">
              <FaTwitter size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://instagram.com">
              <FaInstagram size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://facebook.com"
              target="_blank"
            >
              <FaFacebookF size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default Footer_below;
