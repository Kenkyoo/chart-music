var _ = require('lodash');
import { chart } from './chart';

$('#myForm').on('submit', function (e) {
    e.preventDefault();
    const formData = $(this).serializeArray();
    console.log(formData);
    
    const arrayDeArrays = _.map(formData, item => {
        return [item.name, parseFloat(item.value)];
    });
    $('.container').html('');
    chart(arrayDeArrays);
});
