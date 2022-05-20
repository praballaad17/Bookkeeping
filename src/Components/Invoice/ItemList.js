import React from 'react'

export default function ItemList() {
    const [itemlist, setitemlist] = useState([])

    const addItem = () => {
        setitemlist([...itemList, {

        }])
    }
    return (
        <div>ItemList</div>
        // itemlist.map(() => (
        //     ren(
        //         <>

        //         </>
        //     )
        // ))
    )
}
