import React from 'react';

function SlotComponentToggle() {
    return (
        <div className="flex justify-end">
            <div className="btn-group">
                <button className="btn btn-sm btn-active">Today</button>
                <button className="btn btn-sm">Tommorow</button>
            </div>
        </div>
    );
}

export default SlotComponentToggle;