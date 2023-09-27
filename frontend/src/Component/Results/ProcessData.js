//make function to process data called gas 1

function gas1(data) {
    //make array to hold data
    let gas1 = [];
    //loop through data
    for (let i = 0; i < data.length; i++) {
        //push data to array
        gas1.push(data[i].gas1);
    }
    //return array
    return gas1;
    }