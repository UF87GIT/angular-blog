# angular-blog

## How to use

Install NVM and Ionic

$ nvm use 12.18.0

$ export CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL=http://services.gradle.org/distributions/gradle-6.1-rc-1-all.zip
$ export ANDROID_HOME=/home/urban/Android/Sdk
$ export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools:$ANDROID_HOME/platforms:$ANDROID_HOME/platforms:$ANDROID_HOME/emulator
$ export ANDROID_SDK_ROOT=/home/urban/Android/Sdk
$ export CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL=http://services.gradle.org/distributions/gradle-6.1-rc-1-all.zip
$ ionic serve # open http://localhost:8100/ in browser

## How to run on real android device

$ ionic cordova run android --device
