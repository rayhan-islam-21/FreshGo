
import { Button } from "../ui/button";
import { TbCurrencyTaka } from "react-icons/tb";


const AdminCard = ({ title, stats, previous, onDetailsClick }) => {
  return (
    <article className="shadow-sm  rounded-lg p-4 flex flex-col justify-between w-full max-w-sm">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Last 7 days</p>
      </header>

      <section className="mb-2">
        <h1 className="text-2xl flex items-center  font-bold">{previous.currency === "৳" && <TbCurrencyTaka/> } <span className="-order-1">{stats.amount}</span></h1>
        {stats.percentage !== undefined && stats.action && (
          <p
            className={`text-sm ${
              stats.percentage > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stats.action} ({stats.percentage}%)
          </p>
        )}
      </section>

      <footer className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-700">
          Previous 7 days:{" "}
          {previous.currency === "৳" ? (
            <TbCurrencyTaka size={30} className="inline w-5 h-5" />
          ) : null}
          {previous.amount}
        </p>
        <Button className="border-none text-gray-600 hover:scale-101 bg-[#C1E6BA]" variant="secondary" size="sm">
          Details
        </Button>
      </footer>
    </article>
  );
};

export default AdminCard;
