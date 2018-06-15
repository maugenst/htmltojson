const htmltojson = require('../lib/htmltojson');

/*
process.on('unhandledRejection', up => {
    throw up;
});
*/
describe('HTMLToJson Local', function() {
    let html = '';

    it('calls convert and expects an exception', () => {
        expect(htmltojson.convert).toThrow('Not yet implemented');
    });

    it('calls convertUrl and expects an exception', () => {
        expect.assertions(1);
        return htmltojson.convertUrl().catch(e => expect(e).toMatch('Not yet implemented'));
    });
});
