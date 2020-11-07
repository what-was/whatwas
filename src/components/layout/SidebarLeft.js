import React from 'react';
import { RiDashboardLine } from "react-icons/ri";
import { FiActivity, FiMail, FiStar, FiTrash } from "react-icons/fi";

export const SidebarLeft = () => (
    <div className="sidebarLeft" data-testid="sidebarLeft">
        <ul className="sidebarLeft__generic">
            <li data-testid="dashboard" className="dashboard">
                <span>
                    <RiDashboardLine />
                </span>
                <span>Dashboard</span>
            </li>
            <li data-testid="activity" className="activity">
                <span>
                    <FiActivity />
                </span>
                <span>Activity</span>
            </li>
            <li data-testid="messages" className="messages">
                <span>
                    <FiMail />
                </span>
                <span>Messages</span>
            </li>
            <li data-testid="starred" className="starred">
                <span>
                    <FiStar />
                </span>
                <span>Starred</span>
            </li>
        </ul>
        <ul className="sidebarLeft__bottom">
            <li data-testid="deleted" className="deleted">
                <span><FiTrash/></span>
                <span>Deleted</span>    
            </li>
        </ul>
    </div>
);
