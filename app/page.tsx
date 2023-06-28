const getLeaderBoards = async () => {
  const url = "https://api-gateway.skymavis.com/origins/v2/season-leaderboards";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-Key": `${process.env.API_KEY}`
    }
  };

  const data = await fetch(url, options)
    .then((res) => res.json())
    // .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  return data;
};

interface Player {
  name: string;
  topRank: number;
  vstar: number;
}
export default async function Home() {
  const data = await getLeaderBoards();

  return (
    <div>
      <h1 className="text-2xl font-bold">Axie Infinity Leaderboard</h1>
      {data._items.map((player: Player) => {
        return (
          <div className="columns-2 flex my-4">
            <div className="w-24 p-4 text-center">#{player.topRank}</div>
            <div className="p-4">
              <h4 className="font-bold text-lg">{player.name}</h4>
              <p>{player.vstar}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
