setTimeout(() => {
  console.log("timeout");
});
function test() {
  console.log("test");
  return Promise.resolve().then(() => {
    test();
  });
}
test();
