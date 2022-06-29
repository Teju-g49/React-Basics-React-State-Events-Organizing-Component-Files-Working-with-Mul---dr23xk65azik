import React from 'react'
const PaginationButtonsList = (props) => {
    const noOfPages = 20            /*to calculate pages => (posts/limit) like here 100/5*/
    function createButtons () {
        let buttonArr = [];
        for(let i=0; i<noOfPages; i++) {
            buttonArr.push(<button>{i+1}</button>)          /*we are creating button here we can use createElement as well*/
        }
        return buttonArr;
    }
    return (
        <div className="pagination-buttons-list">
        {createButtons()}
        </div>
    )
}

export { PaginationButtonsList }
