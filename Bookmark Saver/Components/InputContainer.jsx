import InputBox from "./inputBox";

const InputContainer = ({
  setBookmarkName,
  setBookmarkUrl,
  bookmarkName,
  bookmarkUrl,
}) => {
  return (
    <div className="input-container">
      <InputBox
        placeholder="Bookmark Name"
        onChange={(e) => setBookmarkName(e.target.value)}
        value={bookmarkName}
      />
      <InputBox
        placeholder="Bookmark URL"
        onChange={(e) => setBookmarkUrl(e.target.value)}
        value={bookmarkUrl}
      />
    </div>
  );
};

export default InputContainer;
