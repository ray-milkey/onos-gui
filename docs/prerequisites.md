# Development Prerequisites
This document provides an overview of the tools and packages needed to work on and to build onos-gui.
Developers are expected to have these tools installed on the machine where the project is built.

## NodeJS
Install the latest Long Term Support version of NodeJS on your system.
* Downloads are available from https://nodejs.org/en/download/
* Instructions for installing on Linux are at https://github.com/nodejs/help/wiki/Installation

After installing it should be possible to see the version of **node** and **npm**
(which is bundled with it) that you installed with:
```bash
node -v
npm -v
```

## Angular CLI
Angular CLI provides the **ng** tools. Installation instructions are at
https://angular.io/guide/setup-local

The following command can be run from any folder:
```bash
npm install -g @angular/cli
```
After this install (and after changing to the web/onos-gui folder) it should be
possible to see the Angular CLI version:
```bash
cd web/onos-gui
ng version
```
This should give a result like:
```bash
Your global Angular CLI version (8.1.2) is greater than your local
version (7.0.7). The local Angular CLI version is used.

To disable this warning use "ng config -g cli.warnings.versionMismatch false".

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 7.0.7
Node: 12.6.0
OS: linux x64
Angular: 7.0.4
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router
...
``` 

## Angular dependencies
Staying inside the **web/onos-gui** folder, the Angular dependencies must be installed.
This is as simple as running **npm install** in the folder. This takes the dependencies
listed in **package.json** and installsthem in the temporary folder **node_modules**:
```bash
npm install
```

## Docker
[Docker] is required to build the project Docker images and also to compile `*.proto` files into TypeScript source files.

## Local kubernetes environment
Some form of local kubernetes development environment is also needed.
The core team uses [Kind], but there are other options such as [Minikube].

## IDE
Some form of an integrated development environment is also recommended.
The core team uses the [Intellij WebStorm IDE] from JetBrains, but there are many other options. 
Microsoft's [Visual Studio Code] is one such option and is available as a free download.

## License
The project requires that all Typescript source files are properly annotated using the Apache 2.0 License.
Since this requirement is enforced by the CI process, it is strongly recommended that developers
setup their IDE to include the [license text](../build/licensing/boilerplate.ts.txt)
automatically.