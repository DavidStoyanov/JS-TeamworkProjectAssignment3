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
        write('Error: append command should contains two parameters!')
    }

    return list;
}

function prepend(list, command) {
    if (command.length === 2 && command[1] !== '') {
        list.splice(0,0, command[1]);
        write(list.join(' '));
    } else {
        write('Error: prepend command should contains two parameters!')
    }

    return list;
}

function reverse(list,command) {

    if (command.length > 0 && list.length > 1) {
        list.reverse();
        write(list.join(' '));
    } else {
        write( 'Error: text must contain at least 2 words');
    }
    return list;
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

function deleteItem(list, command) {
    if (!isNaN(command[1]) && command[1] !== null) {
        if (command[1] >= 0 && command[1] < list.length) {
            list.splice(command[1], 1);
            write(list.join(' '));
        } else {
            write(`Error: invalid index ${command[1]}`)
        }
    } else {
        write(`Error: invalid command parameters`)
    }
    return list;
}

function roll(list, command) {
    if (command.length === 2 && command[1] !== '') {
        if (command[1] === 'left') {
            let el = list.shift();
            list.push(el);
            write(list.join(' '));
        } else if (command[1] === 'right') {
            let el2 = list.pop();
            list.unshift(el2);
            write(list.join(' '));
        } else {
            write(`Error: invalid command parameters`)
        }
    } else {
        write(`Error: invalid command parameters`)
    }
    return list;
}

function sort(list, command) {
    if (command.length > 0 && list.length > 1) {
        list.sort();
        write(list.join(' '));
    } else {
        write( 'Error: text must contain at least 2 words');
    }

    return list;
}

function count(list, command) {
    let counter = 0;
    if (command.length === 2 && command[1] !== '') {
        for (let i = 0; i <= list.length; i++) {
            if (list[i] === command[1]) {
                counter++;
            }
        }

        write(counter);
    }

    return list;
}

function end(list, command) {
    if (command.length === 1) {
        write('Finished');
        $('.input').attr('readonly', true);
        let button = $('.btn');
        button.attr('disabled', true);
        button.addClass('btnDisabled');
    } else {
        write('Error: invalid command parameters')
    }

    return list;
}

