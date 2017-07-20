function write(element) {
    let list = $('#list');
    let div = $('.terminal');
    let item = $(`<li>${element}</li>`);
    item.css('display', 'none');
    item.appendTo(list);
    item.fadeIn();
    div[0].scrollTop = div[0].scrollHeight;
}