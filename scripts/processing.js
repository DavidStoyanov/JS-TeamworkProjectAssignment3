function listProcessing() {
    let list;
    let isInitialized = false;

    $('.btn').on('click', submit);
    $('.input').on('keypress', function (e) {
        if (e.which  === 13) submit();
    });

    function initialize() {
        let input = $('.input');
        if (input.val().trim() !== '') {
            list = input.val().split(/\s+/g);
            write(list.join(' '));
            isInitialized = true
        }
        input.val('');
    }

    function submit() {
        if (!isInitialized) {
            initialize();
            return
        }

        let input = $('.input');
        let command = input.val();
        input.val('');

        let tokens = command.split(' ');
        switch (tokens[0]) {
            case 'append':
                list = append(list, tokens); break;
            case 'prepend':
                list = prepend(list, tokens); break;
            case 'reverse':
                list = reverse(list, tokens); break;
            case 'insert':
                list = insert(list, tokens); break;
            case 'delete':
                list = deleteItem(list, tokens); break;
            case 'roll':
                list = roll(list, tokens); break;
            case 'sort':
                list = sort(list, tokens); break;
            case 'count':
                list = count(list, tokens); break;
            case 'end':
                list = end(list, tokens); break;
            default: write('Error: invalid command')
        }

    }
}