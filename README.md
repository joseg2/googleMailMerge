# googleMailMerge


Code from
https://www.youtube.com/watch?v=h2z13YE3kJg


email.html is the template message

Code.gs holds the script code

# Instructions

* Open Google Sheets
* Click Tools / Script Editor
* Paste the contents of Code.gs
* Create a new html file with the contents of email.html
* Save this as a project called MailMergeGmail

## Create the database in google sheets

The script will run on the google sheet that is active, it will get triggered with a custom button

* Create a new google sheets document
* Rename the first worksheet from sheet1 to 'Customers'
* First row with the following 5 values: FIRSTNAME	LASTNAME	EMAIL	PHONE	ReceiveEmail
* Populate the spreadsheet with your data
* Select the data cells of the ReceiveEmail column: Click Data / Data Validation / Criteria: Checkbox

* Create a second worksheet called 'Settings' to hold the email Subject, Sender name and the send button
* In Column A, enter the following three rows: Subject SenderName NonHTMLMessage
* Populate Column B with the values of the three items
* Insert a Drawing with a text box 'Send Emails Now'
* Hover above it and Click on the three dots, click on Assign Script and choose the MailMergeGmail script

You can run the script in the script editor (click on Run)
Accept the permissions for the script and for the Gmail App

Left clicking on the MailMergeGmail button will trigger the sending of emails, if you need to move it, Right click on it to select it, then drag it normally

