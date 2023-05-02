import React from "react";

const Sidebar = () => {
    return (
        <aside className="bg-gray-100 py-4 px-4">
            <h2 className="font-bold text-lg mb-4">Sidebar</h2>
            <ul className="list-disc list-inside">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
        </aside>
    );
};

export default Sidebar;