"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wfs_query_1 = require("wfs_query");
wfs_query_1.getInfo("http://fbinter.stadt-berlin.de/fb/wfs").then(function (result) {
    console.log(result);
});
//# sourceMappingURL=index.js.map