import React from 'react';
import companyLogo from "../../assets/company-logo.jpg"; // Percorso al logo dell'azienda
import userLogo from "../../assets/user-icon.png"; // Percorso al logo dell'utent
import { Header as UIHeader} from "@barbalukereply/storybooktrycomponentlib"


interface HeaderProps {
  companyName: string;
  companyLogo: string;
  userName: string;
  userLogo: string;
}

const Header: React.FC = () => {
  const companyName = "Nome Azienda";
  const userName = "Nome Utente";

  const headerProps: HeaderProps = {
    companyName: companyName,
    companyLogo: companyLogo,
    userName: userName,
    userLogo: userLogo
  };

  return (
    <UIHeader {...headerProps} />
  );
};

export default Header;