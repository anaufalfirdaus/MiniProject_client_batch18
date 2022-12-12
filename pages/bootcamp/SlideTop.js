import React from "react";
import { Carousel } from "flowbite-react";
function SlideTop() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 border shadow my-6   w-[90%] ml-[5%]">
      <Carousel className="bg-gray-200">
        {/* slide1 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[1px] ">
            <h1 className="text-2xl mt-[50px] ">Bootcamp Regular</h1>
            <h3>
              Bootcamp reguler dilakukan secara offline di sentul bogor <br />{" "}
              kamu akan diisolasi disana selama 3 bulan, makan gratis 3x,
              menginap gratis
              <br /> dan kamu bisa belajar bareng bersama mentor dan teman2mu
            </h3>
          </div>
          <div className="mr-[170px] mt-[10px]">
            {/* gambar slide 1 */}
            <img
              className="w-auto h-auto  border shadow my-6"
              src="https://lh3.googleusercontent.com/3rTdaX-fviXin5_F4ooWQiMgJAtVLTEkdm7b1COxdzpNkF4fj5_nPOGisnlSg7k1e-JJDRjGzCDByNzx_DKtICs-jT0mRW0_aFDUsMWCVDNikcv-Tc58kHrieyAKlmV2rcjwTHxUtrY7QX1p_ROKNfz5eA8jquSXgGqr5hMPT-Z3qpfzEd4glak0DWYb7mjZwAbRXR6_28q5MXvhv-L8M4VQoAZyXA5eK0WndOd9hnheL26g1VklWVTnBPS59UNdRjP6x2pCkceY3SRVq4YmcziLtulkE1J5qsBuc9WVL4jAX42buYqPFyk8pJVb78Rl-MUTWH9WLmht_nJ5FYTIy-LpwlTrVKXzpbnB46bkKuFN6YvXLj2ZL3PrIiAVKVmf9VXsXjaU3ik7xpv-ySjdGs-sOtTY79uxcXzsbBK1SjX4U11dhg1ZvmEDM7WlvzeAUpH3Owb0cL-ATbmY8BbKVaulikV8l2I78CGTUkwPujDCOiIgUTV6EUVNdkUdtkTSeEBhP-JiSoPV4FfEd15lHaJsV4hECMvR71gFMXVhU6-fark2VyG5aAgauSyr5Iwk0hPbZaSnbKP1TIUri54CqLC25PdxK4O-no49akCFGcrkf9meroXGWaBK9h2wvxd4TfNsiLtG31ZNNhrR116IknJRfDd6YXgzTIDUBxAv_n5-txixxu7dS51a5zb8mtmPPLVJdMcNLuIiImAcv_F8EsJ723ncFa42I1EuzHZs_KluUCEfH9ptPHL2hRSMaD_S-5GBq3PY-WwNPSAs41N8-0gsd5lpTEtSjCeWDs6pdW_rFXt6Jxy5Hqg72DmgKA0j-zqsPX-_h0Wmbq3WjVaG1yz_6oPwiouur1JmccLtltd8iY2zBs_JFz-pkTslCm9VV40Y4t9-X4OShsPOQ9dm-apfgVY9HlmEPafnAP08j1aVB4qTtEWDJkfzdDax592PAbkNejLRY4eN66Fc7viJAA0ApDxOpBAc9QzqnVokXcF_l0SDkZ9EWmwCVIn8TURYd3eWcCbFiFxqtGCWT_Mqx15NHtNIGzxCUgBP7ZJbsxqZbH-V8x-QCriTQQ=w866-h288-no?authuser=0"
            />
          </div>
        </div>

        {/* slide2 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[18px]">
            <h1 className="text-2xl mt-[50px]">Bootcamp Online</h1>
            <h3>
              Bootcamp Online dilakukan secara online dan diguide by mentor,
              kamu akan <br /> belajar dari senin-jumat, dari jam 8.00-17.00
              Materi selain diajarkan mentor,akan
              <br /> di provide juga materi video
            </h3>
          </div>

          <div className="mr-[170px] mt-[10px] ">
            <img
              className="w-auto h-auto border shadow my-6 "
              src="https://lh3.googleusercontent.com/3rTdaX-fviXin5_F4ooWQiMgJAtVLTEkdm7b1COxdzpNkF4fj5_nPOGisnlSg7k1e-JJDRjGzCDByNzx_DKtICs-jT0mRW0_aFDUsMWCVDNikcv-Tc58kHrieyAKlmV2rcjwTHxUtrY7QX1p_ROKNfz5eA8jquSXgGqr5hMPT-Z3qpfzEd4glak0DWYb7mjZwAbRXR6_28q5MXvhv-L8M4VQoAZyXA5eK0WndOd9hnheL26g1VklWVTnBPS59UNdRjP6x2pCkceY3SRVq4YmcziLtulkE1J5qsBuc9WVL4jAX42buYqPFyk8pJVb78Rl-MUTWH9WLmht_nJ5FYTIy-LpwlTrVKXzpbnB46bkKuFN6YvXLj2ZL3PrIiAVKVmf9VXsXjaU3ik7xpv-ySjdGs-sOtTY79uxcXzsbBK1SjX4U11dhg1ZvmEDM7WlvzeAUpH3Owb0cL-ATbmY8BbKVaulikV8l2I78CGTUkwPujDCOiIgUTV6EUVNdkUdtkTSeEBhP-JiSoPV4FfEd15lHaJsV4hECMvR71gFMXVhU6-fark2VyG5aAgauSyr5Iwk0hPbZaSnbKP1TIUri54CqLC25PdxK4O-no49akCFGcrkf9meroXGWaBK9h2wvxd4TfNsiLtG31ZNNhrR116IknJRfDd6YXgzTIDUBxAv_n5-txixxu7dS51a5zb8mtmPPLVJdMcNLuIiImAcv_F8EsJ723ncFa42I1EuzHZs_KluUCEfH9ptPHL2hRSMaD_S-5GBq3PY-WwNPSAs41N8-0gsd5lpTEtSjCeWDs6pdW_rFXt6Jxy5Hqg72DmgKA0j-zqsPX-_h0Wmbq3WjVaG1yz_6oPwiouur1JmccLtltd8iY2zBs_JFz-pkTslCm9VV40Y4t9-X4OShsPOQ9dm-apfgVY9HlmEPafnAP08j1aVB4qTtEWDJkfzdDax592PAbkNejLRY4eN66Fc7viJAA0ApDxOpBAc9QzqnVokXcF_l0SDkZ9EWmwCVIn8TURYd3eWcCbFiFxqtGCWT_Mqx15NHtNIGzxCUgBP7ZJbsxqZbH-V8x-QCriTQQ=w866-h288-no?authuser=0"
            />
          </div>
        </div>
        {/* slide3 */}
        <div className="grid  grid-cols-2 ml-[100px]  ">
          <div className="mb-[18    0px]">
            <h1 className="text-2xl mt-[50px] ">Bootcamp Corporate</h1>
            <h3>
              Bootcamp Corporate adalah bootcamp spesial, artinya kamu akan
              langsung di
              <br /> placement ketika baru masuk bootcamp, tapi filtering test
              nya sanglatlah strict,
              <br />
              karena yang melakukan filtering test adalah client corporate
            </h3>
          </div>

          <div className="mr-[170px] mt-[10px] ">
            <img
              className="w-auto h-auto border shadow my-6"
              src="https://lh3.googleusercontent.com/3rTdaX-fviXin5_F4ooWQiMgJAtVLTEkdm7b1COxdzpNkF4fj5_nPOGisnlSg7k1e-JJDRjGzCDByNzx_DKtICs-jT0mRW0_aFDUsMWCVDNikcv-Tc58kHrieyAKlmV2rcjwTHxUtrY7QX1p_ROKNfz5eA8jquSXgGqr5hMPT-Z3qpfzEd4glak0DWYb7mjZwAbRXR6_28q5MXvhv-L8M4VQoAZyXA5eK0WndOd9hnheL26g1VklWVTnBPS59UNdRjP6x2pCkceY3SRVq4YmcziLtulkE1J5qsBuc9WVL4jAX42buYqPFyk8pJVb78Rl-MUTWH9WLmht_nJ5FYTIy-LpwlTrVKXzpbnB46bkKuFN6YvXLj2ZL3PrIiAVKVmf9VXsXjaU3ik7xpv-ySjdGs-sOtTY79uxcXzsbBK1SjX4U11dhg1ZvmEDM7WlvzeAUpH3Owb0cL-ATbmY8BbKVaulikV8l2I78CGTUkwPujDCOiIgUTV6EUVNdkUdtkTSeEBhP-JiSoPV4FfEd15lHaJsV4hECMvR71gFMXVhU6-fark2VyG5aAgauSyr5Iwk0hPbZaSnbKP1TIUri54CqLC25PdxK4O-no49akCFGcrkf9meroXGWaBK9h2wvxd4TfNsiLtG31ZNNhrR116IknJRfDd6YXgzTIDUBxAv_n5-txixxu7dS51a5zb8mtmPPLVJdMcNLuIiImAcv_F8EsJ723ncFa42I1EuzHZs_KluUCEfH9ptPHL2hRSMaD_S-5GBq3PY-WwNPSAs41N8-0gsd5lpTEtSjCeWDs6pdW_rFXt6Jxy5Hqg72DmgKA0j-zqsPX-_h0Wmbq3WjVaG1yz_6oPwiouur1JmccLtltd8iY2zBs_JFz-pkTslCm9VV40Y4t9-X4OShsPOQ9dm-apfgVY9HlmEPafnAP08j1aVB4qTtEWDJkfzdDax592PAbkNejLRY4eN66Fc7viJAA0ApDxOpBAc9QzqnVokXcF_l0SDkZ9EWmwCVIn8TURYd3eWcCbFiFxqtGCWT_Mqx15NHtNIGzxCUgBP7ZJbsxqZbH-V8x-QCriTQQ=w866-h288-no?authuser=0"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SlideTop;
