"use client";

import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
    return (
        <GlobalStyls>
            {children}
        </GlobalStyls>
    )
}

const GlobalStyls = styled.div`
   padding: 2.5rem;
   display: flex;
   gap: 2.5rem;
   height: 100%;
`;

export default GlobalStyleProvider;