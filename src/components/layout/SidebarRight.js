import React from 'react';

export const SidebarRight = () => (
    <div className="sidebarRight" data-testid="sidebarRight">
        <div className="profile">
            <div className="profile__name">
                <p>Hello,</p>
                <h3>Burak</h3>
            </div>
            <div className="profile__photo">
                <img src="/images/profilephoto.png" alt="Burak"></img>
            </div>
        </div>
        <div className="inboardNotes">
            <h3>Inboard Notes</h3>
        </div>
    </div>

);