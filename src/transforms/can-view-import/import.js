// This is a generated file, see src/templates/import/import.ejs
import getConfig from '../../utils/getConfig';
import renameImport from '../../utils/renameImport';
import replaceRefs from '../../utils/replaceRefs';
import makeDebug from 'debug';

export default function transformer(file, api, options) {
  const debug = makeDebug(`can-migrate:can-view-import-import:${file.path}`);
  const config = getConfig(options.config);
  const newLocalName = config.moduleToName['can-view-import'];
  const j = api.jscodeshift;
  const printOptions = options.printOptions || {};
  const root = j(file.source);
  const oldLocalName = renameImport(root, {
    oldSourceValues: ['can/view/import/', 'can/view/import/import', 'can/view/import/import.js' ],
    newSourceValue: 'can-view-import',
    newLocalName
  });
  if(oldLocalName) {
    debug(`Replacing all occurences of ${oldLocalName} with ${newLocalName}`);
    replaceRefs(j, root, {
      oldLocalName,
      newLocalName
    });
  }
  return root.toSource(printOptions);
}
