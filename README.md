# Windmillcode Paste Text From Image


# Overview
Do you often find yourself needing to extract text from images, screenshots, or other visual content while working on your projects? The "Windmillcode Paste Text From Image" extension is designed to make this process seamless and efficient by allowing you to extract and paste text from images directly into your VSCode editor.


<table>
  <tr>
    <td align="center" style="border:none;">
      <a href="https://github.com/sponsors/WindMillCode?o=esc">
        <img src="https://raw.githubusercontent.com/WindMillCode/global_media/main/github_sponsor_card.png" alt="Sponsor" width="300"/>
      </a>
    </td>
    <td align="center" style="border:none;">
      <a href="https://www.gofundme.com/f/strengthen-our-business-to-take-on-bigger-initiati/widget/medium?sharesheet=CAMPAIGN_PAGE&attribution_id=sl:620bea14-af8a-423b-ab6b-f9d82f490976">
        <img src="https://raw.githubusercontent.com/WindMillCode/global_media/main/gofund_me_support_our_work.png" alt="Donate" width="300"/>
      </a>
    </td>
  </tr>
</table>


# Usage
1. **Copy an image to your clipboard:**
   - Take a screenshot or copy an image from any source.

2. **Paste the image as text in VSCode:**
   - Right-click in your editor where you want to paste the text.
   - Select `Windmillcode: Paste Image as Text` from the context menu.

3. **The extension will extract the text from the image** using Tesseract.js and insert it into your active editor at the current cursor position.

# Commands

| Title | Command | Description |
| ----------- | ------- | ----------- |
| Windmillcode Paste Image as Text | `windmillcode-paste-text-from-image.pasteImageAsText` | Extracts text from the image in your clipboard and pastes it into the active editor. |

# Contributing
Contributions are welcome! we need help on accurate results when greater than ~200 characters are in the image the results become very poor

## Caveat
if the result is bad you must zoom into the image to get better results.
For large texts breaker into smaller copies

## Roadmap
- [ ] investigate image optimization solutions for better overall results


# License
This extension is licensed under the MIT License. See the LICENSE file for details.
