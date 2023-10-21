import axios from "axios";

export const EditUser: React.FC = () => {
  const onClickAppear = () => {
    const URL: string = "https://railway.bookreview.techtrain.dev";
    axios
      .get(`${URL}/users`, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTc5MjA1MzAsImlhdCI6MTY5NzgzNDEzMCwic3ViIjoiNTQ1NDY1NTczNTQiLCJ1c2VyX2lkIjoiNWE4Y2NhYWItN2VmNS00YjhlLWFkYWUtMGJlNWZiNGMyZTNlIn0.-I9Mn7GbHJd5da4ojU9gfA5p7zzPpvfYSN6mtw5d4dI",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return <button onClick={onClickAppear}>表示</button>;
};
