// styles
import "./landingPage.scss";
import "nillys-react-table-library/style";

// types
import { ReactElement } from "react";

// hooks | library
import { useState } from "react";
import { NRTL } from "nillys-react-table-library";
import Select from "react-select"; // https://www.npmjs.com/package/react-select

// components
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import MenuContainer from "../../components/menu/MenuContainer";
import AlertBox from "../../components/alertBox/AlertBox";
import Footer from "../../components/footer/Footer";

// mockup
import {
  asnaExample,
  tableDatas,
} from "../../utils/mockup/tableDemoContent.tsx";
import { demoMenuData } from "../../utils/mockup/menuDemoContent.tsx";

export default function LandingPage(): ReactElement {
  const [isComponentDisplayed, setIsComponentDisplayed] =
    useState<boolean>(false);
  const [componentName, setComponentName] = useState<string>("");
  const [demoMessage, setDemoMessage] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleComponentChange: (name: string) => void = (
    name: string,
  ): void => {
    setComponentName(name);
    setIsComponentDisplayed(true);
  };

  const buttonTest: (text: string) => void = (text: string): void => {
    setDemoMessage(`Bouton ${text} cliqué !`);
    setTimeout((): void => {
      setDemoMessage("");
    }, 1000);
  };

  const renderSelectedComponent: () => ReactElement | null =
    (): ReactElement | null => {
      switch (componentName) {
        case "Button":
          return (
            <div className={"btnWrapper"}>
              <Button
                props={{
                  style: "blue",
                  text: "Bouton bleu !",
                  type: "button",
                  onClick: (): void => buttonTest("bleu"),
                }}
              />
              <Button
                props={{
                  style: "white",
                  text: "Bouton blanc !",
                  type: "button",
                  onClick: (): void => buttonTest("blanc"),
                }}
              />
              <Button
                props={{
                  style: "grey",
                  text: "Bouton gris !",
                  type: "button",
                  onClick: (): void => buttonTest("gris"),
                }}
              />
              <Button
                props={{
                  style: "green",
                  text: "Bouton vert !",
                  type: "button",
                  onClick: (): void => buttonTest("vert"),
                }}
              />
              <Button
                props={{
                  style: "red",
                  text: "Bouton rouge !",
                  type: "button",
                  onClick: (): void => buttonTest("rouge"),
                }}
              />
            </div>
          );
        case "Form":
          return (
            <div className={"formWrapper"}>
              <Form
                props={{
                  title: "Formulaire à multiples champs",
                  inputs: [
                    {
                      label: "Adresse mail :",
                      key: "email",
                      type: "email",
                      placeholder: "ex: decressac.nicolas@icloud.com",
                      required: true,
                    },
                    {
                      label: "Prénom :",
                      key: "firstName",
                      type: "text",
                      placeholder: "ex: Nicolas",
                      required: true,
                    },
                    {
                      label: "Date de naissance :",
                      key: "birthDate",
                      type: "date",
                      required: true,
                    },
                    {
                      label: "Code TO :",
                      key: "matricule",
                      type: "number",
                      placeholder: "ex: 6176",
                      required: true,
                    },
                    {
                      label: "Mot de passe TO :",
                      key: "password",
                      type: "password",
                      placeholder: "ex: decnic",
                      required: true,
                    },
                    {
                      label: "CV :",
                      key: "file",
                      type: "file",
                      required: false,
                    },
                  ],
                  isWithSubmitButton: true,
                }}
              />
              <Form
                props={{
                  title: "Formulaire à champ unique",
                  input: {
                    label: "Numéro de SIRET :",
                    key: "siret",
                    type: "text",
                    placeholder: "ex: 71283467876",
                    required: true,
                  },
                  isWithSubmitButton: false,
                }}
              />
            </div>
          );
        case "Table":
          return (
            <div className={"tableWrapper"}>
              <NRTL
                datas={tableDatas}
                headerBackgroundColor={
                  "linear-gradient(to left, #84CDE4FF, #1092B8)"
                }
                headerHoverBackgroundColor={"#1092B8"}
                showItemsPerPageSelector={true}
                showPreviousNextButtons={true}
                showSearchBar={true}
                showPagination={true}
                enableColumnSorting={true}
                itemsPerPageOptions={[5, 10, 25]}
              />

              <div className={"asnaExampleWrapper"}>
                <NRTL
                  datas={asnaExample}
                  headerBackgroundColor={
                    "linear-gradient(to left, #84CDE4FF, #1092B8)"
                  }
                  headerHoverBackgroundColor={"none"}
                />
              </div>
            </div>
          );
        case "Menu":
          return (
            <div className={"menuWrapper"}>
              <MenuContainer menuData={demoMenuData} />
            </div>
          );
        case "Header":
          return (
            <div className={"headerWrapper"}>
              <Header
                props={{
                  pageURL: "IVOO | Header démo avec bouton aide",
                  helpBtn: true,
                }}
              />
              <Header
                props={{
                  pageURL: "IVOO | Header démo",
                  helpBtn: false,
                }}
              />
            </div>
          );
        case "Footer":
          return (
            <div className={"footerWrapper"}>
              <Footer />
            </div>
          );
        case "Select":
          return (
            <div className={"selectWrapper"}>
              <Select
                options={[
                  { value: "apacvop", label: "apacvo" },
                  { value: "cerame", label: "cerame" },
                  { value: "golfe2p", label: "golfe2" },
                ]}
                placeholder={"Campagne"}
              />
            </div>
          );
        case "Alert":
          return (
            <div className={"triggerModalWrapper"}>
              <Button
                props={{
                  style: "blue",
                  text: "Afficher l'alerte",
                  type: "button",
                  onClick: (): void =>
                    setAlertMessage("Démonstration de l'alerte !"),
                }}
              />
              {alertMessage && (
                <AlertBox message={alertMessage} setMessage={setAlertMessage} />
              )}
            </div>
          );
        default:
          return null;
      }
    };

  return (
    <main id={"landingPage"}>
      <nav>
        <h2>Démo des composants</h2>
        <ul>
          <li onClick={(): void => handleComponentChange("Button")}>Bouton</li>
          <li onClick={(): void => handleComponentChange("Form")}>
            Formulaire
          </li>
          <li onClick={(): void => handleComponentChange("Table")}>Tableau</li>
          <li onClick={(): void => handleComponentChange("Select")}>
            Sélecteur
          </li>
          <li onClick={(): void => handleComponentChange("Menu")}>Menu</li>
          <li onClick={(): void => handleComponentChange("Alert")}>Alerte</li>
          <li onClick={(): void => handleComponentChange("Header")}>Header</li>
          <li onClick={(): void => handleComponentChange("Footer")}>Footer</li>
        </ul>
      </nav>
      <section id={"componentContainer"}>
        {isComponentDisplayed && renderSelectedComponent()}
        {demoMessage && <p>{demoMessage}</p>}
      </section>
    </main>
  );
}
