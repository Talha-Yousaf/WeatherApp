Follow the steps below to run the project

1.  Clone Master Branch
2.  Open terminal in project's root directory.
3.  Run the command "npm install"


       OR

    yarn

4. Run the project

<b>Android</b>

> npx react-native run-android


2. Create Debug APK

        yarn assembleDebug

    OR    
        npm assembleDebug
    
    This command runs following commands behind the scene    

        react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res    
        cd android && ./gradlew clean
        cd android && ./gradlew assembleDebug

    Note: Make sure "assets" folder is created at "android/app/src/main"

<em><b>Author<b/>:Talha Yousaf <b>[]<b/></em>
