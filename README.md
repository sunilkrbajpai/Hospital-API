# Hospital-API

We’re going to design an API using Node.js and MongoDB for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients.

## Task:
There can be 2 types of ​ Users
- *Doctors*
- *Patients*

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
3. Open Terminal and type npm install [Make sure node is already installed in your system!]
4. Type > node index.js || node start
5. Open browser and goto localhost:8000

# What are the Different API's in this project?
1) **/doctors/register** → Registers a new Doctor to the hospital Database. Takes in mandatory field:--> **email**,**name** and **password**
2) **/doctors/login** → Doctor Login. if Authenticated, Returns the JSON Web token, takes in mandatory **email** and **password**

### Protected routes
3) **/patients/register** → API to register a new Patient. Only authorized doctor can create a new Patient. Takes some mandatory information :--> **phone**,**name**,**password**
4) **/patients/:id/create_report** → API to create a report for the Patient with ID. Need **Status** to get passed in body.

### Unprotected routes
5) **/patients/:id/all_reports** → To Show all the reports of a particular Patient with *id*.
6) **/reports/:status** → To Show all the reports in the database with a particular status lets say *Positive* or *Negative* Or *Quarantined* etc.

# What's in the folders?
**Entry point** : index.js.
**config** : Contains configuration files of Mongoose and Passport JWT Strategies.
**Controllers** : The controllers for various urls like Doctor API or Patient API or Report API.
**Models** : Mongoose Models for the Doctors, Patients and reports!
**routes** : Different routes for different request urls.
**views** : Not have any view for this project.