# CaptainOS
an OS built in git for security, speed, and cross-device support

## Installation
### NOTE: This program runs in the browser, but the server needs and Android device or a desktop to run off of
#### The program will eventually run off of a lightweight linux distro that the user has no access to (unless you enter OP Mode)
* Install the app Termux
* in Termux, run

~~~~
packages install git
packages install nodejs
git clone https://github.com/DatOneLefty/CaptainOS
cd CaptainOS
npm install
node os.js
~~~~
* The program will then most likely not have a user created, it will say this every time because the account creation code is not ready
* Install the CaptainOSViewer.apk on your Android Device (may require downloading it separately)
* launch the app, and you are ready!

* The current testing password is 9876
## Updating
The app is made on GitHub for ease of updating. Currently, the program requires you run git pull to get the newest updates, in the future, the system will automatically pull from GitHub when the Captain Web Services server broadcasts a new update is available

This will allow for super fast bug fixes, security fixes, and new features
