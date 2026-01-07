import { Users, Share2, CalendarCheck, CreditCard } from 'lucide-react';

export default function StatsSection() {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Helping a local <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Right Stats Section */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6">
          <Stat icon={<Users className="text-green-600 w-6 h-6" />} number="2,245,341" label="Members" />
          <Stat icon={<Share2 className="text-green-300 w-6 h-6" />} number="46,328" label="Clubs" />
          <Stat icon={<CalendarCheck className="text-green-600 w-6 h-6" />} number="828,867" label="Event Bookings" />
          <Stat icon={<CreditCard className="text-green-600 w-6 h-6" />} number="1,926,436" label="Payments" />
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Component
function Stat({ icon, number, label }) {
  return (
    <div className="flex items-center space-x-3">
      <div>{icon}</div>
      <div>
        <div className="text-lg font-semibold text-gray-800">{number}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
}
