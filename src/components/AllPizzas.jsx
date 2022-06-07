import React from 'react'
import Skeleton from './Pizza/Skeleton'

function AllPizzas({ loading, items, cartPizzaItems }) {


    return (
        <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    loading
                        ? [... new Array(8)].map((_, element) => <Skeleton key={element} />)
                        : items
                }
            </div>
        </>
    )
}

export default AllPizzas