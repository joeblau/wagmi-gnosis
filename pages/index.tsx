import type { NextPage } from "next";
import { useEnsName } from "wagmi";

const Home: NextPage = () => {
  // doodles.eth/poopie.eth wallet works
  const { data: ensName } = useEnsName({
    address: "0xC35f3F92A9F27A157B309a9656CfEA30E5C9cCe3",
  });

  // atomize.eth gnosis safe does not work
  // const { data: ensName } = useEnsName({
  //   address: "0xd2aa6323f32dae7aa8e20734260204a6ee7c1e94",
  // });

  return (
    <div>
      <h1>{`ensName: ${ensName}`} </h1>
    </div>
  );
};

export default Home;
