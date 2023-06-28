interface Player {
  name: string;
  topRank: number;
  vstar: number;
}

interface Players {
  _items: Player[];
  _metadata: {
    limit: number;
    offset: number;
    total: number;
    hasNext: boolean;
  };
}

const Leaderboards = async (players: Players) => {
  return (
    <div>
      {players._items.map((player: Player) => {
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
};
export default Leaderboards;
