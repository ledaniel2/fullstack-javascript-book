myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log('Message received from worker');
}
