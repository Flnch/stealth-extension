# stealth-extension
This repository contains a stand-alone Firefox extension containing the same spoofing functionality than our [stealth version of OpenWPM](https://github.com/Flnch/OpenWPM/tree/issue-448-webdriver_attr). That is, the JavaScript `window.navigator.webdriver` attribute is spoofed to `false`.

## How to build
Execute `build.sh`. It creates the Firefox extension file `stealth-extension.xpi`.

## How to use
This is a unsigned Firefox extension. Therefore, it is not possible to install it in regular versions of Firefox. However, _Firefox Nightly_ and _Firefox unbranded_ have an option to allow unsigned extensions. For more information, see the [MozillaWiki](https://wiki.mozilla.org/Add-ons/Extension_Signing#FAQ).
