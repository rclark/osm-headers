var osmread = require('osm-read');

module.exports = function (filePath, callback) {
    // This is pretty much verbatim the example on https://github.com/marook/osm-read
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
