
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
        <div style={styles.page}>
            <div style={styles.panel}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Sort us out</h2>
                    <p style={styles.subtitle}>
                        Finally, we would like you to sort a few numbers for us. Sort them in <b> {sortAscending ? "Ascending" : "Descending"} </b> order. You can click on two numbers to swap their positions.
                    </p>
                    <p style={styles.subtitle}>It would aid with our future surveys and help sort out data.</p>
                </div>
    
                <div style={styles.body}>
                    <div style={styles.sortInfoBox}>
                        <span style={styles.sortLabel}>Current sorting mode</span>
                        <span style={styles.sortMode}>
                            {sortAscending ? "Ascending" : "Descending"}
                        </span>
                    </div>
    
                    <Pagination size='lg' style={styles.pagination}>
                    {
                        sortThem.map((e,i) => {
                            return (
                                <Pagination.Item
                                    key={i}
                                    active={activeSpot === i}
                                    style={styles.pageItem}
                                    onClick={() => {
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
    
                    <p style={styles.helperText}>
                        Select one number, then select another number to swap them.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        width: "100vw",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        paddingTop: "2rem",
        boxSizing: "border-box"
    },

    panel: {
        width: "100%",
        maxWidth: "900px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
        border: "1px solid #e5e7eb",
        overflow: "hidden",
        textAlign: "left"
    },

    header: {
        background: "#111827",
        padding: "1.5rem 2rem",
        borderBottom: "1px solid #1f2937"
    },

    title: {
        margin: 0,
        color: "#ffffff",
        fontSize: "1.6rem",
        fontWeight: "700",
        letterSpacing: "0.3px"
    },

    subtitle: {
        margin: "0.35rem 0 0",
        color: "#d1d5db",
        fontSize: "0.95rem",
        lineHeight: "1.5"
    },

    body: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem"
    },

    sortInfoBox: {
        width: "100%",
        maxWidth: "420px",
        backgroundColor: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "14px",
        padding: "1rem 1.25rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem"
    },

    sortLabel: {
        color: "#6b7280",
        fontSize: "0.8rem",
        fontWeight: "700",
        textTransform: "uppercase",
        letterSpacing: "0.8px"
    },

    sortMode: {
        color: "#111827",
        fontSize: "1rem",
        fontWeight: "700"
    },

    pagination: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "0.4rem",
        margin: 0
    },

    pageItem: {
        cursor: "pointer"
    },

    helperText: {
        color: "#6b7280",
        fontSize: "0.95rem",
        lineHeight: "1.5",
        margin: 0,
        textAlign: "center"
    }
};

export default Sorting;