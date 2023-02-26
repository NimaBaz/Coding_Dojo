@echo off
SET CurrentDir="%~dp0"

::rem check if folder name (%1) is passed, if not exit
if [%1] == [] goto :ERROR

@echo on

mkdir %1
cd %1
mkdir server
cd %CurrentDir%

call InstallReact.bat %1
cd %CurrentDir%



rem: adding folders
mkdir %1\client\src\components
mkdir %1\server\config
mkdir %1\server\controllers
mkdir %1\server\models
mkdir %1\server\routes

call InstallBootStrap.bat %1 
cd %CurrentDir%

call InstallFrontEnd.bat %1
cd %CurrentDir%


call SetupBackend.bat %1
cd %CurrentDir%


call InstallBackend.bat %1
cd %CurrentDir%


rem Go back to Client dir and run npm start
cd  %1\client
npm start
goto :EXIT


:ERROR
msg * "Folder Name is missing, usage: CreateReactFolders.bat <folderName>"
exit /b

:EXIT



