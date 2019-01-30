import {getInfo, getFeature} from "wfs_query";

getInfo("http://fbinter.stadt-berlin.de/fb/wfs").then( (result: object) => {
  console.log(result);
});
