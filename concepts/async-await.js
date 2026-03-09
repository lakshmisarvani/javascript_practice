function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 1000);
  });
}

async function run() {
  const result = await delay();
  console.log(result);
}

run();