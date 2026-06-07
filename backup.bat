@echo off
setlocal enabledelayedexpansion

set BACKUP_DIR=backup_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%
mkdir "%BACKUP_DIR%"

echo Backing up important files...
copy "app.json" "%BACKUP_DIR%\"
copy "app.js" "%BACKUP_DIR%\"
copy "app.wxss" "%BACKUP_DIR%\"
copy "package.json" "%BACKUP_DIR%\"
copy "project.config.json" "%BACKUP_DIR%\"
copy "project.private.config.json" "%BACKUP_DIR%\"

xcopy /E /I "pages" "%BACKUP_DIR%\pages"
xcopy /E /I "components" "%BACKUP_DIR%\components"
xcopy /E /I "data" "%BACKUP_DIR%\data"
xcopy /E /I "utils" "%BACKUP_DIR%\utils"

echo Backup completed to: %BACKUP_DIR%
pause