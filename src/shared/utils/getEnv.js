export default function getEnv(varName, defaultValue) {
  return process.env[varName] || defaultValue;
}
