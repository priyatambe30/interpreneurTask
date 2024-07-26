import React from "react";
import   './Message.css'
import Menubar2 from "./Menubar2";

const Messages = () => {
  return (
    <>

      <div className="flex">
      <div><Menubar2/></div>
      <div className="flex gap-6 font-thin">

      {/* Message Box */}
      <div className="message-box  w-1/3 ">
        <div className="chat-box flex  gap-x-8 font-bold text-[16px] ">
          Messages
          <button className=" text-white messagebutton rounded-full bg-sky-400 grid gap-4">
            +
          </button>
        </div>

        <div className="searchbtnmsg1 flex">
        <button type="submit" className=" fafasearchmessage bg-slate-100"> <i className="fa fa-search"></i></button>
          <input type="text" placeholder="search.." className="searchtext1 font-thin rounded-full"></input>
          
        </div>
        
        <div className=" category flex gap-6">
          <p className="  flex">All</p>
          <p className=" text-blue-600 flex">Personal</p>
          <p className="  flex">Team</p>
          
        </div>
        {/* <div><hr></hr></div> */}
        <div className="grid gap-4">
        <div className="chatting-list  flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
              <img className="h-10 w-10" src="./images/image2.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
                <a className="text-[14px] text-left"> Robert Bacins</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
              <img className="h-10 w-10" src="./images/image3.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> John Carilo</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0 ">
              <img className="h-10 w-10" src="./images/image4.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Adriene Watson</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>


        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image5.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Jhon Deo</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image9.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Shelby Goode</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image7.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Mark Ruffalo</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image8.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div className="">
              <a className="text-[14px] text-left"> Bethany Jackson</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image9.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Shelby Goode</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="chatting-list grid flex border-solid border-2 border-slate-200">
          <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
            <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
              <img className="h-10 w-10" src="./images/image7.png"></img>
              <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
              <div>
              <a className="text-[14px] text-left"> Mark Ruffalo</a>
                <p className="text-[9px] text-left">Lorem Ipsum is simply dummy text <br/>of the printing </p>
              </div>
            </li>
          </ul>
        </div>

        </div>

        

         {/* <div className=" chatting-list grid-cols-2 gap-4 flex border-solid border-2 border-slate-200">
          <div className="w-[30px] h-[30px]"><img src="./images/image1.png"></img></div>
          <div>
            <p className="font-bold text-[14px]">Shelby Goode</p>
            <span className="text-[8px] text-center">Lorem Ipsum is simply dummy text of the printing </span>
          </div>

         </div> */}


         </div>
        
      
      


      {/* Message Box */}
      <div className="indivisual-chat-box-container ">
            <div className="indivisual-chat-box ">
              
                        <div className="  flex border-solid border-2 border-slate-100">
                            <div>
                            <ul role="list" className="p-2 divide-y divide-slate-200 gap-4">
                              <li className="group/item hover:bg-slate-100 flex py-4 first:pt-0 last:pb-0">
                                <img className="h-10 w-10" src="./images/image4.png"></img>
                                <img className=" onlineImage h-2 w-2 rounded-full" src="./images/online.png"></img>
                                <div>
                                  <a> Adriene Watson</a>
                                  <p className="text-[10px] text-left text-white">Online </p>
                                </div>
                              </li>
                            </ul>
                            </div>

                            <div className=" chat-box-symbol flex  gap-2">
                              <img className=" w-6 h-6 " src="./images/call(2).png"></img>
                              <img className=" w-6 h-6 " src="./images/videocall.png"></img>
                              <img className=" w-6 h-6 " src="./images/threepoint.png"></img>

                            </div>
                      </div>

                      <div className="chatting">
                                <div><p className="chat-para1 grid text-white text-[10px] rounded-lg">Lorem Ipsum is simply </p></div>
                                <div><p className="chat-para2 grid text-white text-[10px] text-left rounded-lg">Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry.</p></div>
                                <div  className="grid gap-2"><img className="h-10 w-10"  src="./images/image4.png"></img></div>

                                <div className=" chatimages flex gap-2 rounded-lg">
                                  <img className="rounded-lg" src="./images/chatimage1.png"></img>
                                <img src="./images/chatimage2.png"></img>
                                </div>

                                <div><p className="chat-para3 grid text-white text-[10px] rounded-lg">
                                  Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry.</p></div>
                                <div><img className="h-10 w-10" src="./images/image4.png"></img></div>
                      </div>


                      <div className=" chat-bottom-images flex  gap-2">
                                <img className=" w-5 h-7 pt-1" src="./images/add image.png"></img>
                                <img className="  h-6 pt-1" src="./images/line.png"></img>
                                <input className=" w-90% h-6 text-[12px]" type="text" placeholder="Type a message..."></input>
                                <div className="smile-send-icon flex gap-2">
                                <img className=" w-5 h-7 pt-1 " src="./images/Smile.png"></img>
                                <img className=" w-5 h-7 pt-1" src="./images/send icon.png"></img>
                                </div>
                      </div>
              </div>

           

      </div>




      </div>
      </div>
    </>
  );
};

export default Messages;
