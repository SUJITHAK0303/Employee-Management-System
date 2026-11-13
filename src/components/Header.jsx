
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";

function Header() {
  return (
    <header className="app-header">

      {/* Application Logo and Name */}
      <div className="header-brand">

        <div className="brand-logo">
          <FontAwesomeIcon icon={faUsers} />
        </div>

        <div className="brand-info">
          <h2>Employee Management system
          </h2>
          <span>Management Portal</span>
        </div>

      </div>

      {/* Header Actions */}
      <div className="header-actions">

        <div className="profile-section">

          <FontAwesomeIcon
            icon={faCircleUser}
            className="profile-icon"
          />
        </div>

      </div>

    </header>
  );
}

export default Header;
