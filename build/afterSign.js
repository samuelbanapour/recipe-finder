// electron-builder afterSign hook: ad-hoc code-sign the packaged .app.
// Ad-hoc (`codesign --sign -`) adds a valid signature without any Apple
// Developer identity — required for arm64 builds to launch at all on
// Apple Silicon, and prevents tampering, but does NOT satisfy Gatekeeper
// (that needs notarization, which needs a paid Developer ID account).
const { execFileSync } = require('child_process');
const path = require('path');

exports.default = async function afterSign(context) {
  if (context.electronPlatformName !== 'darwin') return;

  const appName = context.packager.appInfo.productFilename;
  const appPath = path.join(context.appOutDir, `${appName}.app`);

  execFileSync('codesign', [
    '--sign', '-',
    '--force',
    '--deep',
    '--all-architectures',
    appPath
  ], { stdio: 'inherit' });

  console.log(`afterSign: ad-hoc signed ${appPath}`);
};
