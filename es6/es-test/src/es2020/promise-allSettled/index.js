const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));

/*  [
  { status: 'fulfilled', value: undefined },
  { status: 'rejected', reason: undefined }
] */

Promise.all([p1, p2]).then(data => console.log('all',data))
.catch(res => console.log('all-error',res))

/* all-error undefined */

//*========================================================= */

/* Promise.allSettled会把两个状态给返回，
Promise.all在有一个是rejected的时候，就直接捕获rejected结束了 */