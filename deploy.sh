#!/bin/bash
git checkout gh-pages          # Switch to the gh-pages branch
git pull origin gh-pages       # Ensure it's up-to-date with remote
git rm -r *                    # Remove old files
cp -r ../build/* .             # Copy new files from build directory
git add .                      # Add all files to staging
git commit -m "Update website" # Commit changes
git push origin gh-pages       # Push changes to remote
git checkout -                 # Switch back to the previous branch
Make it executable and run it: