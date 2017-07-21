function write(element) {
    let list = $('#list');
    let div = $('.terminal');
    let item = $(`<li>${element}</li>`);
    if(item.text().startsWith('Error:')) {
        changeErrorMsg(item);
    }
    item.css('display', 'none');
    item.appendTo(list);
    item.fadeIn();
    div[0].scrollTop = div[0].scrollHeight;
}

function changeErrorMsg(item) {
    let message = item.text().slice(6);
    let errorSpan = $('<span>')
        .text('Error:')
        .css('color', 'red');

    item.text('').append(errorSpan).append(message);
}