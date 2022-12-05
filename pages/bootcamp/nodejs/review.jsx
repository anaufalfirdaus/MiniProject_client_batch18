import { Rating } from "flowbite-react";

export default function Review() {
  return (
    <div className="grid grid-cols-3 pt-2">
      <div className="col-span-2 pr-4">
        <div className=" border border-gray-500/30 shadow-md">
          <h1 className="text-3xl">Review</h1>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <img className="w-10 h-10 rounded-full" src="" alt=""></img>
            </div>
            <div className="col-span-2">
              <p>Nama Disini</p>
              <p>Comment</p>
            </div>
            <div className="col-span-1">
              <p>buat rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
