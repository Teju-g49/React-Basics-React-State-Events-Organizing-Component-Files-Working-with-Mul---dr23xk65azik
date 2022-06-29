import React from 'react'
const PaginationButtonsList = (props) => {
    const[pageNum,setPageNum] = useState(1)
    const noOfPages = 20            /*to calculate pages => (posts/limit) like here 100/5*/
    function createButtons () {
        let buttonArr = [];
        for(let i=0; i<noOfPages; i++) {
            buttonArr.push(<button id={'button-'+{i+1}} value={i+1} onClick={clickButton}>{i+1}</button>)          /*we are creating button here we can use createElement as well*/
        }
        return buttonArr;
    }
    
    function clickButton (event) {
        let redButtons = document.querySelectorAll('.active-btn');
        redbuttons.forEach((button)=>{
            button.classList.remove('active-btn');
        })
        let button = document.getElementById('button-'+event.target.value);
        button.classList.add('active-btn');
        props.event;
    }
    return (
        <div className="pagination-buttons-list">
        {createButtons()}
        </div>
    )
}

export { PaginationButtonsList }
