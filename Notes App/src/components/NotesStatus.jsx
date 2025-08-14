const NotesStatus = ({ label, imgSrc }) => {
  return (
    <div className="mt-20 flex justify-center">
      <div className="">
        <img className="mx-auto" src={imgSrc} alt="empty-notes" />
        <p className="mt-5 text-center text-xl font-medium text-gray-900">
          {label}
        </p>
      </div>
    </div>
  );
};

export default NotesStatus;
