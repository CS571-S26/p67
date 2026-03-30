import React, { useEffect, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';
import App from './App';

function QuestionRouting() {
    return
        <HashRouter>
            <Route path="/" element={<App/>}>

            </Route>
        </HashRouter>
}

export default QuestionRouting;