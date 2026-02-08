import { DollarSign } from "lucide-react";
import { Button } from "../ui/button";

const AdminCard = ({ title, stats, previous, onDetailsClick }) => {
  return (
    <article className=" shadow rounded-lg p-4 flex flex-col justify-between w-full max-w-sm">
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">Last 7 days</p>
      </header>

      <section className="mb-2">
        <h1 className="text-2xl font-bold">{stats.amount}</h1>
        <p className={`text-sm ${stats.percentage > 0 ? "text-green-500" : "text-red-500"}`}>
          {stats.action} ({stats.percentage}%)
        </p>
      </section>

      <footer className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-500">
          Previous 7 days: <DollarSign className="inline w-4 h-4" /> {previous.amount}
        </p>
        <Button onClick={onDetailsClick} variant="outline" size="lg">
          Details
        </Button>
      </footer>
    </article>
  );
};

export default AdminCard;
