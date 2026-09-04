import { spawn } from "node:child_process";

const args = process.argv.slice(2);
let hostname = "0.0.0.0";
let port = "3000";

for (let index = 0; index < args.length; index += 1) {
  if (args[index] === "--host" || args[index] === "--hostname") {
    hostname = args[index + 1] ?? hostname;
    index += 1;
  } else if (args[index] === "--port") {
    port = args[index + 1] ?? port;
    index += 1;
  }
}

const nextProcess = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", "--hostname", hostname, "--port", port],
  { stdio: "inherit" },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => nextProcess.kill(signal));
}

nextProcess.on("exit", (code) => process.exit(code ?? 0));
