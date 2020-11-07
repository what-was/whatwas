import React from 'react';
import { RiDashboardLine } from "react-icons/ri";
import { FiActivity, FiMail, FiStar, FiTrash } from "react-icons/fi";

export const SidebarLeft = () => (
    <div className="sidebarLeft" data-testid="sidebarLeft">
        <ul className="sidebar__generic">
            <li>
                <span>
                    <RiDashboardLine />
                </span>
                <span>Dashboard</span>
            </li>
            <li>
                <span>
                    <FiActivity />
                </span>
                <span>Activity</span>
            </li>
            <li>
                <span>
                    <FiMail />
                </span>
                <span>Messages</span>
            </li>
            <li>
                <span>
                    <FiStar />
                </span>
                <span>Starred</span>
            </li>
        </ul>
        <ul className="sidebar__bottom">
            <li>
                <span><FiTrash/></span>
                <span>Deleted</span>    
            </li>
        </ul>
    </div>
);
