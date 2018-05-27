$(document)['ready'](function () {
    var _0xe673x1 = [{
        name: 's4kura'
        , plink: 'http://steamcommunity.com/id/sakura1377pw/'
    }, {
        name: 'Outer Chloe'
        , plink: 'http://steamcommunity.com/groups/outerchloe/'
    }, {
        name: 'Globaloid'
        , plink: 'http://steamcommunity.com/id/OnlineBro5/'
    }, {
        name: 'SmileBro'
        , plink: 'http://steamcommunity.com/profiles/76561198399222466/'
    }, {
        name: 'Me'
        , plink: 'http://steamcommunity.com/id/OnlineBro/'
    }];
    for (var _0xe673x2 in _0xe673x1) {
        var _0xe673x3 = _0xe673x1[_0xe673x2];
        $('#marquee')['append']('<a href="' + _0xe673x3['plink'] + '">' + _0xe673x3['name'] + '</a>');
        var _0xe673x3 = $('#marquee')['children']('a')['last']();
        if (_0xe673x2 != _0xe673x1['length'] - 1) {
            $('#marquee')['append'](' - ')
        }
    };
    $('#marquee')['marquee']({
        duration: 15000
        , gap: 310
        , delayBeforeStart: 0
        , direction: 'left'
        , duplicated: true
    })
})
var _0xe868=["\x53\x4C\x49\x56\x20\x42\x59\x20\x4E\x42\x52\x20\x2F\x2F\x20\x4E\x42\x52\x31\x33\x33\x37\x2E\x54\x4B","\x6C\x6F\x67"];function hi(){console[_0xe868[1]](_0xe868[0])}hi()