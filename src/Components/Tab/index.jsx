import React, { useEffect, useState } from 'react'

const Tab = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active)
    const [tabsData, setTabsData] = useState([])

    useEffect(() => {
        let data = []
        React.Children.forEach(children, element => {
            if (!React.isValidElement(element)) return

            const { props: { tab, children } } = element
            data.push({ tab, children })
        })
        setTabsData(data)
    }, [children])


    return (
        <>
            <div className='tab'>
                <ul className='tab--list'>
                    {tabsData.map(({ tab }, idx) => (
                        <li className=''>
                            <div
                                className={`tab--title ${idx === activeTab ? "tab--active" : ""}`}
                                href="#"
                                onClick={() => setActiveTab(idx)}>
                                {tab}
                            </div>
                        </li>
                    ))}
                </ul>

                <div>
                    {tabsData[activeTab] && tabsData[activeTab].children}
                </div>
            </div>
        </>
    )
}

const TabPane = ({ children }) => {
    return { children }
}
Tab.TabPane = TabPane
export default Tab