define(['myModule3'], function(m3) {
    var m2 = {};
    m2.say = function() {
        m3.say();
        console.log('Hi myModule2!');
    }
    return m2;
});

