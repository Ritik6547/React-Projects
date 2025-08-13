import emptyNotes from "../assets/empty-notes-icon.svg";

const EmptyCompletedNotes = ({ label }) => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="">
        <img src={emptyNotes} alt="empty-notes" />
        <p className="mt-5 text-center text-xl font-medium text-gray-900">
          {label}
        </p>
      </div>
    </div>
  );
};

export default EmptyCompletedNotes;
