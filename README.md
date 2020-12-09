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
* Enter the values for the data rows below

* Create a second worksheet called 'Settings' to hold the email Subject, Sender name and the send button
* In Column A, enter the following three rows: Subject SenderName NonHTMLMessage
* Insert a Drawing with a text box 'Send Emails Now'
* Hover above it and Click on the three dots, click on Assign Script and choose the MailMergeGmail script
