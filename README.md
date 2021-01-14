# dataverse-lrs

### Webapp integrating Dataverse with Language Resource Switchboard.

A collection of web applications that conform to the Dataverse external tools interface, makes the Clarin [Language Resource Switchboard](https://switchboard.clarin.eu) available through the external tools button on Dataset pages (left). It also use previewers app for embedded display on Datafile pages (right).

The previewers are based on those originally developed by the  [Qualitative Data Repository](https://qdr.syr.edu).

#### Curl commands to configure and run web applications with a Dataverse instance:

Using the *curl* commands below it should be possible to run the external applications on a Dataverse instance:

-- text/plain previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC text previewer\", \"description\":\"Preview text files and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/TextPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"text/plain\" }"


-- send text directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process text file with LRS\", \"description\":\"Process a text file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendText.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"text/plain\" }"


-- application/pdf previewer

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"SSHOC  PDF previewer\", \"description\":\"Read a pdf document and use the LRS tools to process the file.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"true\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/PDFPreview.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ] }, \"contentType\":\"application/pdf\" }"


-- send PDF directly to LRS

curl -X POST -H 'Content-type: application/json' http://localhost:8080/api/admin/externalTools -d \ "{ \"displayName\":\"Process PDF file with LRS\", \"description\":\"Process the file using LRS.\", \"scope\":\"file\", \"type\":\"explore\", \"hasPreviewMode\":\"false\", \"toolUrl\":\"https://v4e-dock.isti.cnr.it/previewers/SendPDF.html\", \"toolParameters\": { \"queryParameters\":[ {\"fileid\":\"{fileId}\"}, {\"siteUrl\":\"{siteUrl}\"}, {\"key\":\"{apiToken}\"}, {\"datasetid\":\"{datasetId}\"}, {\"datasetversion\":\"{datasetVersion}\"}, {\"locale\":\"{localeCode}\"} ]}, \"contentType\":\"application/pdf\" }"

