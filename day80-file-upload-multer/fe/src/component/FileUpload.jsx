export default function FileUpload() {
  const URL = "http://localhost:8080/fileUpload";

  const handleFileUpload = async (event) => {
    event.preventDefault();
    console.log(event.target.image.files[0]);

    const data = new FormData();
    const files = event.target.image.files;

    data.append("image", files[0]);

    const options = {
      method: "POST",
      body: data,
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <br />
      <br />
      <form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleFileUpload}
      >
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
