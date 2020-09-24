# LeanOnMe
Welcome to LeanOnMe, a Covid-19 volunteer/relief site where users can both request and provide assistance for anything Covid-19 related!


How to Launch
-cd into the volunteer_backend folder and run bundle install and then rails s to launch the rails server
-cd into the volunteer_frontend folder and run npm install and npm s to launch the react frontend
--NOTE: cors policy is currently configured to accept requests from localhost:3001 only. This should be the default port assigned if you start the rails server first, but leaving this note just in case your computer configuration differs

What This App Can Do
-Authorization with an autologin feature that will remember who lasted logged in on that browser
-Ability to view all of the requests for assistance that no one has volunteered to take on yet.
-Ability to create your own request for assitance
-Ability to view all of your open requests as well as requests you have volunteered to help complete

Other Features
-Custom CSS
-Text notifications via Twilio API(to be implemented soon)