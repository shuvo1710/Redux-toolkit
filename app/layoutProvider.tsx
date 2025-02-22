"use client"
import React from 'react';
import store from "@/app/store/store";
import {Provider} from "react-redux";

const LayoutProvider = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default LayoutProvider;