function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        reject('PromiseAll 参数必须为数组')
      }
      let resloveNum = 0 //记录reslove的个数
      const promisesLength = promises.length
      const result = []
      promises.forEach((item, index) => {
        let promiseItem = item
        // 如果不是promise实例，使用Promise.resolve转换成 Promise 实例
        if (!(item instanceof Promise)) {
          promiseItem = Promise.resolve(item)
        }
        promiseItem.then(res => {
          resloveNum++;
          result[index] = res  //确保返回顺序和参数顺序一致
          if (resloveNum === promisesLength) {
            resolve(result)
          }
        }).catch(res => {
          reject(res)
        })
      })
    })
  }
  

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})

const p2 = 2
const p3 = Promise.resolve(3)
const p4 = Promise.reject(4)

promiseAll([p1,p2,p3]).then(res=>{
    console.log(res);
})
promiseAll([p1,p2,p4]).then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
})