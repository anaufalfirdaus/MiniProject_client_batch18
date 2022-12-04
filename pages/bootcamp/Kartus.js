import Reac, { useEffect } from "react";
import { Rating } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { doGetReviewRequest } from "../redux-saga/Action/BootcampAction";

function Kartus() {
  const dispatch = useDispatch();
  const Listreview = useSelector((state) => state.bootcampStated.listReview);

  useEffect(() => {
    dispatch(doGetReviewRequest());
    console.log(Listreview);
  }, []);

  return (
    <div className="flex ">
      {/* kartu1 */}
      {/* {ListAllUsers &&
        ListAllUsers.map((user) => <h1 key={user.userEntityId}></h1>)} */}

      {Listreview &&
        Listreview.map((cr) => (
          <div
            key={cr.coreProgId}
            className="w-[250px] mr-[3%] ml-[5%] h-[310px]  bg-white border-4 border-black rounded-lg flex flex-col items-center "
          >
            <div className="flex">
              <img
                className="w-24  mb-3 border-2 border-black mt-3 shadow-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PQMrbU3VcARQ0motrgKR7ykR8j0j8tGUPg&usqp=CAU"
              />
            </div>
            <div className="px-[65px] items-">
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white flex justify-center">
                {/* cara memanggil userName dari tabel lain */}
                <h1>{cr.coreEntity.userName}</h1>
              </h5>
              <p className="inline-flex">{cr.coreReview}</p>
            </div>
            <div>
              <Rating className="ml-[100px]">
                {Array(5)
                  .fill(cr.coreRating)
                  .map((el, i) => {
                    return (
                      <Rating.Star key={i} filled={el - i > 0 ? true : false} />
                    );
                  })}

                {/* <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <Rating.Star filled={false} /> */}
              </Rating>
            </div>
          </div>
        ))}
      <h1>dawdwadaw</h1>
    </div>
  );
}

export default Kartus;
