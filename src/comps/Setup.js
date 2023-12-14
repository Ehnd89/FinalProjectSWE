import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./setup.css";

function Setup() {
  const majorOptions = [
    { label: "Accounting", value: "Accounting" },
    {
      label: "African-american/black studies",
      value: "African-american/black studies",
    },
    { label: "African studies", value: "African studies" },
    { label: "Art/art studies", value: "Art/art studies" },
    {
      label: "Biology/biological sciences",
      value: "Biology/biological sciences",
    },
    {
      label: "Business, management, marketing, and related support services",
      value: "Business, management, marketing, and related support services",
    },
    { label: "Chemical engineering", value: "Chemical engineering" },
    { label: "Chemistry", value: "Chemistry" },
    { label: "Civil engineering", value: "Civil engineering" },
    {
      label: "Clinical laboratory science/medical technology/technologist",
      value: "Clinical laboratory science/medical technology/technologist",
    },
    {
      label: "Communication, journalism, and related programs",
      value: "Communication, journalism, and related programs",
    },
    { label: "Computer engineering", value: "Computer engineering" },
    { label: "Computer science", value: "Computer science" },
    {
      label: "Criminal justice/safety studies",
      value: "Criminal justice/safety studies",
    },
    { label: "Economics", value: "Economics" },
    {
      label: "Electrical and electronics engineering",
      value: "Electrical and electronics engineering",
    },
    {
      label: "Elementary education and teaching",
      value: "Elementary education and teaching",
    },
    {
      label: "English language and literature",
      value: "English language and literature",
    },
    { label: "Finance", value: "Finance" },
    {
      label: "French language and literature",
      value: "French language and literature",
    },
    {
      label: "Health and physical education/fitness",
      value: "Health and physical education/fitness",
    },
    {
      label: "Health and physical education/fitness0.8%",
      value: "Health and physical education/fitness0.8%",
    },
    {
      label: "Health care administration/management",
      value: "Health care administration/management",
    },
    {
      label: "Health services/allied health/health sciences",
      value: "Health services/allied health/health sciences",
    },
    { label: "History", value: "History" },
    {
      label: "Human development and family studies",
      value: "Human development and family studies",
    },
    {
      label: "International business/trade/commerce",
      value: "International business/trade/commerce",
    },
    {
      label: "Logistics, materials, and supply chain management",
      value: "Logistics, materials, and supply chain management",
    },
    {
      label: "Management information systems",
      value: "Management information systems",
    },
    { label: "Marketing", value: "Marketing" },
    { label: "Mathematics", value: "Mathematics" },
    { label: "Mechanical engineering", value: "Mechanical engineering" },
    {
      label: "Medical radiologic technology/science - radiation therapist",
      value: "Medical radiologic technology/science - radiation therapist",
    },
    {
      label: "Multi-/interdisciplinary studies",
      value: "Multi-/interdisciplinary studies",
    },
    { label: "Music", value: "Music" },
    { label: "Nutrition sciences", value: "Nutrition sciences" },
    { label: "Other", value: "Other" },
    {
      label: "Parks, recreation, leisure, and fitness studies",
      value: "Parks, recreation, leisure, and fitness studies",
    },
    { label: "Philosophy", value: "Philosophy" },
    { label: "Physics", value: "Physics" },
    {
      label: "Political science and government",
      value: "Political science and government",
    },
    { label: "Psychology", value: "Psychology" },
    {
      label: "Public relations, advertising, and applied communication",
      value: "Public relations, advertising, and applied communication",
    },
    {
      label: "Registered nursing/registered nurse",
      value: "Registered nursing/registered nurse",
    },
    {
      label: "Spanish language and literature",
      value: "Spanish language and literature",
    },
    { label: "Sociology", value: "Sociology" },
    {
      label: "Theatre/theatre arts management",
      value: "Theatre/theatre arts management",
    },
  ];

  const minorOptions = [
    { label: "Accounting", value: "Accounting" },
    {
      label: "African-american/black studies",
      value: "African-american/black studies",
    },
    { label: "African studies", value: "African studies" },
    { label: "Art/art studies", value: "Art/art studies" },
    {
      label: "Biology/biological sciences",
      value: "Biology/biological sciences",
    },
    {
      label: "Business, management, marketing, and related support services",
      value: "Business, management, marketing, and related support services",
    },
    { label: "Chemical engineering", value: "Chemical engineering" },
    { label: "Chemistry", value: "Chemistry" },
    { label: "Civil engineering", value: "Civil engineering" },
    {
      label: "Clinical laboratory science/medical technology/technologist",
      value: "Clinical laboratory science/medical technology/technologist",
    },
    {
      label: "Communication, journalism, and related programs",
      value: "Communication, journalism, and related programs",
    },
    { label: "Computer engineering", value: "Computer engineering" },
    { label: "Computer science", value: "Computer science" },
    {
      label: "Criminal justice/safety studies",
      value: "Criminal justice/safety studies",
    },
    { label: "Economics", value: "Economics" },
    {
      label: "Electrical and electronics engineering",
      value: "Electrical and electronics engineering",
    },
    {
      label: "Elementary education and teaching",
      value: "Elementary education and teaching",
    },
    {
      label: "English language and literature",
      value: "English language and literature",
    },
    { label: "Finance", value: "Finance" },
    {
      label: "French language and literature",
      value: "French language and literature",
    },
    {
      label: "Health and physical education/fitness",
      value: "Health and physical education/fitness",
    },
    {
      label: "Health and physical education/fitness0.8%",
      value: "Health and physical education/fitness0.8%",
    },
    {
      label: "Health care administration/management",
      value: "Health care administration/management",
    },
    {
      label: "Health services/allied health/health sciences",
      value: "Health services/allied health/health sciences",
    },
    { label: "History", value: "History" },
    {
      label: "Human development and family studies",
      value: "Human development and family studies",
    },
    {
      label: "International business/trade/commerce",
      value: "International business/trade/commerce",
    },
    {
      label: "Logistics, materials, and supply chain management",
      value: "Logistics, materials, and supply chain management",
    },
    {
      label: "Management information systems",
      value: "Management information systems",
    },
    { label: "Marketing", value: "Marketing" },
    { label: "Mathematics", value: "Mathematics" },
    { label: "Mechanical engineering", value: "Mechanical engineering" },
    {
      label: "Medical radiologic technology/science - radiation therapist",
      value: "Medical radiologic technology/science - radiation therapist",
    },
    {
      label: "Multi-/interdisciplinary studies",
      value: "Multi-/interdisciplinary studies",
    },
    { label: "Music", value: "Music" },
    { label: "Nutrition sciences", value: "Nutrition sciences" },
    { label: "Other", value: "Other" },
    {
      label: "Parks, recreation, leisure, and fitness studies",
      value: "Parks, recreation, leisure, and fitness studies",
    },
    { label: "Philosophy", value: "Philosophy" },
    { label: "Physics", value: "Physics" },
    {
      label: "Political science and government",
      value: "Political science and government",
    },
    { label: "Psychology", value: "Psychology" },
    {
      label: "Public relations, advertising, and applied communication",
      value: "Public relations, advertising, and applied communication",
    },
    {
      label: "Registered nursing/registered nurse",
      value: "Registered nursing/registered nurse",
    },
    {
      label: "Spanish language and literature",
      value: "Spanish language and literature",
    },
    { label: "Sociology", value: "Sociology" },
    {
      label: "Theatre/theatre arts management",
      value: "Theatre/theatre arts management",
    },
  ];

  const monthOptions = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const yearOptions = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
  ];

  const navigate = useNavigate();

  const [selectedMajor, setSelectedMajor] = useState("");
  const [selectedMinor, setSelectedMinor] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMajorChange = (e) => {
    setSelectedMajor(e.target.value);
  };

  const handleMinorChange = (e) => {
    setSelectedMinor(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const { state } = useLocation();
  //   const { user } = state; // Read values passed on state

  //   const use = state;

  const submitForm = (e) => {
    e.preventDefault();
    state.major = selectedMajor;
    state.minor = selectedMinor;
    state.graduation_month = selectedMonth;
    state.graduation_year = selectedYear;
    localStorage.setItem("user", JSON.stringify(state));
    navigate("/chat");
  };
  console.log("fromSetup Lo", state);

  return (
    <>
      <div className="QuestionBox">
        <p className="welcome">Welcome, set up your profile!</p>
        <form className="setupForm" onSubmit={submitForm}>
          <div className="box">
            <label htmlFor="major">Major:</label>
            <select
              id="major"
              name="major"
              value={selectedMajor}
              onChange={handleMajorChange}
            >
              <option value="" disabled>
                Select your major
              </option>
              {majorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="box"></div>
          <label htmlFor="minor">Minor:</label>
          <select
            id="minor"
            name="minor"
            value={selectedMinor}
            onChange={handleMinorChange}
          >
            <option value="" disabled>
              Select your minor
            </option>
            {minorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="box"></div>
          <div className="graduationDate">
            <label htmlFor="month">Expected Graduation Month:</label>
            <select
              id="month"
              name="month"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              <option value="" disabled>
                Select month
              </option>
              {monthOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="box"></div>
            <label htmlFor="year">Expected Graduation Year:</label>
            <select
              id="year"
              name="year"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="" disabled>
                Select year
              </option>
              {yearOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="Continuebtn">
            <button className="continuebtn" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Setup;