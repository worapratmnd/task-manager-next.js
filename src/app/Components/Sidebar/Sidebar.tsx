"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";
import menu from "@/app/utils/menu";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
    const { theme } = useGlobalState();
    const router = useRouter();

    const handleClick = (link: string) => {
        router.push(link);
    };

    return (
        <SidebarStyled theme={theme}>
            <div className="profile">
                <div className="profile-overlay">
                    <Image width={70} height={70} src="/images/profile.png" alt="profile" />
                </div>
                <h1>
                    <span>Woraprat</span>
                    <span>M.</span>
                </h1>
            </div>
            <ul className="nav-items">
                {menu.map((item) => (
                    <li className={`nav-item`} onClick={() => handleClick(item.link)} key={item.id}>
                        <a href={item.link}>
                            {item.icon}
                            <span>{item.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${props => props.theme.sidebarWidth};
    background-color: ${props => props.theme.colorBg2};
    border-right: 2px solid ${props => props.theme.borderColor};
    border-radius: 1rem;
`;
export default Sidebar;