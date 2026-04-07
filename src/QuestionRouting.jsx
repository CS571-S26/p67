import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import App from './App';
import BadLink from './Pages/BadLink';
import UnderConstruction from './Pages/UnderConstruction';
import QuestionsPage from './Pages/QuestionsPage';
import TopBar from './PrimaryNavigation';

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
                        <Route path="/About" element={<UnderConstruction/>}/>
                        <Route path="/Contacts" element={<UnderConstruction/>}/>
                        <Route path="*" element={<BadLink/>}/>
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default QuestionRouting;