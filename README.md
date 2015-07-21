# Geekup with Geekettes

##Prerequisites

- [ ] Install [Sublime Text 2](http://www.sublimetext.com/2) or whichever text-editor you prefer (any decent text editor will do)
- [ ] Signup for an [Instagram](https://instagram.com/developer/?hl=en) account. If you don't have an Instagram account & do not want to signup for Instagram, you can follow along using our DevLadies Instagram account we created for this event. 

##Setup Steps 

- [ ] "Fork" the GitHub Repo onto your GitHub account by clicing the "fork" icon at the top of the screen
- [ ] Open a command prompt

    *Mac*: Run the **Terminal** app

    *Windows*: Start > Run > `cmd`
- [ ] Clone the GitHub Repo. (If you don't have git installed on your local machine, you can click the "Download Zip" button & unzip the folder to your desktop)
**NOTE:** We're going to put this project folder (called a repository on GitHub) just for easy access

    *Mac*
    ```
    cd ~/Desktop
    git clone git@github.com:caitlinhall/geekup-with-geekettes.git
    ```

    *Windows*
    ```
    cd %USERPROFILE%\Desktop
    git clone git@github.com:caitlinhall/geekup-with-geekettes.git
    ```
- [ ] Now let's open open up the folder we downloaded (referred to as "cloning" in GitHub Jargon)

    ```
    cd geekup-with-geekettes
    ```
    
- [ ] If you downloaded the .zip file, make sure you unzip it to your desktop.   
- [ ] Open up your favorite text editor & open the unzipped folder so you can see all the files & folders 

##Instagram Steps
- [ ] If you have an Instagram account log into your account & navigate to https://instagram.com/developer/?hl=en.
- [ ] If you do not have an Instagram account log into this account. Username: Password: (You can see how we have already Registed a Client ID for this Instagram account.
- [ ] Now we will Register new Client ID. 

    ```
    Application Name: Geekettes Event
    Description: Awesome Geekettes coding event!
    Website URL: http://<USERNAME>.github.io/geekup-with-geekettes/
    Redirect URI(s): http://<USERNAME>.github.io/geekup-with-geekettes/oauth
    Contact Email: Your Email
    ```
- [ ] Under Security tab, uncheck the box called Disable implicit OAuth.
- [ ] Copy your Client ID

##Sublime Steps

- [ ] Open the geekup-with-geekettes repo in your text editor.
- [ ] Open the file index.html
- [ ] Paste your Client ID from Instagram API in the variable below. 

     ```
   var client_id = "Add Your Instagram Client ID here";
    ```
- [ ] Go to http://jelled.com/instagram/lookup-user-id and enter your Instagram username and click go. Copy your user id. 
- [ ] Paste your Client ID from Instagram API in the variable below. 

     ```
     var userid = "Add Your Instagram User ID here";
    ```
- [ ] Enter your GitHub username in the variable below. 

     ```
   var github_name = "Add Your GitHub username here";
    ```

##Terminal Steps
Let's deploy/push your changes out to GitHub.

    ```
    git add .
    git commit -m "a description of your change"
    git push origin gh-pages
    ```

Now you can click the login button and authenticate with Instagram.

##Sublime Steps

- [ ] In index.html, there is an empty function called getData. Now that we have authenticate with Instagram, we want to get data from the API. Add this snippet of code to the get some basic profile data. [Click here for snippet](https://gist.github.com/caitlinhall/590084b9d5ad808433c2).

    ```
    function getData () {
      //Add Ajax calls here
   } 
    ```

So what does this do?
This Ajax call gets the json data back from the Instagram API and calls the function createProfile(json) and passes the json data with it as well. This then creates the html for profile data. Now let's push up your code to see what the profile data looks like.

##Terminal Steps
Let's deploy/push your changes out to GitHub.

    ```
    git add .
    git commit -m "a description of your change"
    git push origin gh-pages
    ```

Now you should be able to see your profile data if you refresh the page. 

##Sublime Steps


- [ ] After the ajax you just added, add this snippet of code. This ajax call gets the most recent pictures from your profile. [Click here for snippet](https://gist.github.com/caitlinhall/58733234a82d8f36e710).

    ```
    function getData () {
      // This Ajax call helps you authenticate your website with the Instagram API. 
      $.ajax({
          type: 'GET',
          url: 'https://api.instagram.com/v1/users/' + userid + '/?access_token=' + myToken,
          dataType: 'jsonp',
          success: function(json) {           
            createProfile(json);
          },
          error:  function(error) {
            console.log(error);
          }
      });
   } 
    ```

So what does this do?
This Ajax call gets the json data back from the Instagram API and calls the function createPhotoGrid(json) and passes the json data with it as well. This then creates the html for a photo grid of your most recent photos. Now let's push up your code to see what the profile data looks like.
