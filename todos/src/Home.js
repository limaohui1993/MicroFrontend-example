import React,{useState,useEffect} from 'react'
 
function useToolsModule(){
  let [toolsModule,setToolsModule ] = useState();
  useEffect(()=>{
    System.import("@study/tools").then(setToolsModule)
  },[])
  return toolsModule
}

export default function home() {
  const toolsModule=useToolsModule();
  useEffect(()=>{
    let subjection=null
    if(toolsModule){
      //跨应用调用方法
      toolsModule.sayHello("@study/todos")
      //发布订阅
      subjection=toolsModule.sharedSubject.subscribe(console.log)
    }
    //清理订阅
    return ()=>subjection.unsubscribe()
  },[])
  return (
    <div>
      home组件
      <button onClick={()=>toolsModule.sharedSubject.next("hello,hello,hello,hello")}>button</button>
    </div>
  )
}
