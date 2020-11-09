import React from 'react';

export const SidebarRight = () => (
    <div className="sidebarRight" data-testid="sidebarRight">
        <div className="profile">
            <div className="profile__name">
                <p>Hello,</p>
                <h3>Burak</h3>
            </div>
            <div className="profile__photo">
                <img src="/images/profilephoto.png" alt="Burak" width="100" height="100"></img>
            </div>
        </div>
        <div className="inboardNotes">
            <h4>Inboard Notes</h4>
        </div>
    </div>

);