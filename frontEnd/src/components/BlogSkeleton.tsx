import { Circle } from "./BlogCard"

export const  BlogSkeleton=()=>{
return <div role="status" className="max-w-sm animate-pulse">
    <div className="border-b  border-slate-200  p-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex-col  ">
        <div className="h-4 w-4 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="flex justify-center flex-col pl-2 ">
        <Circle/>
        </div>
        <div className="pl-2 font-thin text-slate-400 text-sm flex justify-center flex-col ">
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">
      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      <div className="text-md font-thin">
      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
      <div className="text-slate-400 text-sm font-thin pt-2">
      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        </div>
    </div>
    
   
  
</div>


}
export const FullBlogSkeleton=()=>{
    return <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
            <div className=" col-span-8 break-words">
                <div className="text-5xl font-extrabold break-words">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="text-slate-500 pt-2">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="pt-4">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-slate-600 text-lg">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>
                <div className="flex w-full">
                    <div className="pr-4 flex flex-col justify-center">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                        <div className="pt-2 text-slate-500">
                        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                        </div>
                    </div>
                </div>  
            </div>
            
        </div>
    </div>

}