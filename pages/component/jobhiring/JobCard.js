import { BriefcaseIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline";

const JobCard = () => {
  return (
    <div className="flex flex-col justify-between border shadow h-52 w-96 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-around items-center">
        <img
          src="https://www.indorama.co.id/images/indorama-logo.png"
          alt="logo"
          className="h-3"
        />
        <div>
          <p className="font-semibold text-lg">Senior Digital Marketer</p>
          <p>Indorama</p>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <LocationMarkerIcon className="h-4 w-4" />
            <p className="font-medium text-sm">Jakarta</p>
          </div>
          <div className="flex items-center gap-1">
            <BriefcaseIcon className="h-4 w-4" />
            <p className="font-medium text-sm">3-5 Tahun</p>
          </div>
          <div className="flex items-center gap-1 bg-orange-300 p-0.5 rounded ">
            <CalendarIcon className="h-4 w-4" />
            <span className="font-medium text-xs">Actively Hiring</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="h-4 w-4" />
          <span className="font-medium text-xs"> Dibuat 1 hari yang lalu</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
