# Environment Setup

1. Install [git](https://git-scm.com/downloads)
2. Install [node.js & npm](https://nodejs.org/en/download)
3. run `npm i`
4. Use live server until we get npm start working

## Contributing Code

The team can decide how they want to code together, ie [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [vscode live share extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare), [Github PRs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

I would recommend learning basic git commands and merging branches. Decide who will work on what pages to cause less merge conflicts.

### Create a branch

1. `git switch -c <your_name>`
2. _Write your code_
3. `git add .`
4. `git commit -m "part of website added"`

### Where to put code

The `.github/deploy.yaml` specifies custom instructions to deploy to github pages. Anything put in `src` will be considered the root of the site (ie `src/index.html` will be the home page). Anything outside of src will not be deployed to pages.

### Merge code together

1. `git switch main`
2. `git pull`
3. `git merge <your_name>`
4. _Resolve merge conflicts if necessary_
   - `git add <fixed files>`
   - `git merge --continue`
   - exit vim with `ESC:wq`
5. `git push`
6. `git branch -D <your_name>`

It may be easier to use VS Code's source control extension, and you can easily not have to run `git add`, `git commit`, `git push`, or `git pull`.
