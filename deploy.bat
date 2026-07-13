@echo off
echo ========================================================
echo Deploying REAIM Web to GitHub...
echo ========================================================
echo.

git init
git add .
git commit -m "Deploy production build"
git branch -M main
git remote add origin https://github.com/BennK2/reaimweb.git

echo.
echo Uploading files...
git push -u origin main --force

echo.
echo ========================================================
echo Deployment Complete!
echo Please allow 1-2 minutes for GitHub Pages to refresh.
echo ========================================================
pause

