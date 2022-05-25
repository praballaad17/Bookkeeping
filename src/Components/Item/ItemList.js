import React from 'react'

export default function ItemList({ items }) {
    return (
        <>
            <div>ItemList</div>
            <div>
                {items.map(item => (
                    <div className='itemlist'>
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.openigStockQuantity}
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
