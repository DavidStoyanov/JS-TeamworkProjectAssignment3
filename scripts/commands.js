/*
 *   TODO:
 *   Use function write() to log the result on terminal.
 *   Each function will take as argument current list(final  string logged to the terminal) and commands.
 *   If there is an error should print it as write function.
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

function insert() {
    //TODO...
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

function count() {
    //TODO...
}

function end(list, command) {
    let newList = ['Finished'];
    write(newList);
    newList.length = 0;
    $('.input').attr('readonly', true);
    let button = $('.btn');
    button.attr('disabled', true);
    button.addClass('btnDisabled');
    return newList;
}
