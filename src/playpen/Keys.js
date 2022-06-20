function NumberList() {
    const numArry = [1,2,3,3,4,5];
    const numList = numArry.map((numbers, id) => <li key={id}>{numbers}</li>);

    return <ul>{numList}</ul>;
}

export default NumberList;