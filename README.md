## Overall Project Structure
- index.html/main.js (Student Input Page/Script)
- scoring.html/scoring.js (Scoring Tables Page/Scrip)
- members.js (Stores Current Class CSV)
    - Store the `Team Number, Student Email, First Name, Last Name, Class Code` in CSV format between the backticks in this files. Don't include the CSV header.

## Configuring Domain Name
Need to repoint DNS records with domain registrar and update `CNAME` file.

More info: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Database
The database interaction relies on MongoDB Atlas/Realm, please reach out to Roshan Ravi <roshan@roshanravi.com> for access if needed.

Otherwise, a hosted MongoDB Atlas/Realm instance can be created here: https://www.mongodb.com/realm and the Realm.App configuration updated in `main.js` & `scoring.js`

NOTE: The database is designed to not allow deletion from this GUI for security, that operation has to happen from the database utilities. Furthermore, with the student CSV configuration & table view, prefixing class with semester/professor initials will allow for larger use without updates to the backend: i.e. class code `F2021_LM_101`