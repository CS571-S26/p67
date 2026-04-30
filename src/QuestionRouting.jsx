import React, { createContext, useEffect, useState } from 'react';
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

export const context = createContext();

function QuestionRouting() {

    const questionPath = "/questions";
    const [refresh, setRefresh] = useState(false);

    

    return(
        <context.Provider value={setRefresh}>
            <TopBar refreshInfo={refresh}/>
            <HashRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<App qPath={questionPath} refreshFunc={setRefresh}/>}/>
                        <Route path={questionPath} element={<QuestionsPage/>}/>
                        <Route path="/About" element={<AboutYou/>}/>
                        <Route path="/Contacts" element={<Contact/>}/>
                        <Route path="/Forget" element={<ForgetEverything refreshFunc={setRefresh}/>}/>
                        <Route path="/Others" element={<OtherParticipants/>}/>
                        <Route path="*" element={<BadLink/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </context.Provider>
    )
}

export default QuestionRouting;