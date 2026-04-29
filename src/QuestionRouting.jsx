import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import App from './App';
import BadLink from './Pages/BadLink';
import UnderConstruction from './Pages/UnderConstruction';
import QuestionsPage from './Pages/QuestionsPage';
import TopBar from './PrimaryNavigation';
import AboutYou from './Pages/AboutYou';
import Contact from './Pages/ContactUs';
import ForgetEverything from './Pages/Forget';
import OtherParticipants from './Pages/Others';

function QuestionRouting() {

    const questionPath = "/questions";

    return(
        <div>
            <TopBar/>
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<App qPath={questionPath}/>}/>
                        <Route path={questionPath} element={<QuestionsPage/>}/>
                        <Route path="/About" element={<AboutYou/>}/>
                        <Route path="/Contacts" element={<Contact/>}/>
                        <Route path="/Forget" element={<ForgetEverything/>}/>
                        <Route path="/Others" element={<OtherParticipants/>}/>
                        <Route path="*" element={<BadLink/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default QuestionRouting;