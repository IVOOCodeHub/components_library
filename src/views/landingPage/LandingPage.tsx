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

export default function LandingPage(): ReactElement {
  const [isComponentDisplayed, setIsComponentDisplayed] =
    useState<boolean>(false);
  const [componentName, setComponentName] = useState<string>("");
  const [demoMessage, setDemoMessage] = useState<string>("");

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

  const tableDatas = {
    tableHead: [
      "Name",
      "Age",
      "Profession",
      "Location",
      "Experience",
      "Salary",
      "Department",
      "Status",
    ],
    tableBody: [
      [
        "Alice",
        "30",
        "Engineer",
        "New York",
        "5 years",
        "$80,000",
        "R&D",
        "Active",
      ],
      [
        "Bob",
        "25",
        "Designer",
        "San Francisco",
        "3 years",
        "$70,000",
        "Marketing",
        "Active",
      ],
      [
        "Charlie",
        "35",
        "Manager",
        "Chicago",
        "10 years",
        "$95,000",
        "HR",
        "Inactive",
      ],
      [
        "David",
        "40",
        "Developer",
        "Boston",
        "15 years",
        "$120,000",
        "IT",
        "Active",
      ],
      [
        "Eva",
        "28",
        "Data Scientist",
        "Los Angeles",
        "4 years",
        "$90,000",
        "Analytics",
        "Active",
      ],
      [
        "Frank",
        "32",
        "Sales Manager",
        "Miami",
        "7 years",
        "$85,000",
        "Sales",
        "Inactive",
      ],
      [
        "Grace",
        "26",
        "UX Designer",
        "Austin",
        "2 years",
        "$75,000",
        "Design",
        "Active",
      ],
      [
        "Henry",
        "29",
        "Software Engineer",
        "Seattle",
        "6 years",
        "$100,000",
        "Engineering",
        "Active",
      ],
      [
        "Irene",
        "31",
        "Product Manager",
        "New York",
        "8 years",
        "$110,000",
        "Product",
        "Active",
      ],
      [
        "Jack",
        "27",
        "QA Tester",
        "Denver",
        "3 years",
        "$65,000",
        "QA",
        "Active",
      ],
      [
        "Karen",
        "38",
        "Operations Manager",
        "Phoenix",
        "12 years",
        "$95,000",
        "Operations",
        "Inactive",
      ],
      [
        "Leo",
        "33",
        "Project Manager",
        "Dallas",
        "9 years",
        "$105,000",
        "Projects",
        "Active",
      ],
      [
        "Mia",
        "24",
        "Junior Developer",
        "San Jose",
        "1 year",
        "$60,000",
        "IT",
        "Active",
      ],
      [
        "Nick",
        "36",
        "Business Analyst",
        "New York",
        "11 years",
        "$115,000",
        "Business",
        "Active",
      ],
      [
        "Olivia",
        "30",
        "HR Specialist",
        "Houston",
        "5 years",
        "$80,000",
        "HR",
        "Active",
      ],
      [
        "Paul",
        "34",
        "Tech Lead",
        "Los Angeles",
        "10 years",
        "$125,000",
        "Engineering",
        "Inactive",
      ],
      [
        "Quincy",
        "28",
        "Marketing Coordinator",
        "Atlanta",
        "4 years",
        "$70,000",
        "Marketing",
        "Active",
      ],
      [
        "Rachel",
        "29",
        "DevOps Engineer",
        "Chicago",
        "6 years",
        "$95,000",
        "IT",
        "Active",
      ],
      [
        "Sam",
        "37",
        "Customer Support",
        "Seattle",
        "12 years",
        "$70,000",
        "Support",
        "Active",
      ],
      [
        "Tina",
        "32",
        "Scrum Master",
        "Austin",
        "7 years",
        "$100,000",
        "Agile",
        "Inactive",
      ],
      [
        "Uma",
        "41",
        "Executive Assistant",
        "Boston",
        "16 years",
        "$90,000",
        "Admin",
        "Active",
      ],
      [
        "Victor",
        "35",
        "CTO",
        "New York",
        "15 years",
        "$150,000",
        "Management",
        "Active",
      ],
      [
        "Wendy",
        "30",
        "Data Engineer",
        "San Francisco",
        "6 years",
        "$105,000",
        "Data",
        "Active",
      ],
      [
        "Xander",
        "29",
        "Systems Architect",
        "Los Angeles",
        "7 years",
        "$110,000",
        "IT",
        "Active",
      ],
      [
        "Yara",
        "27",
        "Community Manager",
        "Miami",
        "3 years",
        "$65,000",
        "Marketing",
        "Active",
      ],
    ],
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
                  onClick: (): void => buttonTest("bleu"),
                }}
              />
              <Button
                props={{
                  style: "white",
                  text: "Bouton blanc !",
                  onClick: (): void => buttonTest("blanc"),
                }}
              />
              <Button
                props={{
                  style: "grey",
                  text: "Bouton gris !",
                  onClick: (): void => buttonTest("gris"),
                }}
              />
              <Button
                props={{
                  style: "green",
                  text: "Bouton vert !",
                  onClick: (): void => buttonTest("vert"),
                }}
              />
              <Button
                props={{
                  style: "red",
                  text: "Bouton rouge !",
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
                      type: "email",
                      placeholder: "ex: decressac.nicolas@icloud.com",
                    },
                    {
                      label: "Prénom :",
                      type: "text",
                      placeholder: "ex: Nicolas",
                    },
                    {
                      label: "Date de naissance :",
                      type: "date",
                    },
                    {
                      label: "Code TO :",
                      type: "number",
                      placeholder: "ex: 6176",
                    },
                    {
                      label: "Mot de passe TO :",
                      type: "password",
                      placeholder: "ex: decnic",
                    },
                    {
                      label: "CV :",
                      type: "file",
                    },
                  ],
                }}
              />
              <Form
                props={{
                  title: "Formulaire à champ unique",
                  input: {
                    label: "Numéro de SIRET :",
                    type: "text",
                    placeholder: "ex: 71283467876",
                  },
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
        case "Select":
          return (
            <div className={"selectWrapper"}>
              <Select
                options={[
                  { value: "apacvop", label: "apacvop" },
                  { value: "ceram", label: "ceram" },
                  { value: "golfe2", label: "golfe2" },
                ]}
                placeholder={"Campagne"}
              />
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
            Selecteur
          </li>
          <li onClick={(): void => handleComponentChange("Header")}>Header</li>
        </ul>
      </nav>
      <section id={"componentContainer"}>
        {isComponentDisplayed && renderSelectedComponent()}
        {demoMessage && <p>{demoMessage}</p>}
      </section>
    </main>
  );
}
