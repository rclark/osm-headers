var osmread = require('osm-read');

module.exports = function (filePath, callback) {
    osmread.createPbfParser({
        filePath: filePath,
        callback: function (err, parser) {
            if(err) return callback(err);
            var headers = parser.findFileBlocksByBlobType('OSMHeader');

            parser.readBlock(headers[0], function (err, block) {
                callback(err, block);
                parser.close();
            });
        }
    });
};
