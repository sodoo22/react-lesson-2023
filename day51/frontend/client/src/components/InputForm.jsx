export default function InputForm({ isLoading, setIsLoading, setData }) {
  const POST_DATA_URL = "http://localhost:8080/data";

  async function postData(data) {
    // console.log(typeof data);
    // console.log(typeof JSON.stringify(data));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(POST_DATA_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setData(FETCHED_JSON);
    if (FETCHED_DATA) {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target.name.value);
    // console.log(e.target.major.value);

    const data = {
      name: e.target.name.value,
      major: e.target.major.value,
    };
    setIsLoading(true);
    postData(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name:
          <input type="text" placeholder="Name" name="name" />
        </label>
        <br />
        <label htmlFor="">
          Major:
          <input type="text" placeholder="Major" name="major" />
          <br />
          <br />
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}
