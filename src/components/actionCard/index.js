import React from 'react';
import './actionCard.css';

const ActionCard = ({title, icon}) => {
    return (
        <div className="action-card">
            <div className="title">
                <span>
                    {title}
                </span>
            </div>

            <div className="icon">
                <i className={icon}/>
            </div>
        </div>
    );
};

export default ActionCard;