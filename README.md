## Black Ops 3 Fix (Custom Zombie Maps on Arch Linux / Manjaro)
### Spoiler: This cannot fix the maps working on multiplayer (They will not)

I'm unaware if this works on any other versions of linux, but let me know. 

Recently I found out that custom maps don't work on arch linux and protonGE can't fix it and you need to do some really tedious manual process on all downloaded custom maps to make them even work

You will know that it has worked if all the folders have now changed their names to their map names

How to use: 

1. Create a folder called `usermaps` inside of `SteamLibrary/steamapps/common/Call Of Duty Black Ops III/` (If there isn't already one there)

2. Put index.js inside of your `SteamLibrary/steamapps/workshop/content/311210`

3. Right click the folder (or press `shift + f4`) to open terminal inside of the folder and run ``node index.js`` (if you are not on KDE use another method of opening terminal in folder)

4. Select all of the folders and move them to `SteamLibrary/steamapps/common/Call Of Duty Black Ops III/usermaps`

5. Restart COD and enjoy 