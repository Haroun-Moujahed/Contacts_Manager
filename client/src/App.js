import "./App.css";

// importing from react-router-dom
import { Switch, Route } from "react-router-dom";

// importing components
import NavBar from "./Components/NavBar/NavBar";
import ContactsList from "./Components/ContactsList/ContactsList";
import AddContact from "./Components/AddContact/AddContact";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/addContact" render={() => <AddContact />} />
                <Route path="/" render={() => <ContactsList />} />
            </Switch>
        </div>
    );
}

export default App;
