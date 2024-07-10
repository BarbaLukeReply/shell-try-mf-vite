import React from 'react';
import CompanyLogo from "../../assets/company-logo.jpg";
import LogoutLogo from "../../assets/logout.svg";
import AccountLogo from "../../assets/account.svg";
import ItalyFlag from "../../assets/flags/italy.svg";
import CroatianFlag from "../../assets/flags/croatia.svg";
import SpanishFlag from "../../assets/flags/spain.svg";
import FrenchFlag from "../../assets/flags/france.svg";
import GermanFlag from "../../assets/flags/germany.svg";
import EnglishFlag from "../../assets/flags/united-kingdom.svg";
import UkranianFlag from "../../assets/flags/ukraine.svg";
import PolandFlag from "../../assets/flags/poland.svg";
import PortugaiseFlag from "../../assets/flags/portugal.svg";
import { Header as UIHeader} from "@barbalukereply/storybooktrycomponentlib"

export type flagsObject = {
  language: string;
  flag: string;
};

export type HeaderProps = {
  userName: string;
  isMobile: boolean;
  menuItems: string[];
  companyLogo: string;
  logoutLogo: string;
  flags: flagsObject[];
  accountLogo: string;
  language: string;
  companyName: string;
  userCompanyName: string;
  clientCode: string;
};

const Header: React.FC = () => {

  const headerProps: HeaderProps = {
    userName: "John Doe",
    isMobile: false,
    menuItems: ["Home", "About", "Services", "Contact"],
    companyLogo: CompanyLogo,
    logoutLogo: LogoutLogo,
    flags: [
      {
        language: "English",
        flag: EnglishFlag,
      },
      {
        language: "Italian",
        flag: ItalyFlag,
      },
      {
        language: "Spanish",
        flag: SpanishFlag,
      },
      {
        language: "French",
        flag: FrenchFlag,
      },
      {
        language: "German",
        flag: GermanFlag,
      },
      {
        language: "Croatian",
        flag: CroatianFlag,
      },
      {
        language: "Ukrainian",
        flag: UkranianFlag,
      },
      {
        language: "Polish",
        flag: PolandFlag,
      },
      {
        language: "Portuguese",
        flag: PortugaiseFlag,
      },
    ],
    accountLogo: AccountLogo,
    language: "English",
    userCompanyName: "Company Name",
    companyName: "Company Name",
    clientCode: "123456",
  };

  return (
    <UIHeader {...headerProps} />
  );
};

export default Header;

