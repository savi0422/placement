import React from "react";
import NavigationMenu from "./components/Navbar";
import Homepage from "./components/Homepage";
import JobList from "./components/JobList";
import Companies from "./components/companies";
import Dashboard from "./components/Dashboard";
import NotificationPage from "./components/NotificationPage";
import Login from "./components/Login";
import StudentRegistration from "./components/StudentRegistration";
import StudentDashboard from "./components/StudentDashboard";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home"
    };

    // Bind the method once in the constructor
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(pageId) {
    console.log("Navigating to:", pageId);
    this.setState({ activePage: pageId });
  }

  renderContent() {
    switch (this.state.activePage) {
      case "home":
        return <Homepage />;
      case "joblist":
        return <JobList navigateTo={this.navigateTo} />;
      case "companies":
        return <Companies navigateTo={this.navigateTo} />;
      case "dashboard":
        return <Dashboard />;
      case "notifications":
        return <NotificationPage />;
      case "login":
        return <Login navigateTo={this.navigateTo} />;
      case "studentregistration":
        return <StudentRegistration navigateTo={this.navigateTo} />;
      case "studentdashboard":
        return <StudentDashboard />;
      default:
        return <Homepage />;
    }
  }

  render() {
    return (
      <div>
        <NavigationMenu navigate={this.navigateTo} />
        <div className="container">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;
