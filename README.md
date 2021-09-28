# dataverse-lrs

### Integrating Dataverse with the Clarin Resource Switchboard.
This repository contains a collection of files that are built according to the [Dataverse external tools interface](https://guides.dataverse.org/en/latest/admin/external-tools.html) in order to make the Clarin [Resource Switchboard](https://switchboard.clarin.eu) available through the external tools button on Dataset pages (left). Some of the files also implement data previewer apps for embedded display on Datafile pages (right): the *Text* and *PDF* previewers are based on those originally developed by the  [Qualitative Data Repository](https://qdr.syr.edu), the *GeoJSON previewer* is a basic, experimental, viewer for GeoJSON files developed using the [d3.js](https://d3js.org) library.

#### Installation

The files can be installed on a Dataverse instance by executing the curl command(s) below to register them with the Dataverse instance. In alternative the code can be downloaded and used locally. Detailed instructions for a local installation can be found at the [Dataverse Project site](https://guides.dataverse.org/en/latest/admin/external-tools.html#). 

In this release there is one file for each mime type, each file can be installed independently from others. 

#### Known limitations

Files in the current release *do not allow* to send to LRS or to preview restricted content (i.e. non public files). To send a  non public file to the Resource Switchboard or to preview it, the permission to access the dataset version containing the file would be required, technically speaking this means that a valid API Token should be used. Instead sending/viewing public content does not require an API Token. 
The decision to implement the processing of restricted content depends on the security policy that will be adopted.  

The *application/geo+json* mime type is not automatically recognized by Dataverse when uploading a GeoJSON file, to associate the GeoJSON previewer to the file the correct mime type must be manually set in the correspondent metadata property of the file.

The current release has been tested with Dataverse v5.11+, however it should work also with Dataverse releases v4.12+.

*Note: this is an in progress activity, code may change and may not be stable all the time.* 

#### Curl commands to install and run Resource Switchboard integration web apps with a Dataverse instance:

Using the *curl* commands below it should be possible to install and run the dataverse-lrs files as external applications on a Dataverse instance:

-- text/plain previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC text previewer\", \"description\":\"Preview text files and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/TextPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"text/plain\" }"


-- send text directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process text file with LRS\", \"description\":\"Process a text file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendText.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"text/plain\" }"


-- application/pdf previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC  PDF previewer\", \"description\":\"Read a pdf document and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/PDFPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"application/pdf\" }"


-- send PDF directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process PDF file with LRS\", \"description\":\"Process a PDF file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendPDF.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"application/pdf\" }"

-- application/geo+json previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Preview GeoJSON Document\", \"description\":\"Preview a GeoJSON document.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/GeoJSONPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"application/geo+json\" }"

