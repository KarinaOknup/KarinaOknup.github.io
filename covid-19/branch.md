
# Branch (testing)

- branch `master` default, do not use!
- branch `gh-pages` production branch, pull request from `dev`.
- branch `dev` development branch.
  - `git pull origin dev`
  - `git branch --set-upstream-to=origin/origin dev`
- creating a new branch `git checkout -b <username>/features`. Example `git checkout -b burik84/description`
- `git push origin <username>/features`
- new pull request from `<username>/features` to branch `dev`
- merge pull request
- Important! before work, we update the branch of `dev` from which we work `git pull origin dev`.
