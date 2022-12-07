import Reac, { useEffect } from "react";
import { Rating } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { doGetReviewRequest } from "../redux-saga/Action/BootcampAction";
import Link from "next/link";

function Kartus() {
  const dispatch = useDispatch();
  const Listreview = useSelector((state) => state.bootcampStated.listReview);

  useEffect(() => {
    dispatch(doGetReviewRequest());
    console.log(Listreview);
  }, []);

  return (
    <div className="flex  ">
      <div className="grid grid-rows-2 gap-2 w-[20%] h-[500px] border border-black p-3 ">
        <div className="flex flex-col items-center">
          <img
            className="h-48 w-48"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PQMrbU3VcARQ0motrgKR7ykR8j0j8tGUPg&usqp=CAU"
          />
          <div>
            <span>Naufal</span>
          </div>
          <div>
            <span className="line-clamp-4 ">
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and
            </span>
          </div>
        </div>

        <div className="flex place-content-end ">
          <Rating className="">
            {Array(5)
              .fill(4)
              .map((el, i) => {
                return (
                  <Rating.Star key={i} filled={el - i > 0 ? true : false} />
                );
              })}
          </Rating>
        </div>
      </div>
      {/* kartu1 */}
      {/* {ListAllUsers &&
        ListAllUsers.map((user) => <h1 key={user.userEntityId}></h1>)} */}

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
