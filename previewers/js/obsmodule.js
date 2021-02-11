
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/d/440e219b3fd45a99.js?v=3";
const main = new Runtime().module(define, Inspector.into("#observablehq-243ecdae"));
if (resURL.startsWith (null)){
	resURL="https://static.observableusercontent.com/files/04fb9ff8d0c52895260d29a82d55b25ac325f3b25fdfd366d65c2f90880280036aa47a9114e8eb8dfd17d49497c201e13dd851ecf206c64430a87d46f8b1730f"
	//resURL="https://dataverse.philae.isti.cnr.it/api/access/datafile/30"
}
main.redefine("data", fetch(resURL).then(response => response.json()));
//main.redefine("data", fetch("https://dataverse.philae.isti.cnr.it/api/access/datafile/30").then(response => response.json()));
