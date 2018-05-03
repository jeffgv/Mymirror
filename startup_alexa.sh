#!/bin/bash

#Start companion service
cd /home/pi/Desktop/alexa-avs-sample-app/samples
cd companionService && npm start&

sleep 5

#Run the sample app
cd /home/pi/Desktop/alexa-avs-sample-app/samples
cd javaclient && mvn exec:exec&

sleep 30

#Run the Wake Word Engine
cd /home/pi/Desktop/alexa-avs-sample-app/samples
cd wakeWordAgent/src && ./wakeWordAgent -e kitt_ai &
