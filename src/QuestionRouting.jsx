import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import App from './App';
import BadLink from './Pages/BadLink';
import UnderConstruction from './Pages/UnderConstruction';

function QuestionRouting() {

    const questionPath = "/questions";

    return(
        <HashRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<App qPath={questionPath}/>}/>
                    <Route path={questionPath} element={<UnderConstruction/>}/>
                    <Route path="*" element={<BadLink/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default QuestionRouting;