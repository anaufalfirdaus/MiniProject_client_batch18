import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const JobDisclosure = ({ title, children }) => {
  return (
    <Disclosure defaultOpen>
      {({ open }) => (
        <div className="border-b pb-5">
          <Disclosure.Button className="py-2 flex w-full justify-between font-medium">
            {title}
            <ChevronDownIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel>{children}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default JobDisclosure;
