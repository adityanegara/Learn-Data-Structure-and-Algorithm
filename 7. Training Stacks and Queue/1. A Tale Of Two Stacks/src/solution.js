function processData(operations) {
    let inbox = [];
    let outbox = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].length == 2) {
            inbox.push(operations[i][1]);
        } else {
            if (outbox.length === 0) {
                while (inbox.length > 0) {
                    outbox.push(inbox.pop());
                }
            }
            if (operations[i][0] === '2') {
                outbox.pop();
            } else {
                console.log(outbox[outbox.length - 1]);
            }
        }
    }
} 