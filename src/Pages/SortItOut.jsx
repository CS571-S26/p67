
import { Image, Container, Button, Card, Row, Col, Pagination } from 'react-bootstrap'
import { useState, useEffect, act } from 'react';
import you from '../assets/DefaultPortrait.jpg'

function Sorting(props) {
    const [sortAscending, changeOrder] = useState(Math.random() < 0.5);
    const [sortThem, changeTheirOrder] = useState([1,3,2,5,4,7,6,9,8,10,11,12]);
    const [activeSpot, chooseActive] = useState(-1);
    const [sortCount, trackCount] = useState(0);

    function checkArraySorted(){
        return sortThem.every((e, i) => {
            if (i > 0) console.log((sortThem[i-1] - e) * (sortAscending ? 1 : -1));
            return i == 0 || (sortThem[i-1] - e) * (sortAscending ? 1 : -1) <= 0
        })
    }

    useEffect(() => {
        props.contFunc(false);

        let copyArray = sortThem.slice();

        let countingIndex = copyArray.length;
        while (countingIndex > 0){
            let randomIndex = Math.floor(Math.random() * countingIndex);
            countingIndex--;
            [copyArray[countingIndex], copyArray[randomIndex]] = [
            copyArray[randomIndex], copyArray[countingIndex]];
        }

        changeTheirOrder(copyArray);
    }, [])
    useEffect(() => {
        trackCount(e => e + 1);
        props.contFunc(checkArraySorted());
        if (checkArraySorted() && localStorage.getItem("sortingCount") == null) localStorage.setItem("sortingCount", sortCount + 1);
    }, [sortThem])

    return (
        <div>
            <h2>Sort us out</h2>
            <p>Finally, we would like you to sort a few numbers for us. Sort them in <b> {sortAscending ? "Ascending" : "Descending"} </b> order. You can click on two numbers to swap their positions.</p>
            <p>It would aid with our future surveys and help sort out data.</p>
            <Pagination size='lg' style={{justifySelf:"center"}}>
            {
                sortThem.map((e,i) => {
                    return (
                        <Pagination.Item key={i} active={activeSpot === i} onClick={() => {
                            if (activeSpot == -1){
                                chooseActive(i);
                                return;
                            }
                            if (activeSpot == i){
                                chooseActive(-1);
                                return;
                            }
                            let copyArray = sortThem.slice();
                            [copyArray[activeSpot], copyArray[i]] = [
                            copyArray[i], copyArray[activeSpot]];
                            changeTheirOrder(copyArray);
                            chooseActive(-1);
                        }}>
                            {e}
                        </Pagination.Item>
                    )
                })
            }
            </Pagination>
        </div>
    );
}

export default Sorting;