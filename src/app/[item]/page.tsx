import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function NFTPage(props: Params) {
  console.log(props.params.item);
  return <div>aaaaaaaaaaaaaaaa</div>;
}
