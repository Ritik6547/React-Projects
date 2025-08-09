import Button from "./Button";
import ritikDp from "../assets/ritikDP.png";
import ProfileStats from "./ProfileStats";
import RepositoryList from "./RepositoryList";

const UserDetails = () => {
  return (
    <div className="bg-[#252525] p-6">
      <div className="flex gap-10">
        <div>
          <img
            className="w-[100px] rounded-full border-6 border-[#A08FF8]"
            src={ritikDp}
            alt="github dp"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold">Burak</p>
          <p className="my-2 text-sm text-[#A08FF8]">@Ritik6547</p>
          <p className="font-medium">formerly As a Programmer</p>
          <div className="mt-2 mb-5 flex gap-6 text-sm text-gray-400">
            <p>
              <i className="fa-solid fa-location-dot text-[#A08FF8]"></i> Not
              Specified
            </p>
            <p>
              <i className="fa-solid fa-calendar-days text-[#A08FF8]"></i>{" "}
              Joined Dec1, 2020
            </p>
          </div>
          <Button label="View Profile" roundedFull="rounded-full" />
        </div>
      </div>

      <ProfileStats />

      <div className="flex flex-col gap-4 border-t-2 border-[#323232] py-6 text-lg text-gray-400 md:flex-row md:justify-between md:gap-0 md:text-base">
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-instagram text-[#A08FF8]"></i>
          <p>Not specified</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-link text-[#A08FF8]"></i>
          <p>codesistency.io</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-brands fa-twitter text-[#A08FF8]"></i>
          <p>@codesistency</p>
        </div>
      </div>

      <RepositoryList />
    </div>
  );
};

export default UserDetails;
