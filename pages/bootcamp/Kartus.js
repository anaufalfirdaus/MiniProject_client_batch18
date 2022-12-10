import react, { useEffect } from "react";
import { Rating } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { doGetReviewRequest } from "../redux-saga/Action/BootcampAction";
import { Carousel } from "flowbite-react";
import Link from "next/link";
function Kartus() {
  const dispatch = useDispatch();
  const Listreview = useSelector((state) => state.bootcampStated.listReview);

  useEffect(() => {
    dispatch(doGetReviewRequest());
    console.log(Listreview);
  }, []);

  return (
    <div className="flex">
      {Listreview &&
        Listreview.map((cr) => (
          <div
            key={cr.coreProgId}
            className="grid grid-rows-2 gap-2  h-[280px]  p-3 ml-[5%] bg-white shadow my-6 border black w-[250px] place-content-center mb-[70px] "
          >
            <div className="flex flex-col items-center w-24  mb-3 border  my-6  mt-3 ">
              <img
                className="h-48 w-48 border  shadow shadow-lg "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PQMrbU3VcARQ0motrgKR7ykR8j0j8tGUPg&usqp=CAU"
              />
              <div className="mt-3 ">
                <span>{cr.coreEntity.userName}</span>
              </div>
              <div>
                <span className="line-clamp-4 text-sm ">{cr.coreReview}</span>
              </div>
            </div>

            <div className="flex mt-[120px]  ">
              <Rating className="">
                {Array(5)
                  .fill(cr.coreRating)
                  .map((el, i) => {
                    return (
                      <Rating.Star key={i} filled={el - i > 0 ? true : false} />
                    );
                  })}
              </Rating>
            </div>
          </div>
        ))}

      <Link href={`/bootcamp/simpen/viewAllReview`}>
        <button>
          <h1 className="absolute bottom-0 right-[30px]  underline underline-offset-1">
            View All
          </h1>
        </button>
      </Link>
    </div>
  );
}

export default Kartus;
