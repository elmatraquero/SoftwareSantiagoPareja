import { useState } from "react"
import './App.css'
import AddCategory from "./components/AddCategory"
import DisplayGifts from "./components/DisplayGifts";

function App() {
    const [category, setCategory] = useState("");

    return (
        <div className="App">
            <h2>Gif App</h2>
            <AddCategory setCategory={setCategory}/>
            <DisplayGifts category={category}/>

        </div>
    )

}

export default App

