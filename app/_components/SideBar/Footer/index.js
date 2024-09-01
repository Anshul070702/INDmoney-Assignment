import StarRating from "./starRating.js";
const Page = () => {
  return (
    <div className="my-12 mx-4 border-[1px] border-gray-200 rounded-lg p-4 bg-gray-100">
      <a href="https://indmoney.onelink.me/MgHh/gqtmfeis">
        <div className="flex item-end gap-2.5">
          <span className="font-medium">DOWNLOAD APP</span>{" "}
          <span className="text-green-600">1 Crore+ Downloads</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              alt="img"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/apple_round_logo.png"
            ></img>
            <StarRating rating={4.7} />
          </div>
          <div className="flex items-center gap-2">
            <img
              alt="img"
              loading="lazy"
              width="32"
              height="32"
              decoding="async"
              src="https://indcdn.indmoney.com/cdn-cgi/image/quality=auto,format=auto,width=48/https://indcdn.indmoney.com/cdn/images/seo/website/playstore_round_logo.png"
            ></img>
            <StarRating rating={4.6} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Page;
