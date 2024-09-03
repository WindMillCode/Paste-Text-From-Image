import * as vscode from 'vscode';
import * as Tesseract from 'tesseract.js';
import { spawnSync } from 'child_process';
import * as fs from 'fs';

async function extractTextFromImage(imageBuffer: Buffer): Promise<string> {
  const result = await Tesseract.recognize(imageBuffer, 'eng', {
    logger: (m) => console.log(m), // optional: to monitor progress
  });
  return result.data.text;
}

async function getImageBufferFromClipboard(): Promise<Buffer | null> {
  let imageBuffer: Buffer | null = null;

  try {
    switch (process.platform) {
      case 'darwin': // macOS
        imageBuffer = spawnSync('pngpaste').stdout;
        break;
      case 'win32': // Windows
        const tempImagePath = 'C:\\temp\\clipboard_image.png';
        spawnSync('powershell', ['-command', `Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Clipboard]::GetImage().Save('${tempImagePath}')`]);
        if (fs.existsSync(tempImagePath)) {
          imageBuffer = fs.readFileSync(tempImagePath);
          fs.unlinkSync(tempImagePath); // Clean up the temporary file
        }
        break;
      case 'linux': // Linux
        imageBuffer = spawnSync('xclip', ['-selection', 'clipboard', '-t', 'image/png', '-o']).stdout;
        break;
      default:
        throw new Error(`Unsupported platform: ${process.platform}`);
    }

    if (!imageBuffer || imageBuffer.length === 0) {
      return null;
    }
  } catch (error) {
    console.error('Failed to get image from clipboard:', error);
    return null;
  }

  return imageBuffer;
}

async function replaceImageWithText() {
  try {
    const imageBuffer = await getImageBufferFromClipboard();

    if (!imageBuffer) {
      vscode.window.showErrorMessage('There is no image in the clipboard.');
      return;
    }

    const text = await extractTextFromImage(imageBuffer);

    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const position = editor.selection.active;
      editor.edit((editBuilder) => {
        editBuilder.insert(position, text);
      });
    } else {
      vscode.window.showErrorMessage('There is no active editor.');
    }
  } catch (error) {
    console.error(error);
    vscode.window.showErrorMessage(`Error extracting text: ${error.message}`);
  }
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'windmillcode-paste-text-from-image.pasteImageAsText',
    replaceImageWithText
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
