ace.config.setModuleUrl(
  "ace/mode/aql",
  require("file-loader?esModule=false!./src-noconflict/mode-aql.js")
);
ace.config.setModuleUrl(
  "ace/mode/json",
  require("file-loader?esModule=false!./src-noconflict/mode-json.js")
);
ace.config.setModuleUrl(
  "ace/mode/stream",
  require("file-loader?esModule=false!./src-noconflict/mode-stream.js")
);
