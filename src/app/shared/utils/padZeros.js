export default function padZeros(cant, value) {
  let num = value.substr(0, value.length).padStart(cant, '0');
  return num;
}
