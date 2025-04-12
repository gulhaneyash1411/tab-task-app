import React from 'react';

interface Props {
  activeTab: number;
  onChangeTab: (tab: number) => void;
  children: React.ReactNode[];
}

const Tabs = ({ activeTab, onChangeTab, children }: Props) => (
  <div className="tabs-wrapper">
    <ul className="nav nav-tabs">
      {['Tab 1', 'Tab 2', 'Tab 3'].map((label, index) => (
        <li key={label} className="nav-item">
          <button
            className={`nav-link ${activeTab === index ? 'active' : ''}`}
            onClick={() => onChangeTab(index)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
    <div className="tab-content mt-3">
      {children[activeTab]}
    </div>
  </div>
);

export default Tabs;
