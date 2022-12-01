import { BriefcaseIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline";

const JobCard = ({ title, publishDate, minExp, maxExp, clitName, clitLogo}) => {
  return (
    <div className="flex flex-col justify-between border shadow-md h-52 w-96 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-around items-center">
        <img
          src={clitLogo ? clitLogo : "https://startupjobs.asia/assets/d63988b5/65cdde2d/images/default/company-logo-placeholder.png?v=1666170268"}
          alt="logo"
          className="h-3"
        />
        <div>
          <p className="font-semibold text-lg">{title}</p>
          <p>{clitName}</p>
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
            <p className="font-medium text-sm">{minExp < 1 ? `Dibawah 1 tahun` : `${minExp}-${maxExp} Tahun`}</p>
          </div>
          <div className="flex items-center gap-1 bg-orange-300 p-0.5 rounded ">
            <CalendarIcon className="h-4 w-4" />
            <span className="font-medium text-xs">Actively Hiring</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="h-4 w-4" />
          <span className="font-medium text-xs"> {publishDate}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
