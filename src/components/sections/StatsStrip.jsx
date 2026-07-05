import { motion } from "framer-motion";
import { Megaphone, Flag, Users, Target, Zap, Share2 } from "lucide-react";

// Mathematically precise starburst polygon points
const getStarburstPoints = () => {
  const points = [];
  const numPoints = 18;
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = (i * Math.PI) / numPoints - Math.PI / 2;
    const radius = i % 2 === 0 ? 48 : 36;
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return points.join(" ");
};

const StarburstBadge = ({ icon: Icon, isPurple }) => (
  <div className="relative h-16 w-16 flex items-center justify-center">
    <svg viewBox="0 0 100 100" className={`absolute inset-0 h-full w-full ${isPurple ? 'text-white' : 'text-purple-50'}`} fill="currentColor">
      <polygon points={getStarburstPoints()} />
    </svg>
    <div className={`relative z-10 ${isPurple ? 'text-purple-600' : 'text-purple-600'}`}>
      <Icon size={22} strokeWidth={2.5} />
    </div>
  </div>
);

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100/50 via-purple-50/20 to-white px-6 py-24 md:py-32">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[50rem] w-[50rem] rounded-full bg-purple-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading matching Nas Summit bold uppercase style */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl uppercase">
            World's Top <span className="text-purple-600">Creators</span> Gathering
          </h2>
        </div>

        {/* 3-Column Staggered Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start md:pb-16">
          
          {/* Column 1: Shifted Down */}
          <div className="flex flex-col gap-6 lg:gap-8 md:translate-y-16">
            {/* Stat 1: 120+ Speakers (Taller Purple Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between rounded-[2rem] bg-purple-600 p-8 h-80 shadow-xl shadow-purple-900/10 text-white"
            >
              <StarburstBadge icon={Megaphone} isPurple={true} />
              <div className="mt-8">
                <p className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                  120+
                </p>
                <p className="mt-2 text-sm font-extrabold tracking-widest text-purple-100 uppercase">
                  Speakers
                </p>
              </div>
            </motion.div>

            {/* Stat 2: 170+ Affiliate Networks */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8 h-60 shadow-lg shadow-purple-900/5 border border-purple-100/40 text-slate-900"
            >
              <StarburstBadge icon={Share2} isPurple={false} />
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                  170+
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                  Affiliate Networks
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Aligned High */}
          <div className="flex flex-col gap-6 lg:gap-8 md:translate-y-0">
            {/* Stat 3: 40+ Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8 h-60 shadow-lg shadow-purple-900/5 border border-purple-100/40 text-slate-900"
            >
              <StarburstBadge icon={Zap} isPurple={false} />
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                  40+
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                  Traffic Sources
                </p>
              </div>
            </motion.div>

            {/* Stat 4: 110+ Countries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8 h-60 shadow-lg shadow-purple-900/5 border border-purple-100/40 text-slate-900"
            >
              <StarburstBadge icon={Flag} isPurple={false} />
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                  110+
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                  Countries
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Shifted Midway */}
          <div className="flex flex-col gap-6 lg:gap-8 md:translate-y-8">
            {/* Stat 5: 160+ Advertisers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8 h-60 shadow-lg shadow-purple-900/5 border border-purple-100/40 text-slate-900"
            >
              <StarburstBadge icon={Target} isPurple={false} />
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                  160+
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                  Advertisers
                </p>
              </div>
            </motion.div>

            {/* Stat 6: 16,209+ Attendees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8 h-60 shadow-lg shadow-purple-900/5 border border-purple-100/40 text-slate-900"
            >
              <StarburstBadge icon={Users} isPurple={false} />
              <div>
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
                  16,209+
                </p>
                <p className="mt-1 text-xs font-extrabold tracking-wider text-slate-500 uppercase">
                  Attendees
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
