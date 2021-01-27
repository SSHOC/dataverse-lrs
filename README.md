# dataverse-lrs

### Integrating Dataverse with the Language Resource Switchboard.

This repository contains a collection of files that are built according to the [Dataverse external tools interface](https://guides.dataverse.org/en/latest/admin/external-tools.html) in order to make the Clarin [Language Resource Switchboard](https://switchboard.clarin.eu) available through the external tools button on Dataset pages (left). Some of these files also implements data previewer apps for embedded display on Datafile pages (right), these previewers are based on those originally developed by the  [Qualitative Data Repository](https://qdr.syr.edu).


#### Installation

The files can be installed on a Dataverse instance by executing the curl command(s) below to register them with the local Dataverse instance. In alternative the code can be downloaded and used locally. Detailed instructions for a local installation can be found at the [Dataverse Projcet site](https://guides.dataverse.org/en/latest/admin/external-tools.html#). 

In the current release there is one file for each mime type, each file can be installed independently from others. 

#### Known limitations

Files in the current release *do not allow* to send to LRS or to preview restricted content (i.e. non public files). To send a  non public file to the Switchboard or to preview it, the permission to access the dataset version containing the file would be required, technically speaking this means that a valid API Token should be used. Instead sending/viewing public content does not require an API Token. 
The decision to implement the processing of restricted content depends on the security policy that will be adopted.

The current release has been tested with Dataverse v5.11+, however it should work also with Dataverse releases v4.12+.

*This is an in progress activity, code may change and may not be stable all the time.* 

#### Curl commands to configure and run web applications with a Dataverse instance:

Using the *curl* commands below it should be possible to install and run the dataverse-lrs files as external applications on a Dataverse instance:

-- text/plain previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC text previewer\", \"description\":\"Preview text files and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/TextPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"text/plain\" }"


-- send text directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process text file with LRS\", \"description\":\"Process a text file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendText.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"text/plain\" }"


-- application/pdf previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC  PDF previewer\", \"description\":\"Read a pdf document and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/PDFPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"application/pdf\" }"


-- send PDF directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process PDF file with LRS\", \"description\":\"Process a PDF file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendPDF.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"application/pdf\" }"

