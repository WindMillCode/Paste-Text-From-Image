# ChangeLog

All notable changes to the "Windmillcode Open Related Files" extension pack will be documented in this file.

* Version updates will be based on vscode relesases
on every vscode update a new version will be release

* the software version extends the vscode patch version by 3 zeros giving us
1000 possible updates before there is an update to vscode and extends back to zero

* you would have to check the CHANGELOG for any breaking, (major), minor or patched updates which will be denoted respectively



## [1.85.1000] - 12-27-2023
* Extension made available to the public ready for use

## [1.85.1001] - 12-27-2023
* [UPDATE] Auto update feature available and persists in settings accordingly
* [UPDATE] Set Default Option Available and persists in settings accordingly
* [FIX] fixed an issue where auto open would trigger on unrelated files
* [UPDATE] ensured output channel is cleared on every call to openRelatedFiles

## [1.85.1002] - 12-27-2023
* [UPDATE] Can toggle whether you want to reset the layout on every new file that gets openend
* [CHANGE] renamed command from Windmillcode Open Related Files: Auto Open to Windmillcode Open Related Files: Toggle Auto Open

## [1.85.1003] - 12-27-2023
[FIX]  added the fast-glob module

## [1.85.1004] - 01-02-2024
* [UPDATE] added a feature where you can select sections of the file to open to instead of opening from the top, to enable just select the default option for the updates to take effect


## [1.85.1005] - 01-04-2024
* [UPDATE] registered a vscode setting so it does nto appear dimmed

## [1.85.1006] - 01-04-2024
* [UPDATE] when editing settings.json json if default option was the chosen option automatically updates the default option


## [1.85.1007] - 01-05-2024
* [UPDATE] removed error when user does not select an option
* [UPDATE] added a video tutorial

## [1.85.1008] - 01-19-2024
* [UPDATE] added InfiniteGlobString class to rpresent the value at the base of InfiniteGlobStringArray or the includeGlobs option
and added InfiniteGlobString.createFileIfNotFoundPath on that so that the extension can create the file if the related files does not exist

## [1.85.1009] - 01-19-2024
* [UPDATE]  added InfiniteGlobString.createFileRelativeToTrustedFilePath for the extension to dynamically create missing files and create folder structres relative to the files that already have been found

## [1.85.2000] - 01-30-2024
- Windmillcode Open Related Files - Context Menu Integration

- Overview
The Windmillcode Open Related Files extension now includes enhanced context menu integration within Visual Studio Code. This update brings all the essential commands of the extension directly to your fingertips while you're working in the editor or navigating through your project files.

- Context Menu Actions

- Editor Context Menu
When you right-click in the editor, the following commands are now available:

- **Open Related Files**
  - **Command**: `windmillcode-open-related-files.openRelatedFiles`
  - **When**: Available when there is an active text editor.
  - **Group**: Navigation
  - **Description**: Opens related files according to the default or selected option in the extension settings.

- **Set Default Option**
  - **Command**: `windmillcode-open-related-files.setDefaultOption`
  - **When**: Available when there is an active text editor.
  - **Group**: Navigation
  - **Description**: Sets the default option for determining related files to work with.

- **Toggle Auto Open**
  - **Command**: `windmillcode-open-related-files.toggleAutoOpen`
  - **When**: Available when there is an active text editor.
  - **Group**: Navigation
  - **Description**: Toggles the automatic opening of related files when switching to an unrelated file.

- **Toggle Reset Layout**
  - **Command**: `windmillcode-open-related-files.toggleResetLayout`
  - **When**: Available when there is an active text editor.
  - **Group**: Navigation
  - **Description**: Toggles whether to reset the editor layout when selecting new files or to continue editing with the current file layout.

- Explorer Context Menu
In addition to the editor context menu, the following command is also available when you right-click on a file in the Explorer:

- **Open Related Files**
  - **Command**: `windmillcode-open-related-files.openRelatedFiles`
  - **When**: Available when a file is selected in the Explorer.
  - **Group**: Navigation
  - **Description**: Opens related files for the selected file according to the configured settings.

- Usage
To use these commands, simply right-click in the editor or on a file in the Explorer and select the desired action from the context menu. Ensure that your `settings.json` is configured according to your project's requirements for optimal use of the Windmillcode Open Related Files extension.


## [1.86.0] - 2-8-2024
* [UPDATE]-  if there is a default options set Open command just opens without prompting for the option

## [1.87.2000] - 3-18-2024
* [UPDATE] Updated `@vscode/vsce` dependency version in `package.json`.
* [PATCH] Removed `outFiles` configuration from `.vscode/launch.json`.
* [PATCH] Enhanced type definition for `filesNames` in `openRelatedFiles.ts`.
* [FEATURE] Added functionality to flatten file name arrays and check file existence in `openRelatedFiles.ts`.
* [FEATURE] Implemented `checkFileExistence` function in `openRelatedFiles.ts`.


## [1.87.2001] - 3-18-2024
- [PATCH] Uncommented the "--profile-temp" argument in `.vscode/launch.json` to enable profile temperature logging.
- [UPDATE] Refactored `getFileNamesToSearchAndPathToIgnore` in `openRelatedFiles.ts` to use a single options object for the `fg` function.
- [PATCH] Changed the return logic in `getFileNamesToSearchAndPathToIgnore` to always return the first file name from `filesNames`.
- [UPDATE] Modified `openOrCreateAndOpenTextDoc` to return `null` if `altPath` is null, undefined, or an empty string, preventing attempts to create or open invalid file paths.
- [FIX] Removed error propagation in `openOrCreateAndOpenTextDoc` by commenting out the `throw createError` line, changing the method's failure handling strategy.
- [UPDATE] Added a check in `openAndShowFile` to return early if the document is null, enhancing robustness against null values.
