# Hospital-API

We’re going to design an API using Node.js and MongoDB for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

## Task:
There can be 2 types of ​ Users
- *Doctors* & *Patients*

- Doctors can log in

- Each time a patient visits, the doctor will follow 2 steps:
    - Register​ the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
    - After the checkup, create a ​Report.
- Patient Report will have the following fields
    - Created by doctor
    - Status: Can be either of: *[Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]*
    - Date


# How to set it up on your local Computer?

1. Clone the Package to your local System
2. Navigate to the folder wherein the project has been cloned
3. Open Terminal and type `npm install` [Make sure node is already installed in your system!]
4. Type ` node index.js` || `npm start`
5. Open browser and goto `localhost:8000`

# Different API's in this project:
1) **/doctors/register** → Registers a new Doctor to the hospital Database. Takes in mandatory field:--> **email**, **name** and **password**

<img src="https://user-images.githubusercontent.com/25504941/87380540-4f165100-c5b0-11ea-87a7-5f40a024e663.png" width=800 height=500/>

2) **/doctors/login** → Doctor Login. if Authenticated, Returns the JSON Web token, takes in mandatory **email** and **password**

<img src="https://user-images.githubusercontent.com/25504941/87380542-50e01480-c5b0-11ea-802b-80c152b4c252.png" width=800 height=500/>


### Protected routes
3) **/patients/register** → API to register a new Patient. Only authorized doctor can create a new Patient. Takes some mandatory information :--> **phone**, **name**, **password**

<img src="https://user-images.githubusercontent.com/25504941/87380547-52a9d800-c5b0-11ea-9c03-593b4fda9cf1.png" width=800 height=500/>

**Apply Bearer token in header**
<img src="https://user-images.githubusercontent.com/25504941/87380544-52114180-c5b0-11ea-94c4-179e7c16c352.png" width=500 height=500/>

4) **/patients/:id/create_report** → API to create a report for the Patient with ID. Need **Status** to get passed in body.

<img src="https://user-images.githubusercontent.com/25504941/87380548-53426e80-c5b0-11ea-9479-a9013fc6d3e3.png" width=800 height=500/>

**Here also need to pass bearer token in header**

### Unprotected routes
5) **/patients/:id/all_reports** → To Show all the reports of a particular Patient with *id*.

<img src="https://user-images.githubusercontent.com/25504941/87380550-53db0500-c5b0-11ea-9465-553e93499347.png" width=800 height=500/>


6) **/reports/:status** → To Show all the reports in the database with a particular status lets say *Positive* or *Negative* Or *Quarantined* etc.

<img src="https://user-images.githubusercontent.com/25504941/87380553-550c3200-c5b0-11ea-9f7f-9f07254bfb83.png" width=800 height=500/>

# Folder Structure
- **Entry point** : index.js.
- **config** : Contains configuration files of Mongoose and Passport JWT Strategies.
- **controllers** : The controllers for various urls like Doctor API or Patient API or Report API.
- **models** : Mongoose Models for the Doctors, Patients and reports!
- **routes** : Different routes for different request urls.
- **views** : Not have any view for this project.