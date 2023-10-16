# Vendor Management System README

## Project Overview
The Vendor Management System is a web-based application that allows users to manage vendor information. The system enables users to log in with their Google accounts, create and manage vendor profiles, and perform various vendor-related tasks like editing and deleting vendors. It provides a user-friendly interface to streamline vendor management processes.

## Deployment Link

https://jstigernextapp.vercel.app/

## Screenshot with Requirement

1. Login with Google & Logout.

<img width="689" alt="image" src="https://github.com/alimalim77/jstigernextapp/assets/52186295/a596d616-b7c5-49b1-9aa5-3de84a9d3f69">

2. Create Vendor: Vendor Name*, Bank Account No*., Bank Name*, Address Line 1*, Address Line 2, City*, Country*, Zip Code*.

<img width="847" alt="image" src="https://github.com/alimalim77/jstigernextapp/assets/52186295/0be97c07-816d-46a0-8b19-e4431b8fc361">

3. Display paginated list of vendors : Vendor Name, Bank Account No., Bank Name, Edit (link) / Delete (link)

<img width="632" alt="image" src="https://github.com/alimalim77/jstigernextapp/assets/52186295/a6a83c46-2e39-481c-9305-3eb7e6a86e1a">

4. Edit: Load vendor details on edit vendor screen. Update on submit.

<img width="589" alt="image" src="https://github.com/alimalim77/jstigernextapp/assets/52186295/5df5f380-2306-4756-8887-209062675108">

5. Delete: Delete vendor after confirmation.

<img width="593" alt="image" src="https://github.com/alimalim77/jstigernextapp/assets/52186295/8bac4381-46b7-401c-ba79-73018bb3f97c">

# Demo Video

https://github.com/alimalim77/jstigernextapp/assets/52186295/5aa4def9-be2c-419f-86dd-6d9bc1a8b187

# Features
- The Vendor Management System provides the following features:

- Login with Google & Logout: Users can log in to the system using their Google accounts and log out when they're done.

- Create Vendor: Users can create vendor profiles with mandatory fields, including Vendor Name, Bank Account No., Bank Name, Address Line 1, City, Country, and Zip Code. Address Line 2 is optional.

- Display Paginated List of Vendors: The system displays a paginated list of vendors with essential information, including Vendor Name, Bank Account No., and Bank Name. Users can edit or delete vendors from this list.

- Edit Vendor: Users can load vendor details onto the edit vendor screen, make changes, and update the information on submission.

- Delete Vendor: Users can delete a vendor after confirming their intent.

# Installation

1. Clone the project repository to your local machine:
   `git clone repo`

2. Install the project dependencies:
   `npm install`

3. Create a .env file in the project root directory and add your MongoDB and Google API credentials. Here is an example of the required environment variables:
   `MONGODB_URI=mongodb://localhost/vendordb
   GOOGLE_CLIENT_ID=your-client-id
   GOOGLE_CLIENT_SECRET=your-client-secret
   SESSION_SECRET=your-session-secret`

4. Run the App:

   'npm run dev'




