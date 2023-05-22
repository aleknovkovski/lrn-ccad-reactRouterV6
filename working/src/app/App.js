import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import Root from "../components/Root";

import "./App.css";


/* Wrap this Root Route to create Router here */
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
        {/* Add Routes here! */}
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path='/articles/:title' element={ <Article /> }/>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
