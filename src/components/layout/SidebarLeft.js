import React, { useState } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { FiActivity, FiMail, FiStar, FiTrash } from 'react-icons/fi';
import { useSelectedBoardValue } from '../../context';
import { Boards } from '../Boards'

export const SidebarLeft = () =>
{
  const { setSelectedBoard } = useSelectedBoardValue;
  const [active, setActive] = useState('Today');
  const [showBoards, setShowBoards] = useState(true);

  return (
    <div className="sidebarLeft" data-testid="sidebarLeft">
      <ul className="sidebarLeft__generic">
        <li data-testid="dashboard" className="dashboard active">
          <span>
            <RiDashboardLine />
          </span>
          {/* Change to "Dashboard" */}
          <span>Dashboard</span>
        </li>
        <li data-testid="activity" className="activity">
          <span>
            <FiActivity />
          </span>
          {/* Change to "Activity" */}
          <span>Activity</span>
        </li>
        <li data-testid="messages" className="messages">
          <span>
            <FiMail />
          </span>
          {/* Change to "Messages" */}
          <span>Messages</span>
        </li>
        <li data-testid="starred" className="starred">
          <span>
            <FiStar />
          </span>
          {/* Change to "Starred" */}
          <span>Starred</span>
        </li>
        <Boards />
      </ul>
      <ul className="sidebarLeft__bottom">
        <li data-testid="deleted" className="deleted">
          <span>
            <FiTrash />
          </span>
          <span>Deleted</span>
        </li>
      </ul>
    </div>
  );
};
