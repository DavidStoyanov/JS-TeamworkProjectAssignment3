/*
 *   TODO:
 *   Use function write() to log the result on terminal.
 *   Each function will take as argument current list and full command tokens.
 *   If there is an error, should print it as write() function.
 *   After all, modified list should be returned at the end of the function.
 *
 *   For examples, look below
 */

function append(list, command) {
    if (command.length === 2 && command[1] !== '') {
        list.push(command[1]);
        write(list.join(' '));
    } else {
        write('Error: append command should contains two arguments!')
    }

    return list;
}

function prepend() {
    //TODO...
}

function reverse() {
    //TODO...
}

function insert(list, command) {
        if (command[1] >= 0 && command[1] < list.length) {
            list.splice(command[1], 0, command[2]);
            write(list.join(' '));
        } else {
            write(`Error: invalid index ${command[1]}`)
        }

        return list;
}

function deleteItem() {
    //TODO...
}

function roll() {
    //TODO: Roll Left, Roll Right...
}

function sort() {
    //TODO...
}

function count(list, command) {
    let counter = 0;
    if (command.length === 2 && command[1] !== '') {
        for (let i = 0; i <= list.length; i++) {
            if (list[i] === command[1]) {
                counter++;
            }
        }
        if (counter === 0) {
            write('String not found')
        }
        else {
            write(Number(counter));
        }
        return list;
    }
}
function end(list, command) {
    if (command.length === 1) {
        write('Finished');
        $('.input').attr('readonly', true);
        let button = $('.btn');
        button.attr('disabled', true);
        button.addClass('btnDisabled');
    } else {
        write('Error: end command should contains one argument!')
    }

    return list;
}

